"use client";

const EvenHandle = () => {
  const HandleClick = () => {
    alert("hello world !");
  };
  return (
    <div className="text-center mt-10">
      <h1>Event handling page</h1>
      <button
        className="bg-blue-400 p-10 rounded-xl mt-10"
        onClick={HandleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default EvenHandle;
