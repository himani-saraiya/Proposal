import React from 'react'
import { useNavigate } from "react-router-dom";
import ProposalModel from './ProposalModel';

const ClickNo2 = () => {
    const navigate = useNavigate() 
  return (
    <div>
        <ProposalModel
        bgColor="bg-rose-100"
        png="https://gifdb.com/images/high/cute-sad-bubu-dudu-panda-kick-4cn5usy9xip1m59y.gif"
        header="Ek our bar soch le ! !"
        emoji="😖"
        text="Kyu aisa kr rhi hai"
        buttonNo={() => navigate("/click-no3")}
        buttonYes={() => navigate("/click-yes")}
      />
    </div>
  )
}

export default ClickNo2