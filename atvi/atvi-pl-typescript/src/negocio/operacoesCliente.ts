import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class OperacoesCliente extends Cadastro {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach((cliente) => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split("/");
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia);
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf);
        this.clientes.push(cliente);
        console.log(`\nCadastro concluído :)\n`);
    }

    public atualizar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente a ser atualizado: ");
        let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);

        if (cliente) {
            let nome = this.entrada.receberTexto(`Digite o novo nome do cliente (atual: ${cliente.nome}): `);
            let nomeSocial = this.entrada.receberTexto(`Digite o novo nome social do cliente (atual: ${cliente.nomeSocial}): `);
            cliente.nome = nome;
            cliente.nomeSocial = nomeSocial;
            console.log(`Cliente atualizado com sucesso!`);
        } else {
            console.log(`Cliente não encontrado!`);
        }
    }

    public deletar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente a ser deletado: ");
        let index = this.clientes.findIndex((cliente) => cliente.getCpf.getValor === cpf);

        if (index !== -1) {
            this.clientes.splice(index, 1);
            console.log(`Cliente deletado com sucesso!`);
        } else {
            console.log(`Cliente não encontrado!`);
        }
    }
}
