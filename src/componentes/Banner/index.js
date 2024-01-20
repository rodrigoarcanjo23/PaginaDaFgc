import styles from './Banner.module.css';
import circuloColorido from '../../assets/circulo_colorido.png';
import minhaFoto from '../../assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Seu Destino de Lutador Começa Aqui!                </h1>
                <p className={styles.paragrafo}>
                Bem-vindo ao epicentro da adrenalina, ao santuário dos guerreiros destemidos!
                </p>

            </div>
            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    alt="Foto do circulo vermelho com degrade azul"
                    src={circuloColorido}
                    aria-hidden={true}
                />  

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Ryu"
                />

            </div>

        </div>
    )
}