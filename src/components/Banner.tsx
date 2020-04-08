import React from "react";
import styled from "@emotion/styled";
const bgDesktop = require("../images/bg-intro-desktop.svg");
const bgPhone = require("../images/bg-intro-mobile.svg");
const phoneBanner = require("../images/image-mockups.png");

const BannerImage = styled.div`
  width: 100%;
  height: 100%;

  /* -20px center / 160% 220% padding-box content-box,
    no-repeat -20px center / 100% 100% padding-box content-box; */
`;
const BannerContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2.2rem;
    font-weight: 300;
    margin-bottom: 25px;
  }

  p {
    line-height: 140%;
    font-size: 1.2rem;
    margin-bottom: 25px;
  }
`;

const BannerContainer = styled.section`
  display: flex;
  flex-wrap: wrap-reverse;
  background: var(--very-light-gray);

  ${BannerContent} {
    max-width: 380px;
    margin: auto;
  }
  ${BannerImage} {
    background: url(${bgPhone});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;
    text-align: center;
  }
  position: relative;
`;

interface BannerProps extends React.AllHTMLAttributes<any> {}

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <BannerContainer {...props}>
      <BannerContent>
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button>Request Invite</button>
      </BannerContent>

      <BannerImage>
        <img src={phoneBanner} alt="" />
      </BannerImage>
    </BannerContainer>
  );
};

export default Banner;
