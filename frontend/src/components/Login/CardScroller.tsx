import Cards from "./Cards";
import "./cardscroller.css";

const CardScroller = () => {
  return (
    <div className="hidden md:flex w-1/2 h-screen justify-center items-center">
      <div
        className="flex justify-center items-center w-[90%] h-[80%] lg:h-[95%] rounded-xl"
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/login_bg.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center h-full w-full">
          <Cards />

          <Cards isRight={true} />
        </div>
      </div>
    </div>
  );
};

export default CardScroller;
