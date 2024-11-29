import { useState } from "react";

const RegistroConsumo = (props) => {
    const [consumos, setConsumos] = useState([]);
    const tema = props.tema;

    const toggleDetails = (index) => {
        setConsumos((prevConsumos) => {
            const newConsumos = [...prevConsumos];
            newConsumos[index].showDetails = !newConsumos[index].showDetails;
            return newConsumos;
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
                            placeholder="Nome do Produto/Serviço"
                            aria-label="Nome do Produto/Serviço"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                            Registrar
                        </button>
                    </div>
                </form>
            </div>

            <div className="list-group">
                {consumos.map((consumo, index) => (
                    <div key={index} className="list-group-item">
                        <h5 onClick={() => toggleDetails(index)} style={{ cursor: "pointer" }}>
                            {consumo.nome}
                        </h5>
                        {consumo.showDetails && (
                            <div>
                                <p>Quantidade: {consumo.quantidade}</p>
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

export default RegistroConsumo;
