import React from "react";
import "tailwindcss/tailwind.css";

type Props = {
  buttonYes?: () => void;
  buttonNo?: () => void;
  header: string;
  text: string;
  png: string;
  emoji: string;
  bgColor: string;
  buttonStyle?: React.CSSProperties;
};

const ProposalModel = ({
  buttonYes,
  buttonNo,
  header,
  text,
  png,
  emoji,
  bgColor,
  buttonStyle,
}: Props) => {
  return (
    <div className={`h-screen overflow-hidden ${bgColor}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-3 p-4 rounded-md h-[700px] w-[500px]">
        <div>
          <img src={png} alt="abc" className="size-40" />
        </div>
        <div>
          <h1 className="text-xl font-bold">
            {header} {emoji}
          </h1>
        </div>
        <div>
          <p className="">
            {text} {emoji}
          </p>
        </div>
        <div className="flex gap-2">
          {buttonYes && ( <button
            onClick={buttonYes}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
            Yes
          </button>)}
          {buttonNo && ( 
            <button
            style={buttonStyle}
              onClick={buttonNo}
              className="px-4 py-2 text-white bg-red-500 rounded"
            >
              No
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProposalModel;
