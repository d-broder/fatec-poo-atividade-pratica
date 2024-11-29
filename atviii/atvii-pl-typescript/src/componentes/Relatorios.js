import { Component } from "react";

class Relatorios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientes: [
                { nome: "Cliente 1", quantidade: 15 },
                { nome: "Cliente 2", quantidade: 12 },
                { nome: "Cliente 3", quantidade: 10 },
                { nome: "Cliente 4", quantidade: 9 },
                { nome: "Cliente 5", quantidade: 8 },
                { nome: "Cliente 6", quantidade: 7 },
                { nome: "Cliente 7", quantidade: 6 },
                { nome: "Cliente 8", quantidade: 5 },
                { nome: "Cliente 9", quantidade: 4 },
                { nome: "Cliente 10", quantidade: 3 },
            ],
            produtosServicos: [
                { nome: "Produto 1", quantidade: 20 },
                { nome: "Serviço 1", quantidade: 18 },
                { nome: "Produto 2", quantidade: 15 },
                { nome: "Serviço 2", quantidade: 12 },
            ],
            tipoRacaPets: [
                { tipo: "Cachorro", raca: "Labrador", nome: "Produto 1", quantidade: 10 },
                { tipo: "Gato", raca: "Siamês", nome: "Serviço 1", quantidade: 8 },
                { tipo: "Cachorro", raca: "Poodle", nome: "Produto 2", quantidade: 7 },
                { tipo: "Gato", raca: "Persa", nome: "Serviço 2", quantidade: 5 },
            ],
            clientesValor: [
                { nome: "Cliente 1", valor: 1500 },
                { nome: "Cliente 2", valor: 1200 },
                { nome: "Cliente 3", valor: 1000 },
                { nome: "Cliente 4", valor: 900 },
                { nome: "Cliente 5", valor: 800 },
            ],
        };
    }

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="col-md-8 mx-auto">
                    <div className="mb-4">
                        <h4>Top 10 Clientes por Quantidade</h4>
                        <ul className="list-group">
                            {this.state.clientes.map((cliente, index) => (
                                <li key={index} className="list-group-item">
                                    {cliente.nome} - {cliente.quantidade} itens
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4>Produtos/Serviços Mais Consumidos</h4>
                        <ul className="list-group">
                            {this.state.produtosServicos.map((item, index) => (
                                <li key={index} className="list-group-item">
                                    {item.nome} - {item.quantidade} vezes
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4>Produtos/Serviços Mais Consumidos por Tipo e Raça de Pets</h4>
                        <ul className="list-group">
                            {this.state.tipoRacaPets.map((item, index) => (
                                <li key={index} className="list-group-item">
                                    {item.tipo} - {item.raca} - {item.nome} - {item.quantidade} vezes
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h4>Top 5 Clientes por Valor</h4>
                        <ul className="list-group">
                            {this.state.clientesValor.map((cliente, index) => (
                                <li key={index} className="list-group-item">
                                    {cliente.nome} - R$ {cliente.valor}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Relatorios;
