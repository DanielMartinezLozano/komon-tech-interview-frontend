import { useUserContext } from "context/AuthContext";
import { getPosts } from "core/server-side";
import Image from "next/image";

const Content = ({ posts }: ContentPageProps) => {
  const user = useUserContext();

  return (
    <>
      <h1 className="my-6">Content</h1>
      {!user && (
        <p className="my-20 bold text-lg text-center">
          Sign in to any social media to view your content
        </p>
      )}
      <ul
        className="grid grid-cols-3 gap-x-4 gap-y-8"
        data-testid="content-post-list"
      >
        {user &&
          posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id}>
              <div>
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
