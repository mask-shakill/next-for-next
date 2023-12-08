import Button from "@/components/Button/Button";
import React from "react";

const page = () => {
  return (
    <div className="text-center mt-12">
      <h>home page</h>
      <Button
        style="bg-green-300 py-1 px-3 rounded-xl"
        name="Go module css"
        link="/module-wise-css"
      />
      <Button
        style="bg-yellow-400 mt-3 py-1 px-3 rounded-xl "
        link="/passing-data"
        name="passing data"
      />
    </div>
  );
};

export default page;
