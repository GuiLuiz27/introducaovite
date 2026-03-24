import { useState } from 'react';

import styles from './index.module.css';

export default function Exemplo03() {

    const [num, setNum] = useState(10);

    function somarUm () {
        setNum(num + 1);
    }

    return (
        <div className={styles.container}>
            <label className={styles.texto}>{`Contador ${num}`}</label>
            <label                
                className={styles.botao} 
                onClick={() => somarUm()}
            >+1</label>
        </div>
    );
}