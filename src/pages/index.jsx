/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="title mt-28 flex flex-col items-center">
          <div className="subtitle text-[9px]">find your own building</div>
          <div className="maintitle text-[36px]">
            나의 <span className="font-bold">건물</span> 찾기
          </div>
        </div>

        <img
          src="/images/start.jpeg"
          alt="시작 화면 이미지"
          className="mx-auto mt-16"
        />

        <div className="flex flex-col items-center mt-16">
          <span className="text">
            어떤 건축이 좋은 건축인지 생각해본 적이 있다.
          </span>
          <span className="text">
            어떤 건축이 &lsquo;나에게&rsquo; 좋은 건축일지도 고민해본 적이 있다.
          </span>
          <span className="text">
            건축물이 주는 공간감을 결정하면 그 공간감을 만드는 역할을 할테니
          </span>
          <span className="text">당신은 마음을 정해주기만 하면된다.</span>
        </div>

        <div className="text-container">
          <Link href="/select" className="btn">
            시작하기
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
