import Link from "next/link";
import styles from "./blogPost.module.scss";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/posts/${params?.id}`);
  const blogPost = (await res.json()) || {};
  return (
    <section>
      <h1>{blogPost.title}</h1>
      <section>{blogPost.body}</section>
      <Link className={styles.goBackButton} href="/blog">
        Go Back...
      </Link>
    </section>
  );
}
