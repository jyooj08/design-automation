/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <h1 className="title">
        나의 <span>건물</span> 찾기
      </h1>
      <img className="title_image" src="/1234.jpeg" alt="" />
      <div className="text_box">
        어떤 건축이 좋은 건축인지 생각해본�적이�있다. 어떤�건축이 ʻ나에게’{" "}
        <br />
        좋은�건축일지도�고민해본�적이�있다. <br />
        건축물이�주는�공간감을�결정하면�그�공간감을�만드는�역할을�할테니 <br />
        당신은�마음을�정해주기만�하면된다 .
      </div>
      <Link href="/select" className="start_btn">
        시작하기
      </Link>
    </div>
  );
};
export default Home;
