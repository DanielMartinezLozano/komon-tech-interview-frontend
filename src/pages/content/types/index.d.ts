interface ContentPageProps {
  posts: Post[];
}

interface Post {
  id: number;
  caption: string;
  description: string;
  image: string;
}
