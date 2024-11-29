import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTopClientes extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços:`);
        let clientesOrdenados = this.clientes
            .sort((a, b) => {
                let consumoA = a.getProdutosConsumidos.length + a.getServicosConsumidos.length;
                let consumoB = b.getProdutosConsumidos.length + b.getServicosConsumidos.length;
                return consumoB - consumoA;
            })
            .slice(0, 10);

        clientesOrdenados.forEach((cliente) => {
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`Serviços consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
