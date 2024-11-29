export default class Servico {
    public nome!: string;
    public consumo: number = 0;
    public preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}
