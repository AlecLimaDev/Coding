import styled from "styled-components";

export const About = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 600px;
    margin-top: 20px;
    border-radius: 5px;

    &:hover {
      transform: scale(1.4);
    }
  }

  h2 {
    text-transform: none;
    font-family: "Pacifico", cursive;
    font-weight: 300;
    font-size: 30px;
  }

  span {
    font-family: "Pacifico", cursive;
    font-weight: 700;
  }

  p {
    /* color: #aaa; */
    margin-bottom: 2em;
    font-weight: 500;
    text-align: center;
    text-transform: none;
  }

  a {
    display: block;
    margin-top: 15px;
    padding: 10px 15px;
    list-style: none;
  }

  .btn {
    &:hover {
      background-color: #5bea1c;
      transition: 2s all;
    }
  }
`;
