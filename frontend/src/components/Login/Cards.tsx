interface CardsProps {
  isRight?: boolean;
}

const Cards = ({ isRight = false }: CardsProps) => {
  const direction = isRight ? "right" : "left";

  return (
    <div className="flex w-full h-1/2 justify-center items-center gap-x-6 relative scroll-container overflow-hidden">
      <div
        className={`w-[34%] lg:w-[30%] h-[10rem] lg:h-[14rem] px-2 text-[0.6rem] rounded-[20px] lg:text-sm absolute ${direction}-[100%] card-${direction} card-${direction}-1 flex`}
      >
        <div
          className="w-full h-full -ml-2 rounded-l-[20px] bg-cover"
          style={{
            backgroundImage: "url('/login_card.webp')",
          }}
        ></div>
        <div className="w-full h-full -mr-2 rounded-r-[20px] login-content-area"></div>
      </div>

      <div
        className={`w-[34%] lg:w-[30%] h-[10rem] lg:h-[14rem] px-2 text-[0.6rem] rounded-[20px] lg:text-sm absolute ${direction}-[100%] card-${direction} card-${direction}-2 flex`}
      >
        <div
          className="w-full h-full -ml-2 rounded-l-[20px] bg-cover"
          style={{
            backgroundImage: "url('/login_card.webp')",
          }}
        ></div>
        <div className="w-full h-full -mr-2 rounded-r-[20px] login-content-area"></div>
      </div>

      <div
        className={`w-[34%] lg:w-[30%] h-[10rem] lg:h-[14rem] px-2 text-[0.6rem] rounded-[20px] lg:text-sm absolute ${direction}-[100%] card-${direction} card-${direction}-3 flex`}
      >
        <div
          className="w-full h-full -ml-2 rounded-l-[20px] bg-cover"
          style={{
            backgroundImage: "url('/login_card.webp')",
          }}
        ></div>
        <div className="w-full h-full -mr-2 rounded-r-[20px] login-content-area"></div>
      </div>
    </div>
  );
};

export default Cards;
