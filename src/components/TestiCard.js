const TestiCard = ({ para: p, head: h, headPara: hp, img: i, icon }) => {
  return (
    <div className="relative z-20 shadow-hover max-w-[585px] px-6 md:px-0">
      <div className="Testi-card bg-testimonialsBackground px-4 py-4 md:py-8 md:px-7 text-White flex flex-col gap-7 font-OpenSans">
        <p className="pt-4 text-[12px] lg:text-[14px]">{p}</p>
        <div className="flex gap-3">
          <img src={i} alt="Testemonial" className="rounded-full w-11" />
          <div>
            <h2 className="font-bold text-[14px]">{h}</h2>
            <p className="text-[12px]">{hp}</p>
          </div>
        </div>
      </div>
      {icon && (
        <div className="absolute -top-9 left-2 md:-left-2 -z-10 translate-ani ">
          <img
            src={icon}
            alt="icon"
          />
        </div>
      )}
    </div>
  );
};

export default TestiCard;
