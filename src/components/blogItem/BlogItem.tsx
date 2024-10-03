import { Blog } from "@/utils/types";
import Link from "next/link";
import styles from "./blogItem.module.scss";

export default function BlogList({ post }: { post: Blog }) {
  return (
    <li className={styles.blogPost}>
      <Link href={`/blog/${post?.id}`}>
        <h2>{post?.title}</h2>
        <p>{post?.body.substring(0, 50)}...</p>
        <button className={styles.readMore}>Read More...</button>
      </Link>
    </li>
  );
}
