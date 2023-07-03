/* eslint-disable @next/next/no-img-element */
import Button from "@/components/Button";
import Header from "@/components/Header";
import { optionValuesAtom } from "@/stores/option";
import { useAtomValue } from "jotai";

const Result = () => {
  const optionValues = useAtomValue(optionValuesAtom);
  const myType = optionValues.join("");
  return (
    <>
      <Header />
      <div className="mt-40 mx-[5.5rem]">
        <div className="text-[36px]">
          나의 <span className="font-bold">건물</span>은 #{myType}
        </div>
      </div>

      <div className="flex justify-evenly mt-20">
        <div>
          <img
            src={`/images/${myType}.jpg`}
            alt="건물 외관 이미지"
            className="w-[240px] h-[240px]"
            style={{ border: "1px solid black" }}
          />
          <div className="text-[14px] text-center mt-2">건물 외관</div>
        </div>
        <div>
          <img
            src={`/images/${myType}_wall.jpg`}
            alt="외벽 이미지"
            className="w-[240px] h-[240px]"
            style={{ border: "1px solid black" }}
          />
          <div className="text-[14px] text-center mt-2">외벽</div>
        </div>
      </div>

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

      <Button landingUrl="/" text="처음으로" move={true} />
    </>
  );
};

export default Result;
