import Link from "next/link";
import styles from "./isrBlogPost.module.scss";
import { Blog } from "@/utils/types";

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts?limit=5");
  const blogPosts = await res.json();
  return blogPosts.posts.map((post: Blog) => ({
    id: String(post.id),
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const res = await fetch(`https://dummyjson.com/posts/${params?.id}`);
  const blogPost = (await res.json()) || {};
  return (
    <section>
      <h1>{blogPost.title}</h1>
      <p>
        Next.js will prefetch a number of 5 blogs. It will invalidate the cache
        when a request comes in, at most once every 60 seconds. If a request for
        a blog that was not prefetched is made, eg. /6, Next.js will generate
        and cache this page on-demand.
      </p>
      <p>
        This example offers a time based revalidation. Other types of
        revalidation are possible, on demand, eg : revalidatePath /
        revalidateTag used in Server Actions
      </p>
      <Link className={styles.goBackButton} href="/isr">
        Go Back...
      </Link>
    </section>
  );
}
