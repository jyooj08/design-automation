import Button from "@/components/Button";
import Header from "@/components/Header";
import { optionValuesAtom } from "@/stores/option";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const contents = [
  [
    "직선이 주는 명쾌함보다 곡선의 모호함이 매력적이다.",
    "곡선이 만들어내는 비효율조차도 나에겐 효율적으로 흘러간다.",
    "모서리를 지나면 단숨에 다른 풍경을 마주하는 것,",
    "그보다는 벽을 따라 가다보면 나도 모르게 다른 풍경이 펼쳐지는 것이",
    "매력적이다.",
  ],
  [
    "높게 솟은 무언가를 보면 경외심을 느끼고 이는 낮은 것에 대한 ",
    "편안함보다 가치 있다. 바닥에 비해 높이가 높은",
    "도전적인 비율은 매력적이다.",
    "무게 중심이 바닥을 벗어나기 쉬운 불안과 그럼에도 그 불안을",
    "극복했다는 성취감이 동시에 밀려오는데, 짜릿한 순간이다.",
  ],
  [
    "모두가 나를 볼 수 있는 곳에서 나는 더 강해진다.",
    "그 곳에 있는 나의 사람과, 또 나와의 소통을 목적으로",
    "하기보다 그 곳에 있는 모든 사람과의 소통을 목적으로 한다.",
    "눈 앞에 정적인 것 말고, 다양하고 많은 것들이 움직이고 ",
    "변했으면 좋겠다.",
  ],
  [
    "익숙함을 다시 한 번 깨닫게 되는 것이 매 번 새로운 것을",
    "이해해야 하는 것보다 즐겁다. 매 층마다 다른 공간을 새로",
    "이해해야 한다면  그는 나에게 어렵고 새로운 과제를 던져줄 뿐이다.",
    "내가 알던 무언가가 그 다음에도 나타나는 반가움을 느끼고 싶다.",
  ],
];

const options = [
  { text: "매우 그렇다", value: 5 },
  { text: "그렇다", value: 4 },
  { text: "보통이다", value: 3 },
  { text: "그렇지 않다", value: 2 },
  { text: "매우 그렇지 않다", value: 1 },
];

const Question = () => {
  const router = useRouter();
  const { query } = router;
  const pageSeq = Number(query.pageSeq);
  const [optionValues, setOptionValues] = useAtom(optionValuesAtom);
  const [move, setMove] = useState(false);

  useEffect(() => {
    const radios = document.querySelectorAll(".radio-container .radio");
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    setMove(false);
  }, [pageSeq]);

  return (
    <>
      <Header />
      <div className="mt-32 mx-8">
        <span className="text-[80px] font-bold">0{pageSeq + 1}</span>
        <span className="text-[20px] font-light">/ 04</span>
      </div>

      <div
        className="flex flex-col justify-center items-center mx-auto mt-24 w-[600px] h-[245px] text-[18px]"
        style={{ border: "1px solid black", borderRadius: "24px" }}
      >
        {contents[pageSeq].map((text, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>

      <div className="relative radio-container flex justify-evenly mt-20 pb-12">
        {options.map((option, i) => (
          <div key={i} className="relative">
            <input
              type="radio"
              name="score"
              value={option.value}
              className="radio bg-[#fff] w-[29px] h-[29px] border-black"
              onClick={() => {
                optionValues[pageSeq] = option.value;
                setOptionValues(optionValues);
                setMove(true);
              }}
            />
            <span className="radio-label">{option.text}</span>
          </div>
        ))}
        <div className="radio-line"></div>
      </div>

      <Button
        text="다음"
        landingUrl={
          pageSeq < 3 ? `/question?pageSeq=${pageSeq + 1}` : "/result"
        }
        move={move}
      />
    </>
  );
};

export default Question;
