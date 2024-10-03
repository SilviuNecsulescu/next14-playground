import { Blog } from "@/utils/types";
import styles from "./isr.module.scss";
import Link from "next/link";

export default async function ISR() {
  const res = await fetch("https://dummyjson.com/posts?limit=5");
  const blogPosts = await res.json();

  return (
    <>
      <h1>ISR Blog</h1>
      <ul className={styles.blogsList}>
        {blogPosts?.posts.map((post: Blog) => (
          <li className={styles.blogPost} key={post.id}>
            <Link href={`/isr/${post?.id}`}>
              <h2>{post?.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
