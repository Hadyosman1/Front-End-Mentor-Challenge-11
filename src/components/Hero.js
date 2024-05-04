import img from "./../images/illustration-intro.png";
import MyButton from "./MyButton";

const Hero = () => {
  return (
    <div className="hero pb-44">
      <section className=" container min-h-svh flex flex-col justify-center items-center">
        <div>
          <img id="imgForAnimation2" src={img} alt="intro" />
        </div>
        <div className="max-w-[670px] py-5 text-center text-White  flex flex-col gap-6 items-center justify-center">
          <h1 className="leading-snug font-bold text-2xl md:text-4xl">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="font-thin text-pretty max-w-[470px]">
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers
          </p>
          <MyButton content="Get Started" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
