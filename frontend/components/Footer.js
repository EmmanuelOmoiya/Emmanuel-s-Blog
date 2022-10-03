import Link from 'next/link'
import {FaDev, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'

const Footer = () => {
    return (  
        <footer className="footer">
            <p className='copyrt'>Made with 💗 by <Link href="https://www.github.com/EmmanuelOmoiya" className="koli">Emmanuel Omoiya</Link></p>
            <br />
            <p className="dba">Design by <Link href="https://www.github.com/akohjesse" className="koli">Akoh Jesse</Link></p>
            <br />
            <div className="footer_top">
                <p className="icon"><Link href="https://www.dev.to/emmanuelomoiya"><FaDev/></Link> </p>
                <p className="icon"><Link href='https://www.github.com/EmmanuelOmoiya'><FaGithub /></Link></p>
                <p className="icon"> <Link href="https://www.twitter.com/@Devcoder"><FaTwitter/></Link></p>
                <p className="icon"><Link href="https://instagram.com/i_am_mern" target="_blank" ><FaInstagram /></Link></p>
            </div>
        </footer>
    );
}
 
export default Footer;