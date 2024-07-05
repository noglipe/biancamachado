import Image from "next/image";
import styles from "./page.module.css";

import { PainelFotos } from "@/components/painelFotos";

import fotoPerfil from '@/assets/perfil.jpg'

import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className={styles.container} >
        <div className={styles.apresentacao} >
          <div className={styles.foto} >
            <Image
              src={fotoPerfil}
              alt={"Foto perfil Bianca "}
              layout="responsive"
              style={{ minWidth: 150, minHeight: 150, maxWidth: 200, maxHeight: 200, borderRadius: 100 }}
            />
          </div>
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
            <div className={styles.redesSociais}>
              <Link href="https://wa.me/5527981655844" target='_blank'><SiWhatsapp size={30} color="green" /></Link >
              <Link href="https://www.instagram.com/biancamachadophoto/" target='_blank'>
                <BsInstagram size={30} />
              </Link >
            </div >
          </div>

        </div>

      </div>

      <PainelFotos />

    </div>
  );
}
