import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

const About = () => {
    return ( 
        <>
            <Head>
                <title>Emmanuel&apos;s Blog | About</title>
                <meta name="keywords" content="Blog" />
            </Head>
            <div className={styles.container}>
                <div className={styles.pick}>
                    <h1 className={styles.tpc}>Emmanuel Omoiya</h1>
                    <p className={styles.det}>Software Developer, Reader, Thinkist, Eatist.</p>
                </div>
            </div>
            <div className={styles.details}>
                <h3 className="glad">Glad to see you here 😊</h3>
                <br />
                <p>I’m a full-stack developer who has turned years of freelancing into a full-time career. Being a full-stack allows me to not only develop client-facing apps and websites but also develop it with cutting edge backend support.</p>
                <br />
                <p>I specialize in building robust backends that do all the heavy lifting for your app or website. I love designing systems that are light yet powerful, distributed yet synchronized and beautiful yet effective. I also frequently blog about the world behind the screen which involves system designs, databases, security, servers, optimisation and also promising technologies like Blockchain and PWAs</p>
            </div>
        </>
    );
}
 
export default About;
