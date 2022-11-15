import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CircleArrowDownButton } from "../components/CircleButton";
import { Link } from "react-router-dom";
import CustomImg from "../components/CustomImg";
import TransitionDiv from "../components/TransitionDiv";
import "../css/home.css";

export default function HomePage({ modalOptions, setModalOptions }) {
  return (
    <TransitionDiv className="homepage-wrapper">
      <section id="1" className="section1-wrapper">
        <div className="left-side">
          <div className="title-wrapper">
            <h1 className="title">
              דור <span>קעקועים</span>
            </h1>
          </div>
          <div className="p-wrapper">
            <p>עבודות מקצעויות ואיכותיות, הנעשות בידיי זהב</p>
          </div>
          <div className="link-wrapper">
            <a href="#2" className="btnLink btn1">
              ראה עוד
            </a>
          </div>
        </div>
        <div className="imgs-wrapper">
          <CustomImg
            modalOptions={modalOptions}
            setModalOptions={setModalOptions}
            className="img1 homeimg"
            src={img1}
            alt="tattoo"
          ></CustomImg>
          <CustomImg
            modalOptions={modalOptions}
            setModalOptions={setModalOptions}
            className="img2 homeimg"
            src={img2}
            alt="tattoo"
          ></CustomImg>
          <CustomImg
            modalOptions={modalOptions}
            setModalOptions={setModalOptions}
            className="img3 homeimg"
            src={img3}
            alt="tattoo"
          ></CustomImg>
          <CustomImg
            modalOptions={modalOptions}
            setModalOptions={setModalOptions}
            className="img4 homeimg"
            src={img4}
            alt="tattoo"
          ></CustomImg>
        </div>
      </section>
      <section id="2" className="section2-wrapper">
        <div className="center-wrapper">
          <div className="title2-wrapper">
            <h1 className="title2">
              קעקועים בעבודה <span>מקצועית ואיכותית</span>
            </h1>
          </div>
          <div className="p2-wrapper">
            <p className="p2">הכל נעשה במקצועיות רבה ובהתאם לצרכיי הלקוח</p>
          </div>
          <div className="slide-wrapper">
            <Splide
              options={{
                perPage: 2,
                width: 415,
                height: 230,
                gap: "1rem",
                autoplay: "pause",
                speed: 500,
              }}
            >
              <SplideSlide>
                <CustomImg
                  modalOptions={modalOptions}
                  setModalOptions={setModalOptions}
                  className="img1 slideimg"
                  src={img1}
                  alt="tattoo"
                ></CustomImg>
              </SplideSlide>
              <SplideSlide>
                <CustomImg
                  modalOptions={modalOptions}
                  setModalOptions={setModalOptions}
                  className="img1 slideimg"
                  src={img1}
                  alt="tattoo"
                ></CustomImg>
              </SplideSlide>
              <SplideSlide>
                <CustomImg
                  modalOptions={modalOptions}
                  setModalOptions={setModalOptions}
                  className="img1 slideimg"
                  src={img1}
                  alt="tattoo"
                ></CustomImg>
              </SplideSlide>
              <SplideSlide>
                <CustomImg
                  modalOptions={modalOptions}
                  setModalOptions={setModalOptions}
                  className="img1 slideimg"
                  src={img1}
                  alt="tattoo"
                ></CustomImg>
              </SplideSlide>
              <SplideSlide>
                <CustomImg
                  modalOptions={modalOptions}
                  setModalOptions={setModalOptions}
                  className="img1 slideimg"
                  src={img1}
                  alt="tattoo"
                ></CustomImg>
              </SplideSlide>
              <SplideSlide>
                <CustomImg
                  modalOptions={modalOptions}
                  setModalOptions={setModalOptions}
                  className="img1 slideimg"
                  src={img1}
                  alt="tattoo"
                ></CustomImg>
              </SplideSlide>
            </Splide>
          </div>
          <div className="circle-arrow-wrapper">
            <CircleArrowDownButton href="#3" />
          </div>
        </div>
      </section>
      <section className="section3-wrapper" id="3">
        <div className="orderline-wrapper">
          <h1 className="title3">
            הזמינו תור <span>עכשיו</span>
          </h1>
          <Link to="/line-order#1" className="btnLink shrinkgrow">
            לחץ על מנת להזמין
          </Link>
        </div>
      </section>
    </TransitionDiv>
  );
}
