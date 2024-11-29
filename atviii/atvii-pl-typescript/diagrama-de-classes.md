# Diagrama de classes

* Cliente
public nome: string
public nomeSocial: string
public cpf: CPF
private rgs: Array<RG>
private dataCadastro: Date
private telefones: Array<Telefone>
private produtosConsumidos: Array<Produto>
private servicosConsumidos: Array<Servico>
private pets: Array<Pet>

constructor(nome: string, nomeSocial: string, cpf: CPF)
public get getCpf(): CPF
public get getRgs(): Array<RG>
public get getDataCadastro(): Date
public get getTelefones(): Array<Telefone>
public get getProdutosConsumidos(): Array<Produto>
public get getServicosConsumidos(): Array<Servico>
public get getPets(): Array<Pet>

* ListagemClientes
private clientes: Array<Cliente>

constructor(clientes: Array<Cliente>)
public listar(): void

* Listagem
public abstract listar(): void

* CadastroCliente
private clientes: Array<Cliente>
private entrada: Entrada

constructor(clientes: Array<Cliente>)
public cadastrar(): void

* Entrada
public receberNumero(mensagem: string): number
public receberTexto(mensagem: string): string

* Cadastro
public abstract cadastrar(): void

* Empresa
private clientes: Array<Cliente>
private produtos: Array<Produto>
private servicos: Array<Servico>

public get getClientes()
public get getProdutos()
public get getServicos()

* Produto
public nome: string

* Servico
public nome: string

* RG
private valor: string
private dataEmissao: Date

constructor(valor: string, dataEmissao: Date)
public get getValor(): string
public get getDataEmissao(): Date

* CPF
private valor: string
private dataEmissao: Date

constructor(valor: string, dataEmissao: Date)
public get getValor(): string
public get getDataEmissao(): Date

* Telefone
private ddd: string
private numero: string

constructor(ddd: string, numero: string)
public get getDdd(): string
public get getNumero(): string

* Pet
private nome: string
private tipo: string
private raca: string
private genero: string

constructor(nome: string, tipo: string, raca: string, genero: string)
public get getNome()
public get getTipo()
public get getRaca()
public get getGenero()