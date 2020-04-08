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
        <InviteButton />
      </HeaderCallToAction>
    </HeaderContainer>
  );
};

export default Header;
