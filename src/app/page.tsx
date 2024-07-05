
import styles from "./page.module.css";

import { PainelFotos } from "@/components/painelFotos";

import { FotoPerfil } from "@/components/fotoPerfil";
import { RedesSociais } from "@/components/redesSociais";

export default function Home() {
  return (
    <div>

      <div className={styles.container} >
        <div className={styles.apresentacao} >
          <FotoPerfil />
          <div className={styles.info} >
            <h1 className={styles.titulo}>
              <span className={styles.hello}><strong>Hello!</strong> </span>
              <span>Eu sou Bianca Machado</span>
            </h1>
            <div className={styles.subtitulo}>
              <p>Sou fotógrafa há 8 anos e nem consigo mais
                imaginar a minha vida sem a fotografia. Fico feliz que esteja aqui e tenha de alguma
                forma se identificado com o meu traballho.</p>
              <p>Estou disponível para conversar
                e te ajudar no que for preciso!</p>
              <br />
            </div>
            <RedesSociais />
          </div>

        </div>

      </div>

      <PainelFotos />

    </div>
  );
}
