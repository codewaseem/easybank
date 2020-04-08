import React from "react";
import styled from "@emotion/styled";
import InviteButton from "./InviteButton";

const HeaderContainer = styled.header`
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  .navigation {
    flex: 1;
    min-width: 370px;
  }

  .navigation-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 0.9rem;

    > * {
      border-bottom: 5px solid transparent;
      border-image-slice: 1;
      padding: 30px 20px;
      cursor: pointer;
      a:link,
      a:hover,
      a:focus,
      a:visited {
        color: var(--grayish-blue);
        text-decoration: none;
      }
      &:hover {
        border-image-source: linear-gradient(
          to left,
          var(--lime-green),
          var(--bright-cyan)
        );
      }
    }
  }

  input,
  label {
    display: none;
  }

  @media (max-width: 920px) {
    position: fixed;
    width: 100%;

    .navigation-list,
    .invite-button {
      display: none;
    }
    input,
    label {
      display: initial;
    }
    .navigation {
      display: flex;
      flex-direction: row-reverse;
      min-width: unset;

      input[type="checkbox"] {
        position: absolute;
        right: 9999px;
      }

      .close {
        display: none;
      }

      input[type="checkbox"]:checked ~ label {
        .close {
          display: initial;
        }

        .open {
          display: none;
        }
      }

      input[type="checkbox"]:checked ~ nav {
        position: fixed;
        top: 85px;
        left: 0;
        height: 100%;
        width: 100vw;
        background: linear-gradient(
          to top right,
          rgba(255, 255, 255, 0.2),
          black
        );

        > .navigation-list {
          display: block;
          width: 80%;
          left: 0;
          background: white;
          margin: 20px auto;
          border-radius: 5px;

          > * {
            padding: 20px;
            text-align: center;
          }
        }
      }
    }
  }
`;

const HeaderNavigation = styled.div``;
const HeaderCallToAction = styled.div``;
const Logo = styled.div``;

interface HeaderProps extends React.AllHTMLAttributes<any> {}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HeaderContainer {...props}>
      <Logo>
        <h1 className="sr-only">EasyBank</h1>
        <img src={require("../images/logo.svg")} alt="" />
      </Logo>
      <HeaderNavigation className="navigation">
        <input id="open-nav" type="checkbox" />
        <label htmlFor="open-nav" className="open-nav-icon">
          <img
            className="open"
            src={require("../images/icon-hamburger.svg")}
            alt="Open Navigation Menu"
          />
          <img
            className="close"
            src={require("../images/icon-close.svg")}
            alt="Open Navigation Menu"
          />
        </label>
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
        <InviteButton className="invite-button" />
      </HeaderCallToAction>
    </HeaderContainer>
  );
};

export default Header;
