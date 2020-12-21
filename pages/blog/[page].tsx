import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Head from "next/head";
import styles from "@/styles/Blog/BlogPage.module.scss";
import fs from "fs";
import paginatedResults from "utils/paginatedResults";
import PostCard from "@/components/BlogPage/PostCard";
import Pagination from "@/components/BlogPage/Pagination";

const Blog = ({ results, page }) => (
  <>
    <Head>
      <title>Blog | Arm-64.com</title>
    </Head>
    <Header />
    <div className={styles.blogPage}>
      <h1>Blog</h1>
      <div className={styles.posts}>
        {results.posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>
      <Pagination
        current={parseInt(page)}
        prev={results.prev}
        next={results.next}
        last={results.last}
      />
    </div>
    <Footer />
  </>
);

export const getStaticProps = async (context) => {
  const { page } = context.params;

  let results = paginatedResults(page);

  console.log(results);

  return {
    props: {
      results,
      page,
    },
  };
};

export const getStaticPaths = async (context) => {
  const LIMIT = 4;
  const posts = fs.readdirSync("posts");
  const paths = [...Array(Math.round(posts.length / LIMIT))]
    .map((k, i) => i + 1)
    .map((i) => `/blog/${i}`);
  return {
    paths,
    fallback: false,
  };
};

export default Blog;
