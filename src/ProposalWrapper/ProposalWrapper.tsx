import React from "react";
import ProposalModel from "./ProposalModel";
import { useNavigate } from "react-router-dom";

const ProposalWrapper = () => {

  const navigate = useNavigate() 

  return (
    <div>
      <ProposalModel
        bgColor="bg-rose-100"
        png="https://media.tenor.com/9X_EXRhnImUAAAAj/love-ilu.gif"
        header="Do you love me?"
        emoji="😶"
        text="techonn tera hi hai"
        buttonNo={() => navigate("/click-no1")}
        buttonYes={() => navigate("/click-yes")}
      />
    </div>
  );
};

export default ProposalWrapper;
