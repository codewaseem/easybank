import React from "react";
import SEO from "../components/Seo";
import styled from "@emotion/styled";
import bgImage from "../images/bg-intro-desktop.svg";
import bgPhone from "../images/image-mockups.png";

const BannerImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  /* -20px center / 160% 220% padding-box content-box,
    no-repeat -20px center / 100% 100% padding-box content-box; */

  right: 0;
  top: 0;

  img {
    position: absolute;
    top: -18%;
    right: -18%;
  }
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

const Banner = styled.section`
  display: flex;
  flex-wrap: wrap;

  ${BannerContent} {
    max-width: 380px;
  }
  ${BannerImage} {
    max-width: 50%;
  }
  position: relative;
  background: url(${bgImage}), var(--very-light-gray);
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: 250% 50%;
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

const Features = styled.section`
  background: var(--light-grayish-blue);

  h2 + p {
    margin-bottom: 80px;
    max-width: 600px;
    font-size: 0.9rem;
  }
`;

const Articles = styled.section`
  background: var(--very-light-gray);
  h2 {
    margin-bottom: 50px;
  }
`;

const FooterBranding = styled.div`
  .social-media-icons {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    img {
      width: 30px;
    }
  }
`;
const FooterNavigation = styled.div``;
const FooterCallToAction = styled.div``;

const Footer = styled.section`
  background: var(--dark-blue);
  padding-top: 50px;
  padding-bottom: 50px;
  text-align: center;

  display: flex;
  flex-wrap: wrap;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: white;
    li {
      min-width: 200px;
      flex: 1 1 50%;
      padding: 15px;
    }
  }

  ${FooterBranding}, ${FooterCallToAction} {
    max-width: 250px;
    flex: 1 0 200px;

    display: grid;
    align-items: center;
  }

  ${FooterNavigation} {
    flex: 2 0 300px;
    max-width: 600px;
    margin: auto;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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

  ${Header} {
    height: var(--header-height);
  }

  ${Banner} {
    min-height: calc(100vh - var(--header-height));
    flex: 1;
  }

  ${Features}, ${Articles} {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

const FeaturesIntro = styled.div``;
const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 25px;

  > * {
    display: grid;
    grid-gap: 25px;

    p {
      font-size: 0.8rem;
    }
  }
`;

const Article = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
  }
  article {
    background: white;
    padding: 10%;
    flex: 1;
  }

  hgroup {
    display: flex;
    flex-direction: column-reverse;

    h4 {
      font-size: small;
      color: var(--grayish-blue);
    }

    h3 {
      margin: 10px 0;
    }
  }
`;

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
          <img src={bgPhone} alt="" />
        </BannerImage>
      </Banner>
      <Features>
        <FeaturesIntro>
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. <br />
            Control your finances like never before.
          </p>
        </FeaturesIntro>
        <FeaturesList>
          <div>
            <div>
              <img src={require("../images/icon-online.svg")} alt="" />
            </div>
            <div>
              <h3> Online Banking</h3>
            </div>
            <div>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require("../images/icon-budgeting.svg")} alt="" />
            </div>
            <div>
              <h3> Simple Budgeting</h3>
            </div>
            <div>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require("../images/icon-online.svg")} alt="" />
            </div>
            <div>
              <h3>Fast Onboarding</h3>
            </div>
            <div>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={require("../images/icon-api.svg")} alt="" />
            </div>
            <div>
              <h3>Open API </h3>
            </div>
            <div>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </FeaturesList>
      </Features>
      <Articles>
        <h2>Latest Articles</h2>
        <FeaturesList>
          <Article>
            <img src={require("../images/image-currency.jpg")} alt="" />
            <article>
              <hgroup>
                <h3>Receive money in any currency with no fees</h3>
                <h4>By Claire Robinson</h4>
              </hgroup>
              <p>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </article>
          </Article>
          <Article>
            <img src={require("../images/image-restaurant.jpg")} alt="" />
            <article>
              <hgroup>
                <h3>Treat yourself without worrying about money</h3>
                <h4>By Wilson Hutton</h4>
              </hgroup>
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </article>
          </Article>
          <Article>
            <img src={require("../images/image-plane.jpg")} alt="" />
            <article>
              <hgroup>
                <h3>Take your Easybank card wherever you go</h3>
                <h4>By Wilson Hutton</h4>
              </hgroup>
              <p>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you …
              </p>
            </article>
          </Article>
          <Article>
            <img src={require("../images/image-confetti.jpg")} alt="" />
            <article>
              <hgroup>
                <h3>Our invite-only Beta accounts are now live!</h3>
                <h4>By Claire Robinson</h4>
              </hgroup>
              <p>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site ...
              </p>
            </article>
          </Article>
        </FeaturesList>
      </Articles>
      <Footer>
        <FooterBranding>
          <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20">
            <defs>
              <linearGradient
                id="a"
                x1="72.195%"
                x2="17.503%"
                y1="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#33D35E" />
                <stop offset="100%" stopColor="#2AB6D9" />
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <path
                fill="#FFF"
                fillRule="nonzero"
                d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"
              />
              <g fill="url(#a)">
                <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                <path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z" />
                <path
                  opacity=".15"
                  d="M25.539 0L14.737 19.704h5.986L31.525 0z"
                />
              </g>
            </g>
          </svg>
          <div className="social-media-icons">
            <div>
              <img
                src={require("../images/icon-facebook.svg")}
                alt="Facebook Page"
              />
            </div>
            <div>
              <img
                src={require("../images/icon-youtube.svg")}
                alt="Youtube Channel"
              />
            </div>
            <div>
              <img
                src={require("../images/icon-twitter.svg")}
                alt="Twitter Handle"
              />
            </div>
            <div>
              <img
                src={require("../images/icon-pinterest.svg")}
                alt="Pinterest Page"
              />
            </div>
            <div>
              <img
                src={require("../images/icon-instagram.svg")}
                alt="Instagram Handle"
              />
            </div>
          </div>
        </FooterBranding>
        <FooterNavigation>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </FooterNavigation>
        <FooterCallToAction>
          <button>Request Invite</button>
          <small>&copy; Easybank. All rights reserved.</small>
        </FooterCallToAction>
      </Footer>
    </AppContainer>
  );
};

export default Index;
