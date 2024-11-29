import { Component } from "react";

type props = { tema: string };

type Produto = {
    nome: string;
    descricao: string;
    preco: string;
    showDetails?: boolean;
};

type state = { produtos: Produto[] };

export default class Produtos extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            produtos: [
                {
                    nome: "Produto 1",
                    descricao: "Descrição 1",
                    preco: "10.00",
                    showDetails: false,
                },
                // ...other products
            ],
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails = (index: number) => {
        this.setState((prevState) => {
            const produtos = prevState.produtos.map((produto, i) => (i === index ? { ...produto, showDetails: !produto.showDetails } : produto));
            return { produtos };
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
                                placeholder="Nome do Produto"
                                aria-label="Nome do Produto"
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
                    {this.state.produtos.map((produto, index) => (
                        <div key={index} className="list-group-item">
                            <h5 onClick={() => this.toggleDetails(index)} style={{ cursor: "pointer" }}>
                                {produto.nome}
                            </h5>
                            {produto.showDetails && (
                                <div>
                                    <p>Descrição: {produto.descricao}</p>
                                    <p>Preço: R$ {produto.preco}</p>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                        <button className="btn btn-primary">Editar</button>
                                        <button className="btn btn-danger">Apagar</button>
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
