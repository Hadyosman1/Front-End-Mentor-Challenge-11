const Card = ({ head: h, para: p, img: i }) => {
  return (
    <div className="font-OpenSans text-center text-White flex flex-col items-center justify-between min-h-56 min-w-306px sm:w-10/12 md:w-4/12">
      <img src={i} alt="icon" />
      <div>
        <h2 className="text-2xl font-bold my-3">{h}</h2>
        <p className="text-pretty max-w-[380px] text-[14px] leading-6">{p}</p>
      </div>
    </div>
  );
};
export default Card;
