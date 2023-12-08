"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname(); // Call the usePathname as a function

  return (
    <div>
      {pathName === "/event" ? null : (
        <div className="flex p-10 bg-slate-700 text-white justify-around">
          <h1>Next for Next</h1>
          <ul className="flex gap-10">
            <Link href={"/"}>Home</Link>
            <Link href={"/event"}>Event</Link>
            <Link href={"/passing-data"}>Passing data</Link>
            <Link href={"/change-state"}>Change State</Link>
            <Link href={"/posts"}>Posts</Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
{
  /* <div className="flex p-10 bg-slate-700 text-white justify-around">
        <h1>Next for Next</h1>
        <ul className="flex gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/event"}>Event</Link>
          <Link href={"/passing-data"}>Passing data</Link>
          <Link href={"/change-state"}>Change State</Link>
        </ul>
      </div> */
}
