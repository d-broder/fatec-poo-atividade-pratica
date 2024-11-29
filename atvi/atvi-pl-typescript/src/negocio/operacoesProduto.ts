import Entrada from "../io/entrada";
import Produto from "../modelo/produto";

export default class OperacoesProduto {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produtos.forEach((produto) => {
            console.log(`Nome: ${produto.nome}`);
            console.log(`Preço: ${produto.preco}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `);
        let produto = new Produto(nome, preco);
        this.produtos.push(produto);
        console.log(`\nCadastro concluído :)\n`);
    }

    public atualizar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do produto a ser atualizado: ");
        let produto = this.produtos.find((produto) => produto.nome === nome);

        if (produto) {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do produto (atual: ${produto.nome}): `);
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do produto (atual: ${produto.preco}): `);
            produto.nome = novoNome;
            produto.preco = novoPreco;
            console.log(`Produto atualizado com sucesso!`);
        } else {
            console.log(`Produto não encontrado!`);
        }
    }

    public deletar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do produto a ser deletado: ");
        let index = this.produtos.findIndex((produto) => produto.nome === nome);

        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Produto deletado com sucesso!`);
        } else {
            console.log(`Produto não encontrado!`);
        }
    }
}
