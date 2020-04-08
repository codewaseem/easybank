import React from "react";
import styled from "@emotion/styled";
import Grid from "./Grid";

const ArticlesContainer = styled.section`
  background: var(--very-light-gray);
  h2 {
    margin-bottom: 50px;
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
      font-size: 0.8rem;
      color: var(--grayish-blue);
    }

    h3 {
      margin: 20px 0;
    }
  }
`;

const Articles: React.FC<React.AllHTMLAttributes<any>> = (props) => (
  <ArticlesContainer {...props}>
    <h2>Latest Articles</h2>
    <Grid>
      <Article>
        <img src={require("../images/image-currency.jpg")} alt="" />
        <article>
          <hgroup>
            <h3>Receive money in any currency with no fees</h3>
            <h4>By Claire Robinson</h4>
          </hgroup>
          <p>
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
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
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
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
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </article>
      </Article>
    </Grid>
  </ArticlesContainer>
);

export default Articles;
