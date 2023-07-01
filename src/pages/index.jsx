/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="title mt-28 flex flex-col items-center">
          <div className="text-[9px]">find your own building</div>
          <div className="text-[36px]">
            나의 <span className="font-bold">건물</span> 찾기
          </div>
        </div>

        <img
          src="/images/start.jpeg"
          alt="시작 화면 이미지"
          className="mx-auto mt-16"
        />

        <div className="flex flex-col items-center mt-16 text-[14px]">
          <span>어떤 건축이 좋은 건축인지 생각해본 적이 있다.</span>
          <span>
            어떤 건축이 &lsquo;나에게&rsquo; 좋은 건축일지도 고민해본 적이 있다.
          </span>
          <span>
            건축물이 주는 공간감을 결정하면 그 공간감을 만드는 역할을 할테니
          </span>
          <span>당신은 마음을 정해주기만 하면된다.</span>
        </div>

        <Button text="시작하기" landingUrl="/question?pageSeq=0" />
      </div>
    </>
  );
};
export default Home;
