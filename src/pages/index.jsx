/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Link href="/select" className="btn">
        시작하기
      </Link>
    </div>
  );
};
export default Home;
