import Head from "next/head";
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    }, []);
    return (  
        <>
        <Head>
            <title>Page Not Found</title>
        </Head>
        <div className="not-found">
            <h1>404 <span>|</span> <span className="not-found-det">Page not Found</span></h1> 
        </div>
        </>
    );
}
 
export default NotFound;