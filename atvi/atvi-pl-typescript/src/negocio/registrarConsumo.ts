import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class RegistrarConsumo {
    private clientes: Array<Cliente>;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public registrar(): void {
        console.log(`\nRegistro de consumo de produto ou serviço`);
        let cpf = this.entrada.receberTexto(`Informe o CPF do cliente: `);
        let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);

        if (!cliente) {
            console.log(`Cliente não encontrado!`);
            return;
        }

        let opcao = this.entrada.receberNumero(`Digite 1 para registrar produto ou 2 para registrar serviço: `);

        if (opcao === 1) {
            let nomeProduto = this.entrada.receberTexto(`Informe o nome do produto: `);
            let produto = this.produtos.find((produto) => produto.nome === nomeProduto);

            if (!produto) {
                console.log(`Produto não encontrado!`);
                return;
            }

            cliente.getProdutosConsumidos.push(produto);
            produto.consumo++;
            console.log(`Produto registrado com sucesso!`);
        } else if (opcao === 2) {
            let nomeServico = this.entrada.receberTexto(`Informe o nome do serviço: `);
            let servico = this.servicos.find((servico) => servico.nome === nomeServico);

            if (!servico) {
                console.log(`Serviço não encontrado!`);
                return;
            }

            cliente.getServicosConsumidos.push(servico);
            servico.consumo++;
            console.log(`Serviço registrado com sucesso!`);
        } else {
            console.log(`Opção inválida!`);
        }
    }
}
