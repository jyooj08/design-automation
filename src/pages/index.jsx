/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Home = () => {
  return (
    <div className="home">
      <Link href="/select" className="btn">
        시작하기
      </Link>
    </div>
  );
};
export default Home;
