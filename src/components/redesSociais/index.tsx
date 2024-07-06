'use client'

import styles from './index.module.css'

import { BsInstagram } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import Link from "next/link";

import { useEffect, useState } from 'react';
import { parse } from 'next-useragent';

export function RedesSociais() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const userAgent = parse(window.navigator.userAgent);
        setIsMobile(userAgent.isMobile);
    }, []);

    return (
        <>
            {isMobile ? (
                <div className={styles.redesSociais} >
                    <Link href="whatsapp://send?phone=5527981655844" target='_blank' className={styles.whatsappIcon} >
                        <SiWhatsapp size={30} className={styles.icon} />

                    </Link>
                    <Link href="instagram://user?username=biancamachadophoto" target='_blank' className={styles.instagramIcon}>
                        <BsInstagram size={30} className={styles.icon} />
                    </Link >
                </div >) : (
                <div className={styles.redesSociais}>
                    <Link href="https://wa.me/5527981655844" target='_blank' className={styles.whatsappIcon}>
                        <SiWhatsapp size={30} className={styles.icon} />
                    </Link >
                    <Link href="https://www.instagram.com/biancamachadophoto/" target='_blank' className={styles.instagramIcon} >
                        <BsInstagram size={30} className={styles.icon} />
                    </Link >

                </div >
            )
            }
        </>

    )
}