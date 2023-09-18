import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Styled from "./style";

import iconInstagram from "../../../public/icon/instagram.svg";
import iconLinkedin from "../../../public/icon/linkedin.svg";
import iconGithub from "../../../public/icon/github.svg";
import iconWtt from "../../../public/icon/wtt.svg";

export default function Footer() {
  const myComponentRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleScroll = () => {
    if (myComponentRef.current) {
      const boundingBox = myComponentRef.current.getBoundingClientRect();
      dispatch({
        type: "ABOUTUS",
        payload: boundingBox.top,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, []);

  function redirect(url: string) {
    window.open(url, "_blank");
  }

  return (
    <Styled.Container ref={myComponentRef}>
      <div className="box">
        <h3>dados do desenvolvedor</h3>

        <Styled.SocialMidia>
          <ul>
            <strong>DESIGN</strong>
            <li
              onClick={() =>
                redirect(
                  "https://instagram.com/math_jacobb?igshid=MzMyNGUyNmU2YQ=="
                )
              }
            >
              <img src={iconInstagram} loading="lazy" alt="icone instagram" />
              @math_jacobb
            </li>
          </ul>

          <ul>
            <strong>DESENVOLVEDOR</strong>
            <li
              onClick={() =>
                redirect("https://www.linkedin.com/in/gustavo-teles-270a711a7/")
              }
            >
              <img src={iconLinkedin} loading="lazy" alt="icone linkedin" />
              Linkedin
            </li>

            <li onClick={() => redirect("https://github.com/Telesgusouza")}>
              <img src={iconGithub} loading="lazy" alt="icone github" />
              Github
            </li>

            <li
              onClick={() =>
                redirect("https://api.whatsapp.com/send?phone=11971108786")
              }
            >
              <img src={iconWtt} alt="icone whatsapp" />
              11 97110-8786
            </li>
          </ul>
        </Styled.SocialMidia>
      </div>
    </Styled.Container>
  );
}
