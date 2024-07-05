import Image from "next/image";
import styles from "./page.module.css";

import { PainelFotos } from "@/components/painelFotos";

import fotoPerfil from '@/assets/perfil.jpg'

import { MdOutlinePhotoCamera } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <div className={styles.container} >
        <div className={styles.apresentacao} >
          <div >
            <Image
              src={fotoPerfil}
              alt={"Foto perfil Bianca "}
              layout="responsive"
              style={{ minWidth: 80, minHeight: 80, maxWidth: 200, maxHeight: 200, borderRadius: 100 }}
            />
          </div>
          <div className={styles.info} >
            <h1 className={styles.titulo}>
              BIANCA MACHADO
            </h1>
            <h3 className={styles.subtitulo}>
              <Link href="https://wa.me/5527981655844" target='_blank'><SiWhatsapp size={30} color="green" /></Link >
              <Link href="https://www.instagram.com/biancamachadophoto/" target='_blank'>
                <BsInstagram size={30} />
              </Link >
            </h3 >
          </div>
        </div>

      </div>



      <PainelFotos />

    </div>
  );
}
