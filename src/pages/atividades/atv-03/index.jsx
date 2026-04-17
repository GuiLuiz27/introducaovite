import { useState } from 'react';

import Botao from './botao';

import styles from './index.module.css';

function Exemplo04() {
    // O hook useState gerencia o valor do contador
    const [funcao, setFuncao] = useState('');

    const cadastrar = () => setFuncao('Cadastrar');
    const editar = () => setFuncao('Editar');
    const listar = () => setFuncao('Listar');
    const excluir = () => setFuncao('Excluir');
    const cancelar = () => setFuncao('Cancelar');
    

    return (
        <div className={styles.container}>
            <h1>Exemplo 4 - Uso de componentes</h1>
            <h2>O valor atual é: {funcao}</h2>

            {/* Passando funções e textos via Props para o componente Botao */}
            <Botao texto="Cadastrar" aoClicar={cadastrar} acao={'cadastrar'} />
            <Botao texto="Editar" aoClicar={editar} acao={'editar'} />
            <Botao texto="Listar" aoClicar={listar} acao={'listar'} />
            <Botao texto="Excluir" aoClicar={excluir} acao={'excluir'} />
            <Botao texto="Cancelar" aoClicar={cancelar} acao={'cancelar'} />
            
        </div>
    );
}

export default Exemplo04;