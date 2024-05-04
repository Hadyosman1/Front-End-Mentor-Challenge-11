import Card from "./Card";
import img1 from "./../images/icon-access-anywhere.svg"
import img2 from "./../images/icon-security.svg"
import img3 from "./../images/icon-collaboration.svg"
import img4 from "./../images/icon-any-file.svg"

const Fetures = () => {
  return (
    <div className="bg-mainBackground">
      <section id="fetures" className="mt-[-2px] container flex justify-center flex-wrap gap-20 pb-12 ">
        <Card
          head="Access your files, anywhere"
          para="The ability to use a smartphone, tablet, or computer to access your account means your 
            files follow you everywhere."
            img={img1}
        />
        <Card
          head="Security you can trust"
          para="2-factor authentication and user-controlled encryption are just a couple of the security 
            features we allow to help secure your files."
            img={img2}
        />
        <Card
          head="Real-time collaboration"
          para="  Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required."
            img={img3}
        />
        <Card
          head="Store any type of file"
          para="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
            file types to be securely stored and shared."
            img={img4}
        />
      </section>
    </div>
  );
};
export default Fetures;
