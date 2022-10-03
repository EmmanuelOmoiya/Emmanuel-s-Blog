import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:5080/api/posts");
 
  return !res ? {notFound : true} : {    props: { posts: res.data },
  revalidate: 10,
  } 
};

const Home = ({posts}) => {
  console.log(posts)
  return (
    <>
    <Head>
        <title>Emmauel's Blog | Home</title>
        <meta name="keywords" content="Blog" />
      </Head>
    <div className={styles.container}>
      <div className={styles.pick}>
        <h1 className={styles.tpc}>Welcome to Emmanuel's Blog</h1>
      </div>
    </div>
    <div className={styles.posts}>
      <hr />
      {posts.length === 0 || posts === ''? (
        <h2>No added posts</h2>
        ) : 
          <>
          {posts.map((post, i) => (
            <Link href={`/post/${post.id}`}>
            <div className={styles.post} key={i}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.author}>Posted by <span className={styles.author_cli}>{post.author}</span> on the {post.date}rd of {post.month} {post.year} at <span className={styles.author_cli}>{post.time}</span></p>
              <br />
            </div>
            </Link>
           ))}
           <hr />
          </>
      }
    </div>
    </>
  );
}
 
export default Home;


