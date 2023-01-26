import { getPosts } from "core/server-side";
import Image from "next/image";

const Content = ({ posts }: ContentPageProps) => {
  console.log(posts);
  return (
    <>
      <h1 className="my-6">Content</h1>
      <ul className="grid grid-cols-3 gap-x-4 gap-y-8">
        {posts.length === 0 && <p>Loading...</p>}
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id}>
              <div className="max-h-40">
                <Image
                  src={post.image}
                  alt={post.caption}
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px]"
                />
                <p>{post.caption}</p>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const { posts } = await getPosts();
  // {client}
  return {
    props: {
      posts,
    },
  };
};

export default Content;
