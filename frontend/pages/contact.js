import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Contact.module.css'
import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'


const Contact = () => {
    return ( 
        <>
            <Head>
                <title>Emmanuel's Blog | Contact</title>
            </Head> 
            <div className={styles.contact_container}>
                <p className={styles.topic_s}>Contact Me On</p>
                <div className={styles.contact_socials}>
                    <Link href="https://www.linkedin.com/in/emmanuel-omoiya-4344b7209/" ><p className={styles.linkedin_social}>LinkedIn <span className={styles.linkicon}><FaLinkedin /></span> </p></Link>
                    <p className={styles.or}>OR</p>
                    <Link href="https://twitter.com/@Devcoder5" ><p className={styles.twitter_social}>Twitter <span className={styles.linkicon}> <FaTwitter/> </span></p></Link>
                    <p className={styles.or}>OR</p>
                    <Link href="https://dev.to/emmanuelomoiya" ><p className={styles.dev_to_social}>Dev.to <span className={styles.linkicon}> <FaDev/> </span></p></Link>
                    <p className={styles.or}>OR</p>
                    <Link href="https://github.com/EmmanuelOmoiya" ><p className={styles.github_social}>GitHub <span className={styles.linkicon}> <FaGithub/> </span></p></Link>
                    <p className={styles.or}>OR</p>
                    <Link href="https://instagram.com/i_am_mern" ><p className={styles.instagram_social}>Instagram <span className={styles.linkicon}> <FaInstagram/> </span></p></Link>
                    <p className={styles.or}>OR</p>
                    <Link href="https://wa.me/+2347043738436" ><p className={styles.whatsapp_social}>WhatsApp <span className={styles.linkicon}> <FaWhatsapp /> </span></p></Link>
                </div>
                <br />
            </div>
        </>
    );
}
 
export default Contact;
