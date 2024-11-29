import { Component } from "react";

type props = { tema: string };

type Servico = {
    nome: string;
    descricao: string;
    preco: string;
    showDetails?: boolean;
};

type state = { servicos: Servico[] };

export default class Servicos extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            servicos: [
                {
                    nome: "Serviço 1",
                    descricao: "Descrição 1",
                    preco: "10.00",
                    showDetails: false,
                },
                // ...other services
            ],
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails = (index: number) => {
        this.setState((prevState) => {
            const servicos = prevState.servicos.map((servico, i) => (i === index ? { ...servico, showDetails: !servico.showDetails } : servico));
            return { servicos };
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
                                placeholder="Nome do Serviço"
                                aria-label="Nome do Serviço"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>
                                R$
                            </span>
                            <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="list-group">
                    {this.state.servicos.map((servico, index) => (
                        <div key={index} className="list-group-item">
                            <h5 onClick={() => this.toggleDetails(index)} style={{ cursor: "pointer" }}>
                                {servico.nome}
                            </h5>
                            {servico.showDetails && (
                                <div>
                                    <p>Descrição: {servico.descricao}</p>
                                    <p>Preço: R$ {servico.preco}</p>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button className="btn btn-primary" style={{ backgroundColor: tema }}>
                                            Editar
                                        </button>
                                        <button className="btn btn-danger" style={{ backgroundColor: tema }}>
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

export {};
