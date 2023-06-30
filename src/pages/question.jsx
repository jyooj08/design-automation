import Button from "@/components/Button";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Select = () => {
  const router = useRouter();
  const { query } = router;
  const { pageSeq } = query;

  useEffect(() => {
    const radios = document.querySelectorAll(".radio-container .radio");
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
  }, [pageSeq]);

  return (
    <>
      <Header />
      <div className="mt-32 mx-8">
        <span className="text-[80px] font-bold">0{pageSeq}</span>
        <span className="text-[20px] font-light">/ 04</span>
      </div>

      <div
        className="flex flex-col justify-center items-center mx-auto mt-24 w-[600px] h-[245px] text-[18px]"
        style={{ border: "1px solid black", borderRadius: "24px" }}
      >
        <span>어떤 건축이 좋은 건축인지 생각해본 적이 있다.</span>
        <span>
          어떤 건축이 &lsquo;나에게&rsquo; 좋은 건축일지도 고민해본 적이 있다.
        </span>
        <span>
          건축물이 주는 공간감을 결정하면 그 공간감을 만드는 역할을 할테니
        </span>
        <span>당신은 마음을 정해주기만 하면된다.</span>
      </div>

      <div className="relative radio-container flex justify-evenly mt-20 pb-12">
        <div className="relative">
          <input
            type="radio"
            name="score"
            className="radio bg-[#000] w-[29px] h-[29px]"
          />
          <span className="radio-label">매우 그렇다</span>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="score"
            className="radio bg-[#000] w-[29px] h-[29px]"
          />
          <span className="radio-label">그렇다</span>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="score"
            className="radio bg-[#000] w-[29px] h-[29px]"
          />
          <span className="radio-label">보통이다</span>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="score"
            className="radio bg-[#000] w-[29px] h-[29px]"
          />
          <span className="radio-label">그렇지 않다</span>
        </div>
        <div className="relative">
          <input
            type="radio"
            name="score"
            className="radio bg-[#000] w-[29px] h-[29px]"
          />
          <span className="radio-label">매우 그렇지 않다</span>
        </div>
        <div className="radio-line"></div>
      </div>

      <Button
        text="다음"
        landingUrl={
          pageSeq < 4 ? `/question?pageSeq=${Number(pageSeq) + 1}` : "/result"
        }
      />
    </>
  );
};

export default Select;
