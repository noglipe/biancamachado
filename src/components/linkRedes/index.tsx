'use client'

import styles from './index.module.css'

import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

import { useEffect, useState } from 'react';
import { parse } from 'next-useragent';
import Links from '../links/links';

export function LinkRedes() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = parse(window.navigator.userAgent);
        setIsMobile(userAgent.isMobile);
    }, []);

    return (
        <div className={styles.link}>


            {isMobile ? (
                <>
                    <Link href=" whatsapp://send?phone=5527981655844" target='_blank'>
                        <Links icone={SiWhatsapp} descricao="Orçamentos" />
                    </Link>
                    <Link href="instagram://user?username=biancamachadophoto" target='_blank'>
                        <Links icone={BsInstagram} descricao="Conheça Meu Trabalho" />
                    </Link>
                </>
            ) : (
                <>
                    <Link href="https://wa.me/5527981655844" target='_blank'>
                        <Links icone={SiWhatsapp} descricao="Orçamentos" />
                    </Link>
                    <Link href="https://www.instagram.com/biancamachadophoto/" target='_blank'>
                        <Links icone={BsInstagram} descricao="Conheça Meu Trabalho" />
                    </Link>
                </>
            )
            }
        </div>
    )
}