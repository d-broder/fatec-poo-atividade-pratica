import { useState } from "react";

const Produtos = (props) => {
    const [produtos, setProdutos] = useState([
        {
            nome: "Produto 1",
            descricao: "Descrição 1",
            preco: "10.00",
            showDetails: false,
        },
        // ...other products
    ]);
    const tema = props.tema;

    const toggleDetails = (index) => {
        setProdutos((prevProdutos) => {
            const newProdutos = [...prevProdutos];
            newProdutos[index].showDetails = !newProdutos[index].showDetails;
            return newProdutos;
        });
    };

    return (
        <div className="container-fluid">
            <div className="col-md-6 mx-auto">
                <form>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nome do Produto"
                            aria-label="Nome do Produto"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Descrição" aria-label="Descrição" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>
                            R$
                        </span>
                        <input type="text" className="form-control" placeholder="Preço" aria-label="Preço" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>

            <div className="list-group">
                {produtos.map((produto, index) => (
                    <div key={index} className="list-group-item">
                        <h5 onClick={() => toggleDetails(index)} style={{ cursor: "pointer" }}>
                            {produto.nome}
                        </h5>
                        {produto.showDetails && (
                            <div>
                                <p>Descrição: {produto.descricao}</p>
                                <p>Preço: R$ {produto.preco}</p>
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

export default Produtos;
