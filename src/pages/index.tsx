import React from "react";
import SEO from "../components/Seo";
import styled from "@emotion/styled";
import bgImage from "../images/bg-intro-desktop.svg";

const Banner = styled.section`
  display: flex;
  flex-wrap: wrap;
  > * {
    max-width: 50%;
  }
  position: relative;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  ${Banner} {
    flex: 1;
  }

  > * {
    padding: 30px 15%;
  }
`;

const Header = styled.header`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  > * {
    margin: 2px;
  }

  .navigation {
    flex: 1;
    min-width: 370px;
  }

  .navigation-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > * {
      padding: 5px 10px;
    }
  }
`;
const Features = styled.section``;
const Articles = styled.section``;
const Footer = styled.section``;

const BannerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${bgImage}) no-repeat -20px center / 160% 220% padding-box content-box;

  right: 0;
  top: 0;

  img {
    width: 100%;
    position: relative;
    top: -25%;
    right: -20%;
  }
`;
const BannerContent = styled.div``;

const FeaturesIntro = styled.div``;
const FeaturesList = styled.div``;

const ArticleList = styled.div``;
const Article = styled.div``;

const FooterBranding = styled.div``;
const FooterNavigation = styled.div``;
const FooterCallToAction = styled.div``;

const Logo = styled.div``;
const HeaderNavigation = styled.div``;
const HeaderCallToAction = styled.div``;

export const Index = () => {
  return (
    <AppContainer>
      <SEO />
      <Header>
        <Logo>
          <h1 className="sr-only">EasyBank</h1>
          <img src={require("../images/logo.svg")} alt="" />
        </Logo>
        <HeaderNavigation className="navigation">
          <nav>
            <h2 className="sr-only">Pages</h2>
            <ul className="navigation-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </nav>
        </HeaderNavigation>
        <HeaderCallToAction>
          <button>Request Invite</button>
        </HeaderCallToAction>
      </Header>
      <Banner>
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
          <img src={require("../images/image-mockups.png")} alt="" />
        </BannerImage>
      </Banner>
      <Features>
        <FeaturesIntro />
        <FeaturesList></FeaturesList>
      </Features>
      <Articles>
        <h2>Latest Articles</h2>
        <ArticleList>
          <Article></Article>
        </ArticleList>
      </Articles>
      <Footer>
        <FooterBranding></FooterBranding>
        <FooterNavigation></FooterNavigation>
        <FooterCallToAction></FooterCallToAction>
      </Footer>
    </AppContainer>
  );
};

export default Index;
