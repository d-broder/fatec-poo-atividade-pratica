import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListagemMaisConsumidosPorTipo {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private clientes: Array<Cliente>;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>) {
        this.produtos = produtos;
        this.servicos = servicos;
        this.clientes = clientes;
    }

    public listar(): void {
        console.log(`Listagem dos produtos e serviços mais consumidos por tipo e raça de pets:`);

        let consumoPorTipo: { [key: string]: number } = {};
        let consumoPorRaca: { [key: string]: number } = {};

        this.clientes.forEach((cliente) => {
            cliente.getPets.forEach((pet) => {
                cliente.getProdutosConsumidos.forEach((produto) => {
                    consumoPorTipo[pet.getTipo] = (consumoPorTipo[pet.getTipo] || 0) + produto.consumo;
                    consumoPorRaca[pet.getRaca] = (consumoPorRaca[pet.getRaca] || 0) + produto.consumo;
                });
                cliente.getServicosConsumidos.forEach((servico) => {
                    consumoPorTipo[pet.getTipo] = (consumoPorTipo[pet.getTipo] || 0) + servico.consumo;
                    consumoPorRaca[pet.getRaca] = (consumoPorRaca[pet.getRaca] || 0) + servico.consumo;
                });
            });
        });

        console.log(`Consumo por tipo de pet:`);
        for (let tipo in consumoPorTipo) {
            console.log(`${tipo} - Consumido ${consumoPorTipo[tipo]} vezes`);
        }

        console.log(`Consumo por raça de pet:`);
        for (let raca in consumoPorRaca) {
            console.log(`${raca} - Consumido ${consumoPorRaca[raca]} vezes`);
        }
    }
}
