import { useState } from "react";
import MyButton from "./MyButton";

export const Email = () => {
  const [email, setEmail] = useState("");
  const [invaliEmail, setInvaliEmail] = useState("");

  return (
    <section className="email py-28">
      <div className="container grid place-items-center">
        <div className="bg-introColor text-White px-6 py-8 md:px-14 md:py-12 w-full lg:w-9/12 flex gap-6 flex-col items-center text-center rounded-xl shadow-2xl ">
          <h2 className="text-xl md:text-3xl font-bold">
            Get early access today
          </h2>
          <p className="w-11/12 font-OpenSans">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div className=" w-full flex flex-wrap flex-col md:flex-row gap-5 mt-3">
            <input
              type="text"
              className="flex-grow rounded-3xl placeholder:text-testimonialsBackground placeholder:font-thin py-3 px-8 border-none outline-none caret-black text-black font-bold"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <MyButton
              order="3"
              padding="12px 30px"
              content="Get Started For Free"
              email={email}
              setInvaliEmail={setInvaliEmail}
              setEmail={setEmail}
            />
            <p className="w-full order-1 md:order-3 font-OpenSans pl-6 -my-3 text-left text-[12px] text-LightRed ">
              {invaliEmail}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email;
