import Link from "next/link";

const Button = ({ landingUrl, text, move }) => {
  return (
    <div className="text-center mt-16">
      <Link
        href={landingUrl}
        className="btn bg-[#000] text-[#fff] w-[250px] h-[70px] text-[24px] font-bold"
        style={{
          border: "none",
          borderRadius: "70px",
          boxShadow: "4px 7px 5px 0px #afafaf",
        }}
        onClick={(e) => {
          if (!move) e.preventDefault();
        }}
      >
        {text}
      </Link>
    </div>
  );
};

export default Button;
