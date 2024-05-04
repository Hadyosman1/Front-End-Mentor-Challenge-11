import img from "./../images/illustration-stay-productive.png";
import arrowIcon from "./../images/icon-arrow.svg";

const Productive = () => {
  return (
    <section className="bg-mainBackground min-h-svh">
      <div className="container py-16 text-White flex justify-center items-center gap-14 flex-col lg:flex-row ">
        <div className="flex-grow basis-1/2">
          <img
            id="imgForAnimation"
            className="w-full"
            src={img}
            alt="productive"
          />
        </div>
        <div className="flex-grow basis-1/2 flex flex-col items-start  gap-6 p-3  ">
          <h2 className="text-2xl md:text-4xl font-bold md:max-w-96">
            Stay productive, wherever you are
          </h2>
          <p className="max-w-[560px]">
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className="max-w-[560px]">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <p id="link" className="cursor-pointer font-OpenSans pb-2 ">
            See how Fylo works
            <span>
              <img
                className="inline ms-2 transition-all"
                src={arrowIcon}
                alt="icon"
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Productive;
