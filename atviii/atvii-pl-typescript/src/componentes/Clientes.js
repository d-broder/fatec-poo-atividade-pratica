import { useState } from "react";

const Clientes = (props) => {
    const [clientes, setClientes] = useState([
        {
            nome: "Cliente 1",
            nomeSocial: "Cliente Social 1",
            cpf: "123.456.789-00",
            rgs: ["12.345.678-9"],
            dataCadastro: "01/01/2020",
            telefones: ["(11) 1234-5678"],
            produtosConsumidos: ["Produto 1"],
            servicosConsumidos: ["Serviço 1"],
            pets: ["Pet 1"],
            showDetails: false,
        },
        {
            nome: "Cliente 2",
            nomeSocial: "Cliente Social 2",
            cpf: "987.654.321-00",
            rgs: ["98.765.432-1"],
            dataCadastro: "02/02/2021",
            telefones: ["(21) 8765-4321"],
            produtosConsumidos: ["Produto 2"],
            servicosConsumidos: ["Serviço 2"],
            pets: ["Pet 2"],
            showDetails: false,
        },
        // ...other clients
    ]);
    const [tema, setTema] = useState(props.tema);

    const toggleDetails = (index) => {
        setClientes((prevClientes) => {
            const newClientes = [...prevClientes];
            newClientes[index].showDetails = !newClientes[index].showDetails;
            return newClientes;
        });
    };

    return (
        <div className="container-fluid">
            <div className="col-md-6 mx-auto">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="RG" aria-label="RGs" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefones" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pets" aria-label="Pets" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>

            <div className="list-group">
                {clientes.map((cliente, index) => (
                    <div key={index} className="list-group-item">
                        <h5 onClick={() => toggleDetails(index)} style={{ cursor: "pointer" }}>
                            {cliente.nome}
                        </h5>
                        {cliente.showDetails && (
                            <div>
                                <div>
                                    <p>Nome Social: {cliente.nomeSocial}</p>
                                    <p>CPF: {cliente.cpf}</p>
                                    <p>RGs: {cliente.rgs.join(", ")}</p>
                                    <p>Data de Cadastro: {cliente.dataCadastro}</p>
                                    <p>Telefones: {cliente.telefones.join(", ")}</p>
                                    <p>Produtos Consumidos: {cliente.produtosConsumidos.join(", ")}</p>
                                    <p>Serviços Consumidos: {cliente.servicosConsumidos.join(", ")}</p>
                                    <p>Pets: {cliente.pets.join(", ")}</p>
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem" }}>
                                    <button className="btn btn-primary">Editar</button>
                                    <button className="btn btn-danger">Apagar</button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clientes;
