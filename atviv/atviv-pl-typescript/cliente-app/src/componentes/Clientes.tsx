/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = { tema: string };

type Endereco = {
    bairro: string;
    cidade: string;
    codigoPostal: string;
    estado: string;
    informacoesAdicionais: string;
    numero: string;
    rua: string;
};

type Cliente = {
    id: string;
    nome: string;
    nomeSocial: string;
    email: string;
    endereco: Endereco;
    telefones: { ddd: string; numero: string }[];
    showDetails?: boolean;
};

type state = {
    clientes: Cliente[];
    nome?: string;
    nomeSocial?: string;
    email?: string;
    endereco?: Endereco;
    telefone?: string;
    editandoClienteId?: string;
};

export default class Clientes extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            clientes: [],
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    componentDidMount() {
        this.fetchClientes();
    }

    fetchClientes = async () => {
        try {
            const response = await fetch("http://localhost:32831/cliente/clientes");
            const data = await response.json();
            this.setState({ clientes: data });
        } catch (error) {
            console.error("Erro ao buscar clientes:", error);
        }
    };

    handleCadastrar = async () => {
        const telefoneParts = this.state.telefone?.match(/^(\d{2})(\d{8,9})$/);
        const novoCliente = {
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            email: this.state.email,
            endereco: this.state.endereco,
            telefones: telefoneParts ? [{ ddd: telefoneParts[1], numero: telefoneParts[2] }] : [],
        };

        console.log(JSON.stringify(novoCliente, null, 2)); // Adicione este log para depuração

        try {
            const response = await fetch("http://localhost:32831/cliente/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novoCliente),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Erro ao cadastrar cliente:", errorData);
            } else {
                this.fetchClientes();
            }
        } catch (error) {
            console.error("Erro ao cadastrar cliente:", error);
        }
    };

    handleExcluir = async (id: string) => {
        try {
            await fetch(`http://localhost:32831/cliente/excluir`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id }),
            });
            this.fetchClientes();
        } catch (error) {
            console.error("Erro ao excluir cliente:", error);
        }
    };

    handleEditar = (cliente: Cliente) => {
        this.setState({
            nome: cliente.nome,
            nomeSocial: cliente.nomeSocial,
            email: cliente.email,
            endereco: cliente.endereco,
            telefone: cliente.telefones.length > 0 ? `${cliente.telefones[0].ddd}${cliente.telefones[0].numero}` : "",
            editandoClienteId: cliente.id,
        });
    };

    handleAtualizar = async () => {
        const telefoneParts = this.state.telefone?.match(/^(\d{2})(\d{8,9})$/);
        const clienteAtualizado = {
            id: this.state.editandoClienteId,
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            email: this.state.email,
            endereco: this.state.endereco,
            telefones: telefoneParts ? [{ ddd: telefoneParts[1], numero: telefoneParts[2] }] : [],
        };

        try {
            const response = await fetch("http://localhost:32831/cliente/atualizar", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(clienteAtualizado),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Erro ao atualizar cliente:", errorData);
            } else {
                this.setState({ editandoClienteId: undefined });
                this.fetchClientes();
            }
        } catch (error) {
            console.error("Erro ao atualizar cliente:", error);
        }
    };

    toggleDetails = (index: number) => {
        this.setState((prevState) => {
            const clientes = prevState.clientes.map((cliente, i) => (i === index ? { ...cliente, showDetails: !cliente.showDetails } : cliente));
            return { clientes };
        });
    };

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="col-md-6 mx-auto">
                    <form>
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
                                placeholder="Nome social"
                                aria-label="Nome social"
                                aria-describedby="basic-addon1"
                                value={this.state.nomeSocial || ""}
                                onChange={(e) => this.setState({ nomeSocial: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                value={this.state.email || ""}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rua"
                                aria-label="Rua"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.rua || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, rua: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número"
                                aria-label="Número"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.numero || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, numero: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Bairro"
                                aria-label="Bairro"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.bairro || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, bairro: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cidade"
                                aria-label="Cidade"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.cidade || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, cidade: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Estado"
                                aria-label="Estado"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.estado || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, estado: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Código Postal"
                                aria-label="Código Postal"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.codigoPostal || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, codigoPostal: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Informações Adicionais"
                                aria-label="Informações Adicionais"
                                aria-describedby="basic-addon1"
                                value={this.state.endereco?.informacoesAdicionais || ""}
                                onChange={(e) => this.setState({ endereco: { ...this.state.endereco, informacoesAdicionais: e.target.value } as Endereco })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Telefone"
                                aria-label="Telefones"
                                aria-describedby="basic-addon1"
                                value={this.state.telefone || ""}
                                onChange={(e) => this.setState({ telefone: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                style={{ background: tema }}
                                onClick={this.state.editandoClienteId ? this.handleAtualizar : this.handleCadastrar}
                            >
                                {this.state.editandoClienteId ? "Atualizar" : "Cadastrar"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="list-group">
                    {this.state.clientes.map((cliente, index) => (
                        <div key={index} className="list-group-item">
                            <h5 onClick={() => this.toggleDetails(index)} style={{ cursor: "pointer" }}>
                                {cliente.nome}
                            </h5>
                            {cliente.showDetails && (
                                <div>
                                    <div>
                                        <p>Nome Social: {cliente.nomeSocial}</p>
                                        <p>Email: {cliente.email}</p>
                                        <p>
                                            Endereço: {cliente.endereco.rua}, {cliente.endereco.numero}, {cliente.endereco.bairro}, {cliente.endereco.cidade},{" "}
                                            {cliente.endereco.estado}, {cliente.endereco.codigoPostal}
                                        </p>
                                        <p>Informações Adicionais: {cliente.endereco.informacoesAdicionais}</p>
                                        <p>Telefones: {cliente.telefones.map((tel) => `(${tel.ddd}) ${tel.numero}`).join(", ")}</p>
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button className="btn btn-primary" onClick={() => this.handleEditar(cliente)}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger" onClick={() => this.handleExcluir(cliente.id)}>
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
