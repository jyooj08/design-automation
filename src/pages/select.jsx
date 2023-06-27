/* eslint-disable @next/next/no-img-element */
import imageSrc from "/public/aa.jpeg";

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="back_btn">
        뒤로
      </a>
      <h3 className="title">나는야 건축가</h3>
      <div className="progress">1/4</div>
    </div>
  );
};

const OptionButton = ({ text }) => {
  return <button className="option_btn">{text}</button>;
};

const select = () => {
  const options = [
    "단지 널 사랑해 이렇게 말했지",
    "이제껏 준비했던",
    "많은 말을 뒤로한 채",
    "언제나 니 옆에 있을게",
  ];
  return (
    <>
      <Header />
      <img className="model_image" src="/aa.jpeg" alt="" />
      <div className="options">
        {options.map((text, i) => (
          <OptionButton key={i} text={text} />
        ))}
      </div>
    </>
  );
};

export default select;
