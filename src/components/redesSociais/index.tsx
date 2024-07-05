import styles from './index.module.css'

import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

export function RedesSociais() {
    return (
        <div className={styles.redesSociais}>
            <Link href="https://wa.me/5527981655844" target='_blank'><SiWhatsapp size={30} color="green" /></Link >
            <Link href="https://www.instagram.com/biancamachadophoto/" target='_blank'>
                <BsInstagram size={30} />
            </Link >
        </div >
    )
}