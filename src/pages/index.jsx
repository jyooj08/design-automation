import Header from "@/components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <div className="title mt-24 flex flex-col items-center">
          <div className="subtitle text-[9px]">find your own building</div>
          <div className="maintitle text-[36px]">
            나의 <span className="font-bold">건물</span> 찾기
          </div>
        </div>
        <Link href="/select" className="btn">
          시작하기
        </Link>
      </div>
    </>
  );
};
export default Home;
