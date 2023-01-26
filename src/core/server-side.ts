import { API_ENDPOINT_CONSTANTS } from "./constants/constants";

export const getPosts = async () => {
  // API call to our own fake API
  const url = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/${API_ENDPOINT_CONSTANTS.posts}`
    : "http://localhost:3000/api/posts";
  const response = await fetch(url).then((res) => res.json());

  return {
    posts: response.posts,
  };
};
