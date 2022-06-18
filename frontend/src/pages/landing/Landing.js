import { Wave } from "react-animated-text";
import { useNavigate } from "react-router-dom";
import "./Landing.css"

function Landing() {
  const navigate = useNavigate();

  function pathLogin() {
    navigate("/user/login")
  };

  setTimeout(pathLogin, 5000);

  return (
  <div className="landingBackground">
      <div className="landingAnimation">
        <Wave text="누리는 프로그래밍 학습을" effect="verticalFadeIn" effectChange={1.0} delay={7.0} />
        <br />
        <Wave text="이해하기 쉽고, 다가가기 쉬운" effect="verticalFadeIn" effectChange={1.0} delay={7.0} />
        <br />
        <Wave text="'한글'로 할 수 있습니다" effect="verticalFadeIn" effectChange={0.5} delay={7.0} />
    </div>

  </div>
  )
}

export default Landing;