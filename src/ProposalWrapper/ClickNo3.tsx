import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProposalModel from "./ProposalModel";

const ClickNo3 = () => {
  const [buttonPosition, setButtonPosition] = useState({
    top: "50%",
    left: "50%",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomTop = Math.random() * 100;
      const randomLeft = Math.random() * 100;
      setButtonPosition({
        top: `${randomTop}%`,
        left: `${randomLeft}%`,
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <ProposalModel
        bgColor="bg-rose-100"
        png="https://i.pinimg.com/originals/0c/12/8b/0c128bdc34a377ee07a7526d21b305bb.gif"
        header="Manja na ! Kitna bhav khaegi"
        emoji="😢"
        text="Bht galat bat hai"
        buttonYes={() => navigate("/click-yes")}
        buttonNo={() => {}}
                buttonStyle={{
                    position: 'absolute',
                    top: buttonPosition.top,
                    left: buttonPosition.left,
                    pointerEvents: 'none',
                }}
      />
    </div>
  );
};

export default ClickNo3;
