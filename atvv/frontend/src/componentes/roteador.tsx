import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Cliente from "./Clientes";
import Pets from "./Pets";
import Produtos from "./Produtos";
import RegistroConsumo from "./RegistroConsumo";
import Relatorios from "./Relatorios";
import Servicos from "./Servicos";

type state = {
    tela: string;
};

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            tela: "Clientes",
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault();
        this.setState({
            tela: novaTela,
        });
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao
                seletorView={this.selecionarView}
                tema="#e3f2fd"
                botoes={["Clientes", "Produtos", "Serviços", "Pets", "Registro de Consumo", "Relatórios"]}
            />
        );
        if (this.state.tela === "Clientes") {
            return (
                <>
                    {barraNavegacao}
                    <Cliente tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === "Produtos") {
            return (
                <>
                    {barraNavegacao}
                    <Produtos tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === "Serviços") {
            return (
                <>
                    {barraNavegacao}
                    <Servicos tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === "Pets") {
            return (
                <>
                    {barraNavegacao}
                    <Pets tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === "Registro de Consumo") {
            return (
                <>
                    {barraNavegacao}
                    <RegistroConsumo tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === "Relatórios") {
            return (
                <>
                    {barraNavegacao}
                    <Relatorios tema="#e3f2fd" />
                </>
            );
        }
    }
}
