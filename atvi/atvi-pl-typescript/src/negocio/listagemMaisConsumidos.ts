import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListagemMaisConsumidos {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>) {
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public listar(): void {
        console.log(`Listagem dos produtos e serviços mais consumidos:`);

        // Assuming each product and service has a 'consumo' property to track consumption count
        let produtosOrdenados = this.produtos.sort((a, b) => b.consumo - a.consumo);
        let servicosOrdenados = this.servicos.sort((a, b) => b.consumo - a.consumo);

        console.log(`Produtos:`);
        produtosOrdenados.forEach((produto) => {
            console.log(`${produto.nome} - Consumido ${produto.consumo} vezes`);
        });

        console.log(`Serviços:`);
        servicosOrdenados.forEach((servico) => {
            console.log(`${servico.nome} - Consumido ${servico.consumo} vezes`);
        });
    }
}
