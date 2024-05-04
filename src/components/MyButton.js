const MyButton = ({
  content: c,
  padding: pad,
  order: o,
  email,
  setInvaliEmail,
  setEmail,
}) => {
  const handleClick = () => {
    if (email) {
      if (email.trim() === "") {
        setInvaliEmail("Can't Be Empty");
      } else if (email.trim().includes(" ")) {
        setInvaliEmail("Should Not Include Whitespace");
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email.trim())) {
        setInvaliEmail("Please Enter a Valid Email Address");
      } else {
        setInvaliEmail("");
        setEmail("");
      }
    }
  };

  return (
    <button
      className="
    rounded-3xl bg-Cyan
    px-16 md:px-24 py-3
    font-bold text-White 
    transition-all
    hover:bg-Blue
    shadow-sm
    shadow-Cyan"
      style={{ padding: pad, order: o }}
      onClick={handleClick}
    >
      {c}
    </button>
  );
};
export default MyButton;
