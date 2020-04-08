import React from "react";
import styled from "@emotion/styled";
import Grid from "./Grid";

const FeaturesContainer = styled.section`
  background: var(--light-grayish-blue);

  h2 + p {
    margin-bottom: 80px;
    max-width: 600px;
    font-size: 0.9rem;
  }
`;

const Feature = styled.article`
  display: grid;
  grid-gap: 25px;
`;

const FeaturesIntro = styled.div``;

const Features: React.FC<React.AllHTMLAttributes<any>> = (props) => (
  <FeaturesContainer {...props}>
    <FeaturesIntro>
      <h2>Why choose Easybank?</h2>
      <p>
        We leverage Open Banking to turn your bank account into your financial
        hub. <br />
        Control your finances like never before.
      </p>
    </FeaturesIntro>
    <Grid>
      <Feature>
        <div>
          <img src={require("../images/icon-online.svg")} alt="" />
        </div>
        <div>
          <h3> Online Banking</h3>
        </div>
        <div>
          <p>
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
      </Feature>
      <Feature>
        <div>
          <img src={require("../images/icon-budgeting.svg")} alt="" />
        </div>
        <div>
          <h3> Simple Budgeting</h3>
        </div>
        <div>
          <p>
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
      </Feature>
      <Feature>
        <div>
          <img src={require("../images/icon-online.svg")} alt="" />
        </div>
        <div>
          <h3>Fast Onboarding</h3>
        </div>
        <div>
          <p>
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
      </Feature>
      <Feature>
        <div>
          <img src={require("../images/icon-api.svg")} alt="" />
        </div>
        <div>
          <h3>Open API </h3>
        </div>
        <div>
          <p>
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </Feature>
    </Grid>
  </FeaturesContainer>
);

export default Features;
