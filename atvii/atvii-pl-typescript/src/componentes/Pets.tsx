import { Component } from "react";

type props = { tema: string };

type Pet = {
    nome: string;
    tipo: string;
    raca: string;
    genero: string;
    showDetails?: boolean;
};

type state = { pets: Pet[] };

export default class Pets extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            pets: [
                {
                    nome: "Pet 1",
                    tipo: "Cachorro",
                    raca: "Labrador",
                    genero: "Macho",
                    showDetails: false,
                },
                {
                    nome: "Pet 2",
                    tipo: "Gato",
                    raca: "Siamês",
                    genero: "Fêmea",
                    showDetails: false,
                },
            ],
        };
        this.toggleDetails = this.toggleDetails.bind(this);
    }

    toggleDetails = (index: number) => {
        this.setState((prevState) => {
            const pets = prevState.pets.map((pet, i) => (i === index ? { ...pet, showDetails: !pet.showDetails } : pet));
            return { pets };
        });
    };

    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>
                                Cadastrar
                            </button>
                        </div>
                    </form>
                </div>

                <div className="list-group">
                    {this.state.pets.map((pet, index) => (
                        <div key={index} className="list-group-item">
                            <h5 onClick={() => this.toggleDetails(index)} style={{ cursor: "pointer" }}>
                                {pet.nome}
                            </h5>
                            {pet.showDetails && (
                                <div>
                                    <div>
                                        <p>Tipo: {pet.tipo}</p>
                                        <p>Raça: {pet.raca}</p>
                                        <p>Gênero: {pet.genero}</p>
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
    }
}
