
import Facebook from '../../assets/logoFace.png'
import Twitter from '../../assets/logoX.png'
import YouTube from '../../assets/logoYt.png'
import Linkedin from '../../assets/logoLkD.png'
import Instagram from '../../assets/logoInsta.png'
import S from './footer.module.scss'
export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={Facebook} alt="Logo Facebook" /></a>
                    <a href=""> <img src={Twitter} alt="Logo Twitter" /></a>
                    <a href=""> <img src={YouTube} alt="Logo Youtube" /></a>
                    <a href=""> <img src={Linkedin} alt="Logo Linkedin" /></a>
                    <a href=""> <img src={Instagram} alt="Logo Instagram" /></a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
    
}