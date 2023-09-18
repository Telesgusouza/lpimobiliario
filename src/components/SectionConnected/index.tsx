import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import * as Styled from "./style";

import photo1 from "../../../public/image/connected.jpeg";
import photo2 from "../../../public/image/connected2.jpeg";
import Reveal from "../Reveal";

export default function SectionConnected() {
  const myComponentRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleScroll = () => {
    if (myComponentRef.current) {
      const boundingBox = myComponentRef.current.getBoundingClientRect();

      console.log("sera q estou louco?")
      dispatch({
        type: "CONNECT",
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

  return (
    <Styled.Container ref={myComponentRef}>
      <div className="box">
        <Reveal>
          <Styled.Article>
            <div>
              <h2>Sempre conectado</h2>
              <button>Saiba mais</button>
            </div>

            <img src={photo2} alt="foto cell" />
          </Styled.Article>
        </Reveal>

        <Reveal>
          <Styled.Article>
            <div>
              <strong>Conecte com amigos</strong>
              <p>Use a Netric para se conectar às pessoas que você conhece.</p>
              <p>
                A Netric pode conectar você a pessoas fora de seu círculo
                habitual.
              </p>
            </div>

            <img src={photo1} alt="foto cell" />
          </Styled.Article>
        </Reveal>
      </div>
    </Styled.Container>
  );
}
