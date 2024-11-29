import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import ListagemMaisConsumidos from "../negocio/listagemMaisConsumidos";
import ListagemMaisConsumidosPorTipo from "../negocio/listagemMaisConsumidosPorTipo";
import ListagemTopClientes from "../negocio/listagemTopClientes";
import ListagemTopClientesValor from "../negocio/listagemTopClientesValor";
import OperacoesCliente from "../negocio/operacoesCliente";
import OperacoesPet from "../negocio/operacoesPet";
import OperacoesProduto from "../negocio/operacoesProduto";
import OperacoesServico from "../negocio/operacoesServico";
import RegistrarConsumo from "../negocio/registrarConsumo";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`);
let empresa = new Empresa();
let execucao = true;
let operacoesCliente: OperacoesCliente;
let operacoesPet: OperacoesPet;
let operacoesProduto: OperacoesProduto;
let operacoesServico: OperacoesServico;
let registrarConsumo: RegistrarConsumo;
let listagemTopClientes: ListagemTopClientes;
let listagemMaisConsumidos: ListagemMaisConsumidos;
let listagemMaisConsumidosPorTipo: ListagemMaisConsumidosPorTipo;
let listagemTopClientesValor: ListagemTopClientesValor;

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Deletar cliente`);
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Listar pets`);
    console.log(`7 - Atualizar pet`);
    console.log(`8 - Deletar pet`);
    console.log(`9 - Cadastrar produto`);
    console.log(`10 - Listar produtos`);
    console.log(`11 - Atualizar produto`);
    console.log(`12 - Deletar produto`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`14 - Listar serviços`);
    console.log(`15 - Atualizar serviço`);
    console.log(`16 - Deletar serviço`);
    console.log(`17 - Registrar consumo de produto ou serviço`);
    console.log(`18 - Listar os 10 clientes que mais consumiram produtos ou serviços`);
    console.log(`19 - Listar os serviços ou produtos mais consumidos`);
    console.log(`20 - Listar os serviços ou produtos mais consumidos por tipo e raça de pets`);
    console.log(`21 - Listar os 5 clientes que mais consumiram em valor`);
    console.log(`0 - Sair`);

    let entrada = new Entrada();
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `);

    switch (opcao) {
        case 1:
            operacoesCliente = new OperacoesCliente(empresa.getClientes);
            operacoesCliente.cadastrar();
            break;
        case 2:
            operacoesCliente = new OperacoesCliente(empresa.getClientes);
            operacoesCliente.listar();
            break;
        case 3:
            operacoesCliente = new OperacoesCliente(empresa.getClientes);
            operacoesCliente.atualizar();
            break;
        case 4:
            operacoesCliente = new OperacoesCliente(empresa.getClientes);
            operacoesCliente.deletar();
            break;
        case 5:
            operacoesPet = new OperacoesPet(empresa.getClientes);
            operacoesPet.cadastrar();
            break;
        case 6:
            operacoesPet = new OperacoesPet(empresa.getClientes);
            operacoesPet.listar();
            break;
        case 7:
            operacoesPet = new OperacoesPet(empresa.getClientes);
            operacoesPet.atualizar();
            break;
        case 8:
            operacoesPet = new OperacoesPet(empresa.getClientes);
            operacoesPet.deletar();
            break;
        case 9:
            operacoesProduto = new OperacoesProduto(empresa.getProdutos);
            operacoesProduto.cadastrar();
            break;
        case 10:
            operacoesProduto = new OperacoesProduto(empresa.getProdutos);
            operacoesProduto.listar();
            break;
        case 11:
            operacoesProduto = new OperacoesProduto(empresa.getProdutos);
            operacoesProduto.atualizar();
            break;
        case 12:
            operacoesProduto = new OperacoesProduto(empresa.getProdutos);
            operacoesProduto.deletar();
            break;
        case 13:
            operacoesServico = new OperacoesServico(empresa.getServicos);
            operacoesServico.cadastrar();
            break;
        case 14:
            operacoesServico = new OperacoesServico(empresa.getServicos);
            operacoesServico.listar();
            break;
        case 15:
            operacoesServico = new OperacoesServico(empresa.getServicos);
            operacoesServico.atualizar();
            break;
        case 16:
            operacoesServico = new OperacoesServico(empresa.getServicos);
            operacoesServico.deletar();
            break;
        case 17:
            registrarConsumo = new RegistrarConsumo(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            registrarConsumo.registrar();
            break;
        case 18:
            listagemTopClientes = new ListagemTopClientes(empresa.getClientes);
            listagemTopClientes.listar();
            break;
        case 19:
            listagemMaisConsumidos = new ListagemMaisConsumidos(empresa.getProdutos, empresa.getServicos);
            listagemMaisConsumidos.listar();
            break;
        case 20:
            listagemMaisConsumidosPorTipo = new ListagemMaisConsumidosPorTipo(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            listagemMaisConsumidosPorTipo.listar();
            break;
        case 21:
            listagemTopClientesValor = new ListagemTopClientesValor(empresa.getClientes);
            listagemTopClientesValor.listar();
            break;
        case 0:
            execucao = false;
            console.log(`Até mais`);
            break;
        default:
            console.log(`Operação não entendida :(`);
    }
}
