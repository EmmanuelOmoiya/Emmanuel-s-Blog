import { useRouter } from "next/router";
import Head from "next/head";
import styles from '../../styles/Write.module.css'
import style from '../../styles/post.module.css';
import { useEffect, useState } from "react";4
import axios from 'axios';
// const router = useRouter();

// export const getStaticProps = async () => {
 
//   return !res ? {notFound : true} : {    props: { posts: res.data },
//   revalidate: 10,
//   } 
// };

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState('');
  useEffect(async()=>{
    const res = await axios.get(`http://localhost:5080/api/posts/${id}`);
    console.log(res.data)
    setPost(res.data)
  }, [id])
  return (
    <div className={styles.post_container}>
      <Head>
        <title>Emmanuel&apos;s Blog | {id}</title>
      </Head>
      {
        post.length > 0 || post !== ''
        ?
        <>
        <div className={styles.title}><p className={style.d_title}>{post.title}</p></div>
        <div className={style.post_body}>
          <p className={style.author}>Posted by <span className={styles.author_cli}>{post.author}</span> on the {post.date}rd of {post.month} {post.year} at <span className={styles.author_cli}>{post.time}</span></p>
          {/* <p>{post.content.length}{post.content.length > 1 ? "words" : "word" }</p> */}
          <div className={style.textarea}>
            {post.content}
          </div>
        </div>
        </>
        :
        (
          <p>No post yet</p>
        )
      }
    </div>
  )
}

export default Post;
