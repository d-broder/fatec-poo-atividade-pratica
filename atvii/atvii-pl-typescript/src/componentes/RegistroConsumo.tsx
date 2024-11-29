import { Component } from "react";

type props = {
    tema: string;
};

type state = {
    cliente: string;
    produtoServico: string;
    quantidade: number;
};

export default class RegistroConsumo extends Component<props, state> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            cliente: "",
            produtoServico: "",
            quantidade: 0,
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value,
        } as unknown as Pick<state, keyof state>);
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Registro de Consumo:", this.state);
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="col-md-6 mx-auto">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Cliente"
                                name="cliente"
                                value={this.state.cliente}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Produto/Serviço"
                                name="produtoServico"
                                value={this.state.produtoServico}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Quantidade"
                                name="quantidade"
                                value={this.state.quantidade}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>
                                Registrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
