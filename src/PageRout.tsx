import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ClickYes from './ProposalWrapper/ClickYes';
import ClickNo1 from './ProposalWrapper/ClickNo1';
import ClickNo2 from './ProposalWrapper/ClickNo2';
import ClickNo3 from './ProposalWrapper/ClickNo3';
import ProposalWrapper from './ProposalWrapper/ProposalWrapper';

const PageRout = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProposalWrapper />} />
        <Route path="/click-no1" element={<ClickNo1 />} />
        <Route path="/click-no2" element={<ClickNo2 />} />
        <Route path="/click-no3" element={<ClickNo3 />} />
        <Route path="/click-yes" element={<ClickYes />} />
      </Routes>
    </Router>
  );
}

export default PageRout;
