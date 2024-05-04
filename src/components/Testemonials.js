import TestiCard from "./TestiCard";
import img1 from "./../images/profile-1.jpg";
import img2 from "./../images/profile-2.jpg";
import img3 from "./../images/profile-3.jpg";
import icon from "./../images/bg-quotes.png";

const Testemonials = () => {
  return (
    <section className="bg-mainBackground py-16 ">
      <div className="container flex gap-12 items-center flex-col lg:flex-row  ">
        <TestiCard
          icon={icon}
          para="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
          head="Satish Patel"
          headPara=" Founder & CEO, Huddle"
          img={img1}
        />
        <TestiCard
          para="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
          head="Bruce McKenzie"
          headPara="Founder & CEO, Huddle"
          img={img2}
        />
        <TestiCard
          para="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine."
          head="Iva Boyd"
          headPara="Founder & CEO, Huddle"
          img={img3}
        />
      </div>
    </section>
  );
};
export default Testemonials;
