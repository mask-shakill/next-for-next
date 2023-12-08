import Button from "@/components/Button/Button";

const layout = ({ children }) => {
  return (
    <div>
      <main>
        <h1>Event page layout</h1>

        {children}
        <Button link="/" style="border-4  ms-[300px] p-4" name="Go back home" />
      </main>
    </div>
  );
};

export default layout;
