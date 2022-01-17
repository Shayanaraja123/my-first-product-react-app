import React from "react";
import "./style.scss";
import titlelogo from "../../assests/titlelogo.png";
import samsungphone from "../../assests/Vert.png";
const index = () => {
  return (
    <div className="container">
      <div className="main-sec">
        <div className="para-pic">
          <div className="design-para">
            <h1>Design & Build Your Own Landing Pages</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>

            <div className="titles">
              <div className="title">
                <img src={titlelogo} />
                <h4>Title Goes Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>

              <div className="title">
                <img src={titlelogo} />
                <h4>Title Goes Here</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor.{" "}
                </p>
              </div>
            </div>
            <div className="olsds">
              <div className="titles">
                <div className="title">
                  <img src={titlelogo} />
                  <h4>Title Goes Here</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </p>
                </div>

                <div className="title">
                  <img src={titlelogo} />
                  <h4>Title Goes Here</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="samsungpic">
            <img src={samsungphone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
