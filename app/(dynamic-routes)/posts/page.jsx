import Link from "next/link";
async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}

const UsersPosts = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-center uppercase">Posts page</h1>
      <div className="grid grid-cols-5 gap-5">
        {posts.map((post) => {
          const { id, userId, title } = post;
          return (
            <div
              key={id}
              className="bg-blue-500 text-white border-4 flex flex-col items-center"
            >
              <h1>UserId : {userId}</h1>
              <p>{title}</p>
              <Link
                className="border-4 p-2  bg-black text-white mt-2"
                href={`/posts/${id}`}
              >
                see details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersPosts;
