import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTopClientesValor extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos 5 clientes que mais consumiram em valor:`);

        let clientesOrdenados = this.clientes
            .sort((a, b) => {
                let valorA =
                    a.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0) +
                    a.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
                let valorB =
                    b.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0) +
                    b.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
                return valorB - valorA;
            })
            .slice(0, 5);

        clientesOrdenados.forEach((cliente) => {
            let valorTotal =
                cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.preco, 0) +
                cliente.getServicosConsumidos.reduce((total, servico) => total + servico.preco, 0);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Valor consumido: R$ ${valorTotal.toFixed(2)}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
