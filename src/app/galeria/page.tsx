import style from './page.module.css'

import foto1 from '../../assets/1.jpeg';
import foto2 from '../../assets/1.jpg'
import foto3 from '../../assets/3.jpg'
import foto4 from '../../assets/4.jpg'
import foto5 from '../../assets/5.jpg'
import foto6 from '../../assets/6.jpg'
import foto7 from '../../assets/7.jpg'
import foto8 from '../../assets/8.jpg'
import foto9 from '../../assets/9.jpg'
import foto10 from '../../assets/10.jpg'

import Image from 'next/image'

export default function Galeria() {
    return (
        <div className={style.container}>

            <h1>Casamentos</h1>

            <div className={style.galeria}>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto1}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto2}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto3}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto4}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>

            </div>

            <h1>Anissarios</h1>
            <div className={style.galeria}>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto5}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto6}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto7}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto8}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>

            </div>
            <h1>Eventos</h1>
            <div className={style.galeria}>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto5}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto8}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto9}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.foto}>
                        <Image
                            src={foto10}
                            alt="Foto do Painel de Fotos"
                            layout="fill"
                            objectFit="cover"

                        />
                    </div>
                </div>

            </div>

        </div>
    )
}