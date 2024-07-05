'use clint'

import styles from "./page.module.css";
import Link from "next/link";

import { FotoPerfil } from "@/components/fotoPerfil";

import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

export default function Links() {

    function isMobileDevice() {
        if (typeof window !== "undefined") {
            const userAgent = window.navigator.userAgent;
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(userAgent);
        }
        return false; // Retorna false se não estiver no contexto do navegador
    }

    return (
        <div className={styles.container}>
            <div className={styles.topo}>
                <FotoPerfil />

                <h1>@biancamachadophoto</h1>
                <p>"Aventure-se em cada clique e capture momentos que contam histórias extraordinárias. 📸🎈✨"

                    <cite>Up - Altas Aventuras</cite>
                </p>
            </div>
            <div className={styles.link}>
                <Link href="https://wa.me/5527981655844" target='_blank'>
                    <SiWhatsapp size={40} />
                    <p>Orçamentos</p>
                </Link>
                {isMobileDevice() ? (
                    <Link href="https://www.instagram.com/biancamachadophoto/" target='_blank'>
                        <BsInstagram size={40} />
                        <p>Conheça Meu Trabalho</p>
                    </Link>
                ) : (
                    <Link href="instagram://user?username=biancamachadophoto" target='_blank'>
                        <BsInstagram size={40} />
                        <p>Conheça Meu Trabalho</p>
                    </Link>
                )
                }
            </div>


        </div>
    )
}