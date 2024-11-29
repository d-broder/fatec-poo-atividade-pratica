import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

export default class OperacoesServico {
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(servicos: Array<Servico>) {
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nLista de todos os serviços:`);
        this.servicos.forEach((servico) => {
            console.log(`Nome: ${servico.nome}`);
            console.log(`Preço: ${servico.preco}`);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `);
        let servico = new Servico(nome, preco);
        this.servicos.push(servico);
        console.log(`\nCadastro concluído :)\n`);
    }

    public atualizar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do serviço a ser atualizado: ");
        let servico = this.servicos.find((servico) => servico.nome === nome);

        if (servico) {
            let novoNome = this.entrada.receberTexto(`Digite o novo nome do serviço (atual: ${servico.nome}): `);
            let novoPreco = this.entrada.receberNumero(`Digite o novo preço do serviço (atual: ${servico.preco}): `);
            servico.nome = novoNome;
            servico.preco = novoPreco;
            console.log(`Serviço atualizado com sucesso!`);
        } else {
            console.log(`Serviço não encontrado!`);
        }
    }

    public deletar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do serviço a ser deletado: ");
        let index = this.servicos.findIndex((servico) => servico.nome === nome);

        if (index !== -1) {
            this.servicos.splice(index, 1);
            console.log(`Serviço deletado com sucesso!`);
        } else {
            console.log(`Serviço não encontrado!`);
        }
    }
}
