"use client";

import { useRouter } from "next/navigation";

const Button = (props) => {
  const router = useRouter();
  const Navigate = (name) => {
    router.push(name);
  };
  const HandleClick = (name) => {
    return Navigate(name);
  };

  return (
    <div>
      <button
        onClick={() => HandleClick(props.link)}
        className={`${props.style}`}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
