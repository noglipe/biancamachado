import React from 'react';

import styles from './index.module.css'

interface LinksProps {
    icone: React.ElementType<{ size?: number }>
    descricao: string;
}

const Links: React.FC<LinksProps> = ({ icone: Icone, descricao }) => {
    return (
        <div className={styles.container}>
            <div className={styles.icone}>
                <Icone size={30} />
            </div>
            <div className={styles.descricao}>
                <p>{descricao}</p>
            </div>
        </div>
    );
};

export default Links;
