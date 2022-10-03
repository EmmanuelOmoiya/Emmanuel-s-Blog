import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [nav, setNav] = useState(false);
    const toggle = () =>{
        setShow(!show);
    }
    const change = () =>{
        if(window.scrollY >= 66){
            setNav(true)
        } else {
            setNav(false)
        }
    }
    useEffect(()=>{
        change()
    })
    return (
        <>
        <nav className={ "navbar" }>
            <h2 className='logo'><Link href="/">Emmanuel O</Link></h2>
            <ul className={show ? 'list show' : 'list'}>
                <li className="links" onClick={toggle}><Link href='/'><a>Home</a></Link></li>
                <li className="links" onClick={toggle}><Link href='/about'><a>About</a></Link></li>
                <li className="links" onClick={toggle}><Link href='/write'><a>Write</a></Link></li>
                <li className="links" onClick={toggle}><Link href='/contact'><a>Contact</a></Link></li>
            </ul>
            <div className={show ? 'hamburger drop' : 'hamburger'} onClick={toggle}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        </>
    );
}
 
export default Navbar;