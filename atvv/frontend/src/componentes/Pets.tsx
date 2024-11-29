import { Component } from "react";

type props = { tema: string };

type Pet = {
    id?: string;
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    cpfDono: string;
    showDetails?: boolean;
};

type state = {
    pets: Pet[];
    nome?: string;
    tipo?: string;
    raca?: string;
    genero?: string;
    cpfDono?: string;
    editandoPetId?: string;
};

export default class Pets extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            pets: [],
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    componentDidMount() {
        this.fetchPets();
    }

    fetchPets = async () => {
        try {
            const response = await fetch("http://localhost:32831/pet/pets");
            const data = await response.json();
            this.setState({ pets: data });
        } catch (error) {
            console.error("Erro ao buscar pets:", error);
        }
    };

    handleCadastrar = async () => {
        const novoPet = {
            nome: this.state.nome,
            tipo: this.state.tipo,
            raca: this.state.raca,
            genero: this.state.genero,
            cpfDono: this.state.cpfDono,
        };

        try {
            const response = await fetch("http://localhost:32831/pet/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoPet),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Erro ao cadastrar pet:", errorData);
            } else {
                this.fetchPets();
            }
        } catch (error) {
            console.error("Erro ao cadastrar pet:", error);
        }
    };

    handleExcluir = async (id: string) => {
        try {
            await fetch(`http://localhost:32831/pet/excluir`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            this.fetchPets();
        } catch (error) {
            console.error("Erro ao excluir pet:", error);
        }
    };

    handleEditar = (pet: Pet) => {
        this.setState({
            nome: pet.nome,
            tipo: pet.tipo,
            raca: pet.raca,
            genero: pet.genero,
            cpfDono: pet.cpfDono,
            editandoPetId: pet.id,
        });
    };

    handleAtualizar = async () => {
        const petAtualizado = {
            id: this.state.editandoPetId,
            nome: this.state.nome,
            tipo: this.state.tipo,
            raca: this.state.raca,
            genero: this.state.genero,
            cpfDono: this.state.cpfDono,
        };

        try {
            const response = await fetch("http://localhost:32831/pet/atualizar", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(petAtualizado),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Erro ao atualizar pet:", errorData);
            } else {
                this.setState({ editandoPetId: undefined });
                this.fetchPets();
            }
        } catch (error) {
            console.error("Erro ao atualizar pet:", error);
        }
    };

    toggleDetails = (index: number) => {
        this.setState((prevState) => {
            const pets = prevState.pets.map((pet, i) => (i === index ? { ...pet, showDetails: !pet.showDetails } : pet));
            return { pets };
        });
    };

    handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (this.state.editandoPetId) {
            await this.handleAtualizar();
        } else {
            await this.handleCadastrar();
        }
        this.setState({
            nome: "",
            tipo: "",
            raca: "",
            genero: "",
            cpfDono: "",
            editandoPetId: undefined,
        });
    };

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nome"
                                aria-label="Nome"
                                aria-describedby="basic-addon1"
                                value={this.state.nome || ""}
                                onChange={(e) => this.setState({ nome: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Tipo"
                                aria-label="Tipo"
                                aria-describedby="basic-addon1"
                                value={this.state.tipo || ""}
                                onChange={(e) => this.setState({ tipo: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Raça"
                                aria-label="Raça"
                                aria-describedby="basic-addon1"
                                value={this.state.raca || ""}
                                onChange={(e) => this.setState({ raca: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Gênero"
                                aria-label="Gênero"
                                aria-describedby="basic-addon1"
                                value={this.state.genero || ""}
                                onChange={(e) => this.setState({ genero: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="CPF do Dono"
                                aria-label="CPF do Dono"
                                aria-describedby="basic-addon1"
                                value={this.state.cpfDono || ""}
                                onChange={(e) => this.setState({ cpfDono: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                                {this.state.editandoPetId ? "Atualizar" : "Cadastrar"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="list-group">
                    {this.state.pets.map((pet, index) => (
                        <div key={index} className="list-group-item">
                            <h5 onClick={() => this.toggleDetails(index)} style={{ cursor: "pointer" }}>
                                {pet.nome}
                            </h5>
                            {pet.showDetails && (
                                <div>
                                    <div>
                                        <p>Tipo: {pet.tipo}</p>
                                        <p>Raça: {pet.raca}</p>
                                        <p>Gênero: {pet.genero}</p>
                                        <p>CPF do Dono: {pet.cpfDono}</p>
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button className="btn btn-primary" onClick={() => this.handleEditar(pet)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger" onClick={() => this.handleExcluir(pet.id!)}>
                                            Apagar
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
