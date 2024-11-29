import { useState } from "react";

const Pets = (props) => {
    const [pets, setPets] = useState([
        {
            nome: "Pet 1",
            tipo: "Cachorro",
            raca: "Labrador",
            showDetails: false,
        },
        {
            nome: "Pet 2",
            tipo: "Gato",
            raca: "Siamês",
            showDetails: false,
        },
        // ...other pets
    ]);
    const tema = props.tema;

    const toggleDetails = (index) => {
        setPets((prevPets) => {
            const newPets = [...prevPets];
            newPets[index].showDetails = !newPets[index].showDetails;
            return newPets;
        });
    };

    return (
        <div className="container-fluid">
            <div className="col-md-6 mx-auto">
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>

            <div className="list-group">
                {pets.map((pet, index) => (
                    <div key={index} className="list-group-item">
                        <h5 onClick={() => toggleDetails(index)} style={{ cursor: "pointer" }}>
                            {pet.nome}
                        </h5>
                        {pet.showDetails && (
                            <div>
                                <p>Tipo: {pet.tipo}</p>
                                <p>Raça: {pet.raca}</p>
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

export default Pets;
