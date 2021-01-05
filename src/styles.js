import styled from "styled-components";

export const HeaderStyled = styled.div`
  font-family: "Catamaran", sans-serif;
  text-decoration: none;
  width: 100%;
  height: 4.5rem;
  margin: auto;
  padding-top: 0.5rem;
  text-align: center;
  text-decoration: none;
  font-size: 2.8rem;
  color: #00887a;
`;

export const FooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 12%;
  background-color: #00887a;
  padding: auto;
  margin: auto;

  // FOOTER BUTTONS
  .buttons-container {
    position: relative;
  }

  .home-button,
  .add-button,
  .user-button {
    display: block;
    position: absolute;
    top: auto;
    margin-top: 1.7rem;
  }

  .home-button {
    height: 2.8rem;
    width: 3rem;
    left: 0%;
    padding-left: 0.8rem;
  }

  .add-button {
    height: 2.5rem;
    right: 47%;
  }

  .user-button {
    height: 3rem;
    width: 3rem;
    right: 0%;
    padding-right: 0.8rem;
  }
`;

export const AdList = styled.ul`
  padding: 10px 10px;
  margin: 10px 10px;
`;

export const AdCardStyled = styled.li`
  border: solid 2px black;
  list-style-type: none;
  padding: 10px 10px;
  margin: 30px auto;

  img {
    height: 50px;
    width: auto;
  }

  p {
    margin: auto 20px;
  }
`;

// ad - adder

export const AdForm = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;

  .submit-button {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: #00887a;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    border-radius: 0.4rem;
    width: 20rem;
    height: 3rem;
    margin: 0.5em;
    text-align: center;
  }

  h2 {
    font-family: "Catamaran", sans-serif;
    color: #00887a;
    font-weight: bold;
    font-size: 1.5rem;
  }

  input {
    width: 20rem;
    height: 3rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 0.4rem;
    border-width: 0.2rem;
    border-color: #00887a;
    text-transform: uppercase;
  }

  textarea {
    width: 20rem;
    height: 10rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 0.4rem;
    border-width: 0.2rem;
    border-color: #00887a;
  }
`;

export const LandingPageStyled = styled.div`
  text-align: center;

  image {
    align-items: center;
  }

  p {
    font-family: "Open Sans", sans-serif;
    color: #00887a;
  }

  button {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: #00887a;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    border-radius: 0.4rem;
    width: 20rem;
    height: 2rem;
    margin: 0.5em;
    text-align: center;
  }
`;
