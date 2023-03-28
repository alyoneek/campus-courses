import "@/styles.css";
import bin from "@assets/icons/bin.svg";
import image from "@assets/images/elli.jpeg";
import ClickCounter from "@components/ClickCounter";

export const App = () => {
  return (
    <>
      <ClickCounter />
      <h1>
        Hello World! from {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={image} alt="" />
      <img src={bin} alt="" />
    </>
  );
};
