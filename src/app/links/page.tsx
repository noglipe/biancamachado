

import styles from "./page.module.css";
import Link from "next/link";

import { FotoPerfil } from "@/components/fotoPerfil";

import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { LinkRedes } from "@/components/linkRedes";

export default function Links() {

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <FotoPerfil />

                <h1>@biancamachadophoto</h1>
                <p>"Aventure-se em cada clique e capture momentos que contam histórias extraordinárias. 📸🎈✨"

                    <cite>Up - Altas Aventuras</cite>
                </p>
            </div>

            <LinkRedes />


        </div>
    )
}