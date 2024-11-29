/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type props = { tema: string };

type Cliente = {
    id: string;
    nome: string;
    nomeSocial: string;
    cpf: string;
    rg: string;
    telefone: string;
    dataCadastro: string;
    showDetails?: boolean;
};

type state = {
    clientes: Cliente[];
    nome?: string;
    nomeSocial?: string;
    cpf?: string;
    rg?: string;
    telefone?: string;
    dataCadastro?: string;
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
        const novoCliente = {
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            cpf: this.state.cpf,
            rg: this.state.rg,
            telefone: this.state.telefone,
            dataCadastro: new Date().toISOString(),
        };

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
            cpf: cliente.cpf,
            rg: cliente.rg,
            telefone: cliente.telefone,
            editandoClienteId: cliente.id,
        });
    };

    handleAtualizar = async () => {
        const clienteAtualizado = {
            id: this.state.editandoClienteId,
            nome: this.state.nome,
            nomeSocial: this.state.nomeSocial,
            cpf: this.state.cpf,
            rg: this.state.rg,
            telefone: this.state.telefone,
            dataCadastro: this.state.clientes.find((cliente) => cliente.id === this.state.editandoClienteId)?.dataCadastro,
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

    handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (this.state.editandoClienteId) {
            await this.handleAtualizar();
        } else {
            await this.handleCadastrar();
        }
        this.setState({
            nome: "",
            nomeSocial: "",
            cpf: "",
            rg: "",
            telefone: "",
            editandoClienteId: undefined,
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
                                placeholder="CPF"
                                aria-label="CPF"
                                aria-describedby="basic-addon1"
                                value={this.state.cpf || ""}
                                onChange={(e) => this.setState({ cpf: e.target.value })}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="RG"
                                aria-label="RG"
                                aria-describedby="basic-addon1"
                                value={this.state.rg || ""}
                                onChange={(e) => this.setState({ rg: e.target.value })}
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
                            <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
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
                                        <p>CPF: {cliente.cpf}</p>
                                        <p>RG: {cliente.rg}</p>
                                        <p>Telefone: {cliente.telefone}</p>
                                        <p>Data de Cadastro: {cliente.dataCadastro}</p>
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
