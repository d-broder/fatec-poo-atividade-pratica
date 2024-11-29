import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import Cliente from "./Clientes";
import Pets from "./Pets";
import Produtos from "./Produtos";
import RegistroConsumo from "./RegistroConsumo";
import Relatorios from "./Relatorios";
import Servicos from "./Servicos";

const Roteador = () => {
    const [tela, setTela] = useState("Clientes");

    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();
        setTela(novaTela);
    };

    let barraNavegacao = (
        <BarraNavegacao
            seletorView={selecionarView}
            tema="#e3f2fd"
            botoes={["Clientes", "Produtos", "Serviços", "Pets", "Registro de Consumo", "Relatórios"]}
        />
    );

    if (tela === "Clientes") {
        return (
            <>
                {barraNavegacao}
                <Cliente tema="#e3f2fd" />
            </>
        );
    } else if (tela === "Produtos") {
        return (
            <>
                {barraNavegacao}
                <Produtos tema="#e3f2fd" />
            </>
        );
    } else if (tela === "Serviços") {
        return (
            <>
                {barraNavegacao}
                <Servicos tema="#e3f2fd" />
            </>
        );
    } else if (tela === "Pets") {
        return (
            <>
                {barraNavegacao}
                <Pets tema="#e3f2fd" />
            </>
        );
    } else if (tela === "Registro de Consumo") {
        return (
            <>
                {barraNavegacao}
                <RegistroConsumo tema="#e3f2fd" />
            </>
        );
    } else if (tela === "Relatórios") {
        return (
            <>
                {barraNavegacao}
                <Relatorios tema="#e3f2fd" />
            </>
        );
    }
};

export default Roteador;
