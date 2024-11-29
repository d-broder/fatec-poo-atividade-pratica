import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class DeletarPet {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente do pet a ser deletado: ");
        let cliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf);

        if (cliente) {
            let nomePet = this.entrada.receberTexto("Digite o nome do pet a ser deletado: ");
            let index = cliente.getPets.findIndex(pet => pet.getNome === nomePet);

            if (index !== -1) {
                cliente.getPets.splice(index, 1);
                console.log(`Pet deletado com sucesso!`);
            } else {
                console.log(`Pet não encontrado!`);
            }
        } else {
            console.log(`Cliente não encontrado!`);
        }
    }
}
