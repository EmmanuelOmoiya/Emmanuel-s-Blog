import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Write.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

const Write = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [disable, setDisable] = useState(false);
    const handlePost = async (e) => {
        e.preventDefault();
        // reset error and message
        setError('');
        setMessage('');

        // fields check
        if (!title || !content) {
            alert('All fields are required');
        } else {
        // post structure


        const month =(number) =>{
            switch (number+1) {
            case 1: {
                return 'January'
            }
    
            case 2: {
                return 'February'
            }
    
            case 3: {
                return 'March';
            }
    
            case 4: {
                return 'April';
            }

            case 5: {
                return 'May';
            }

            case 6: {
                return 'June';
            }

            case 7: {
                return 'July';
            }

            case 8: {
                return 'August';
            }

            case 9: {
                return 'September';
            }

            case 10: {
                return 'October';
            }

            case 11: {
                return 'November';
            }

            case 12: {
                return 'December';
            }
        }
        }


        let post = {
            title,
            content,
            author,
            published: false,
            createdAt: new Date().toISOString(),
            time: new Date().toLocaleTimeString(),
            day: new Date().getUTCDay()+1,
            month: month(new Date().getMonth()),
            date: new Date().getDate(),
            year: new Date().getFullYear(), 
            id: title.split(' ').join('-').toLowerCase()
        };

        // save the post
        try{
        setDisable(true);
        axios.post('https://emmanuel-s-blog-api.vercel.app/api/posts', post,{
            header:{ 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' }
        })
            .then((res)=>{
                router.push('/');
                console.log('Posted sucessfully');
                console.log(res.data)
            })
            .catch((error)=>{
                alert(error)
                console.log(error)
            });
        } catch(error){
            setDisable(false);
            alert(error)
        }
        }
    };

    return (
        <>
            <Head>
                <title>Emmanuel&apos;s Blog | Write</title>
            </Head>  
            <div className="write">
                <form onSubmit={()=>(!content ? alert('All fields are required') : handlePost )} className={styles.form}>
                    <input type="text" placeholder="Title...." className={styles.title} onChange={(e) => setTitle(e.target.value)} value={title}/>
                    <div className={styles.main}>
                        <input type="text" placeholder='Author...' className={styles.author} onChange={(e) => setAuthor(e.target.value)} value={author}/>
                        <textarea name="" id=""  placeholder="Write your post here...." className={styles.textarea} onChange={(e) =>setContent(e.target.value)} value={content}></textarea>
                        <button className={styles.post} disabled={disable}  type='submit' onClick={handlePost}>{ disable ? "Posting..." : "Post"}</button>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default Write;
