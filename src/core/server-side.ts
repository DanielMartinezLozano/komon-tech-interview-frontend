export const getPosts = async () => {
  // API call to our own fake API
  // This URL should be placed inside an .env file
  const url = "http://localhost:3001/api/posts";
  const response = await fetch(url).then((res) => res.json());

  return {
    posts: response.posts,
  };
};
