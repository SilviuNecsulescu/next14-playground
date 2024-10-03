import BlogList from "@/components/blogItem/BlogItem";
import { Blog } from "@/utils/types";
import styles from "./blog.module.scss";

export const revalidate = 0;

export default async function BlogPage() {
  const limit = Math.floor(Math.random() * 9) + 1;
  //fetch a random number of blog posts
  const res = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
  const blogPosts = await res.json();

  return (
    <>
      <h1>Read the awesome blog posts below.</h1>
      <ul className={styles.blogsList}>
        {blogPosts?.posts.map((post: Blog) => (
          <BlogList post={post} key={post.id} />
        ))}
      </ul>
    </>
  );
}
