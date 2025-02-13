'use client';

import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import Image from 'next/image';

import foto1 from '@/assets/1.jpg';
import foto2 from '@/assets/2.jpg';
import foto3 from '@/assets/3.jpg';
import foto4 from '@/assets/4.jpg';
import foto5 from '@/assets/5.jpg';
import foto6 from '@/assets/6.jpg';
import foto7 from '@/assets/7.jpg';
import foto8 from '@/assets/8.jpg';
import foto9 from '@/assets/9.jpg';
import foto10 from '@/assets/10.jpg';
import foto11 from '@/assets/11.jpg';
import foto12 from '@/assets/12.jpg';

export function PainelFotos() {
    const scrollingContentRef = useRef<HTMLDivElement | null>(null);
    const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const userInteracted = useRef(false);

    useEffect(() => {
        const scrollingContent = scrollingContentRef.current;

        const startScrolling = () => {
            scrollIntervalRef.current = setInterval(() => {
                if (scrollingContent) {
                    scrollingContent.scrollTop += 1;
                    if (scrollingContent.scrollTop + scrollingContent.clientHeight >= scrollingContent.scrollHeight) {
                        scrollingContent.scrollTop = 0;
                    }
                }
            }, 50);
        };

        const stopScrolling = () => {
            if (scrollIntervalRef.current) {
                clearInterval(scrollIntervalRef.current);
            }
        };

        const handleUserInteraction = () => {
            userInteracted.current = true;
            stopScrolling();
        };

        if (scrollingContent) {
            scrollingContent.addEventListener('mouseenter', stopScrolling);
            scrollingContent.addEventListener('mouseleave', () => {
                if (!userInteracted.current) startScrolling();
            });
            scrollingContent.addEventListener('wheel', handleUserInteraction);
            scrollingContent.addEventListener('touchstart', handleUserInteraction);
        }

        startScrolling();

        return () => {
            if (scrollingContent) {
                scrollingContent.removeEventListener('mouseenter', stopScrolling);
                scrollingContent.removeEventListener('mouseleave', () => {
                    if (!userInteracted.current) startScrolling();
                });
                scrollingContent.removeEventListener('wheel', handleUserInteraction);
                scrollingContent.removeEventListener('touchstart', handleUserInteraction);
            }
            stopScrolling();
        };
    }, []);

    return (
        <div className={styles.painel} ref={scrollingContentRef}>
            {/* Painel 1 */}
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto1} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto2} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={styles.coluna}>
                <div className={styles.foto2x2}>
                    <Image src={foto3} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Painel intermediário */}
            <div className={styles.box1}>
                <Image src={foto4} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
            </div>

            {/* Painel 2 */}
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto5} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto6} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto7} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto8} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Painel 3 */}
            <div className={styles.coluna}>
                <div className={styles.foto2x2}>
                    <Image src={foto9} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto10} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto11} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Painel intermediário */}
            <div className={styles.box1}>
                <Image src={foto12} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
            </div>

            {/* Painel 1 (Repetido para rolagem infinita) */}
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto1} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto2} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={styles.coluna}>
                <div className={styles.foto2x2}>
                    <Image src={foto3} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Painel intermediário (Repetido para rolagem infinita) */}
            <div className={styles.box1}>
                <Image src={foto4} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
            </div>

            {/* Painel 2 (Repetido para rolagem infinita) */}
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto5} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto6} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto7} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto8} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Painel 3 (Repetido para rolagem infinita) */}
            <div className={styles.coluna}>
                <div className={styles.foto2x2}>
                    <Image src={foto9} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>
            <div className={styles.coluna}>
                <div className={styles.foto1x1}>
                    <Image src={foto10} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
                <div className={styles.foto1x1}>
                    <Image src={foto11} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
                </div>
            </div>

            {/* Painel intermediário (Repetido para rolagem infinita) */}
            <div className={styles.box1}>
                <Image src={foto12} alt="Foto do Painel de Fotos" layout="fill" objectFit="cover" />
            </div>
        </div>
    );
}
