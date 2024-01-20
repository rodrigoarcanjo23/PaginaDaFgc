import styles from "./SobreFgc.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpg"

export default function SobreFgc() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Fight Games Community"
        >
            <h3 className={styles.subtitulo}>
                Olá, seja bem-vindo!
            </h3>
            <img 
                src={fotoSobreMim}
                alt="Foto Sobre FGC"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
            A comunidade FGC (Fighting Game Community) no Brasil é uma vibrante e apaixonada rede de jogadores que compartilham a paixão por jogos de luta. O fenômeno dos jogos de luta começou a ganhar destaque no país na década de 1990, quando arcades se tornaram pontos de encontro para jogadores ansiosos por desafiar amigos e rivais em duelos intensos.
            </p>
            <p className={styles.paragrafo}>
            O boom dos jogos de luta teve início com títulos icônicos como Street Fighter II, Mortal Kombat e The King of Fighters. Estes jogos tornaram-se verdadeiros fenômenos culturais, atraindo multidões para os fliperamas e estabelecendo as bases para o que viria a ser a comunidade FGC no Brasil.
            </p>
            <p className={styles.paragrafo}>
            À medida que a tecnologia evoluiu, os jogos de luta migraram dos arcades para os consoles e, posteriormente, para o ambiente online. Esse avanço permitiu que a comunidade FGC brasileira se expandisse e se conectasse de maneira mais ampla, estabelecendo torneios locais e nacionais.
            </p>
            <p className={styles.paragrafo}>
            A ascensão dos eSports também desempenhou um papel crucial no desenvolvimento da FGC no Brasil. Grandes eventos como o EVO (Evolution Championship Series) e torneios patrocinados por empresas renomadas contribuíram para elevar o status dos jogos de luta e atrair ainda mais atenção para a comunidade.
            </p>
            <p className={styles.paragrafo}>
            Hoje, a cena FGC no Brasil é mais forte do que nunca. Com eventos regulares, tanto online quanto presenciais, os jogadores têm a oportunidade de competir em alto nível e aprimorar suas habilidades. Além disso, a comunidade é conhecida pela sua camaradagem e apoio mútuo, criando um ambiente acolhedor para jogadores de todos os níveis.
            </p>
            <p className={styles.paragrafo}>
            Jogos populares como Street Fighter V, Tekken 7, Super Smash Bros. e Dragon Ball FighterZ mantêm a comunidade animada, enquanto novos títulos continuam a ser lançados, mantendo o interesse e a diversidade nos torneios.
            </p>
            <p className={styles.paragrafo}>
            A comunidade FGC no Brasil é um testemunho da paixão dos jogadores por desafios competitivos e pela busca constante de aprimoramento. Com sua rica história e crescimento contínuo, a FGC brasileira permanece como uma das comunidades mais vibrantes e envolventes no cenário internacional de jogos de luta.
            </p>

        </PostModelo>
    )
}