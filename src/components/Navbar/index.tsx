'use client'

import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
                    <a href="/">Início</a>
                    <a href="/galeria">Galeria</a>
                    <a href="#pacotes">Pacotes</a>
                    <a href="/links">Meus Links</a>
                </div>
                <div className={styles.hamburger} onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
