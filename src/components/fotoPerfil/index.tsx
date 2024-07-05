import styles from './index.module.css'

import fotoPerfil from '@/assets/perfil.jpg'

import Image from "next/image";

export function FotoPerfil() {
    return (
        <div className={styles.foto} >
            <Image
                src={fotoPerfil}
                alt={"Foto perfil Bianca "}
                layout="responsive"
                style={{ minWidth: 150, minHeight: 150, maxWidth: 200, maxHeight: 200, borderRadius: 100 }}
            />
        </div>
    )
}