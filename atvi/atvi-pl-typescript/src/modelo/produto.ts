export default class Produto {
    public nome!: string;
    public consumo: number = 0;
    public preco: number; // Add this line

    constructor(nome: string, preco: number) {
        // Modify constructor
        this.nome = nome;
        this.preco = preco;
    }
}
