import React from 'react'
import ProposalModel from './ProposalModel'
import { useNavigate } from "react-router-dom";

const ClickNo1 = () => {
    const navigate = useNavigate() 
  return (
    <div>
        <ProposalModel
        bgColor="bg-rose-100"
        png="https://media.tenor.com/A3lxIHTiG2wAAAAC/panda-dudu.gif"
        header="Soch le Achhe se !"
        emoji="😏"
        text="Itni jaldi nahi matt bol"
        buttonNo={() => navigate("/click-no2")}
        buttonYes={() => navigate("/click-yes")}
      />
    </div>
  )
}

export default ClickNo1