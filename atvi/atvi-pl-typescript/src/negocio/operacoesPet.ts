import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Pet from "../modelo/pet";

export default class OperacoesPet {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public listar(): void {
        this.clientes.forEach((cliente) => {
            console.log(`Cliente: ${cliente.nome}`);
            cliente.getPets.forEach((pet) => {
                console.log(`  Pet: ${pet.getNome}, Tipo: ${pet.getTipo}, Raça: ${pet.getRaca}, Gênero: ${pet.getGenero}`);
            });
        });
    }

    public cadastrar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente para cadastrar um pet: ");
        let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);

        if (cliente) {
            let nome = this.entrada.receberTexto("Digite o nome do pet: ");
            let tipo = this.entrada.receberTexto("Digite o tipo do pet: ");
            let raca = this.entrada.receberTexto("Digite a raça do pet: ");
            let genero = this.entrada.receberTexto("Digite o gênero do pet: ");
            let pet = new Pet(nome, tipo, raca, genero);
            cliente.getPets.push(pet);
            console.log(`Pet cadastrado com sucesso!`);
        } else {
            console.log(`Cliente não encontrado!`);
        }
    }

    public atualizar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente do pet a ser atualizado: ");
        let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);

        if (cliente) {
            let nomePet = this.entrada.receberTexto("Digite o nome do pet a ser atualizado: ");
            let pet = cliente.getPets.find((pet) => pet.getNome === nomePet);

            if (pet) {
                let nome = this.entrada.receberTexto(`Digite o novo nome do pet (atual: ${pet.getNome}): `);
                let tipo = this.entrada.receberTexto(`Digite o novo tipo do pet (atual: ${pet.getTipo}): `);
                let raca = this.entrada.receberTexto(`Digite a nova raça do pet (atual: ${pet.getRaca}): `);
                let genero = this.entrada.receberTexto(`Digite o novo gênero do pet (atual: ${pet.getGenero}): `);
                pet.setNome(nome);
                pet.setTipo(tipo);
                pet.setRaca(raca);
                pet.setGenero(genero);
                console.log(`Pet atualizado com sucesso!`);
            } else {
                console.log(`Pet não encontrado!`);
            }
        } else {
            console.log(`Cliente não encontrado!`);
        }
    }

    public deletar(): void {
        let cpf = this.entrada.receberTexto("Digite o CPF do cliente do pet a ser deletado: ");
        let cliente = this.clientes.find((cliente) => cliente.getCpf.getValor === cpf);

        if (cliente) {
            let nomePet = this.entrada.receberTexto("Digite o nome do pet a ser deletado: ");
            let index = cliente.getPets.findIndex((pet) => pet.getNome === nomePet);

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
