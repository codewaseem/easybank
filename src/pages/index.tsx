import React from "react";
import SEO from "../components/Seo";
import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Articles from "../components/Articles";
import Features from "../components/Features";
import Banner from "../components/Banner";
import Header from "../components/Header";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  --header-height: 85px;
  overflow-x: hidden;

  img {
    max-width: 100%;
  }
  color: var(--grayish-blue);
  h1,
  h2,
  h3,
  h4 {
    font-weight: normal;
    color: var(--dark-blue);
  }

  h2 {
    margin-bottom: 25px;
  }

  > * {
    padding: 30px 10%;
  }

  .header {
    min-height: var(--header-height);
    padding: 0 10%;
  }

  .banner {
    min-height: calc(100% - var(--header-height));
    flex: 1;
    padding: 0 0 50px 0;
  }

  .fat-vr-pad {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const Index = () => {
  return (
    <AppContainer>
      <SEO />
      <Header className="header" />
      <Banner className="banner" />
      <Features className="fat-vr-pad" />
      <Articles className="fat-vr-pad" />
      <Footer />
    </AppContainer>
  );
};

export default Index;
