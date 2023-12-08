import Link from "next/link";
import UsersPosts from "../page";
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

const SinglePost = async ({ params }) => {
  const id = params.id;

  const post = await getPost(id);
  if (id != post.id) {
    return <UsersPosts />;
  }
  return (
    <div className="text-center">
      <h1>Single post</h1>

      <div className="border-4 p-10 w-64 mx-auto mt-10">
        <h1>Id : {post.id}</h1>
        <h1>body : {post.body}</h1>
        <Link
          className="border-4 bg-black text-white py-1 px-5"
          href={"/posts"}
        >
          Go posts
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
