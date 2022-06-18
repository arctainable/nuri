import React from "react";
import { useLocation } from "react-router-dom"
import RefSidebar from "../../components/reference/RefSidebar";
import Variable from "../../components/reference/Variable";
import Indenting from "../../components/reference/Indenting";
import Type from "../../components/reference/Type";
import Array from "../../components/reference/Array";
import Data from "../../components/reference/Data";
import Conditional from "../../components/reference/Conditional";
import Loop from "../../components/reference/Loop";
import Math from "../../components/reference/Math";
import Print from "../../components/reference/Print";
import "./Reference.css"

function Reference() {
  const location = useLocation();
  let PathStep = 0;
  PathStep = location.state ? location.state.PathStep : 0
  

  return (
  <div className="Reference-Container">
    <RefSidebar />
    <div className="Reference-contents">
      {PathStep === 0 && <Variable />}
      {PathStep === 1 && <Indenting />}
      {PathStep === 2 && <Type />}
      {PathStep === 3 && <Array />}
      {PathStep === 4 && <Data />}
      {PathStep === 5 && <Conditional />}
      {PathStep === 6 && <Loop />}
      {PathStep === 7 && <Math />}
      {PathStep === 8 && <Print />}
    </div>
  </div>
  )
}

export default Reference