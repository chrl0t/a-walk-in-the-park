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
  background-color: #00887a;

  .header-title {
    text-decoration: none;
    color: black;
  }
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
  .user-button,
  .message-button,
  .favourite-button {
    display: block;
    position: absolute;
    top: auto;
    margin-top: 1rem;
  }

  .home-button {
    height: 2.8rem;
    width: 3rem;
    left: 0%;
    padding-left: 0.8rem;
    margin-top: 1.1rem;
  }

  .add-button {
    height: 2.5rem;
    right: 47%;
    margin-top: 1.2rem;
  }

  .user-button {
    height: 3.1rem;
    width: 3.2rem;
    right: 0%;
    padding-right: 0.8rem;
    margin-top: 0.9rem;
  }

  .message-button {
    height: 3.3rem;
    width: 2.7rem;
    margin-top: 0.8rem;
    position: flex;
    margin-left: 6.2rem;
  }

  .favourite-button {
    height: 2.8rem;
    width: 2.8rem;
    margin-left: 16.3rem;
    margin-top: 1.1rem;
    position: flex;
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
    height: 2.5rem;
    margin: 0.5em;
    text-align: center;
  }

  h2 {
    font-family: "Catamaran", sans-serif;
    color: #00887a;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0.8rem;
  }

  input {
    width: 20rem;
    height: 2rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 0.4rem;
    border-width: 0.2rem;
    border-color: #00887a;
    text-transform: uppercase;
  }

  textarea {
    width: 20rem;
    height: 7rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 0.4rem;
    border-width: 0.2rem;
    border-color: #00887a;
  }

  .question {
    color: #00887a;
  }

  .check-box {
    width: 2rem;
    padding: 0;
    margin: 0;
  }

  .check-box:checked {
    width: 5rem;
    padding: 0;
    margin: 0;
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

export const AdList = styled.ul`
  padding: 0px 0px 2rem 0px;
  margin: auto;
  display: inline-block;

  h1 {
    font-family: "Open Sans", sans-serif;
    font-size: 1.7rem;
  }

  form {
    padding-bottom: 1rem;
  }

  .submit-button {
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    background: #00887a;
    font-family: "Catamaran", sans-serif;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    width: 8rem;
    height: 1.8rem;
    margin: 0.5em;
    text-align: center;
    margin-top: 1rem;
  }

  .select-box {
    background-color: white;
    font-family: "Catamaran", sans-serif;
    border-color: #00887a;
    padding: 0px;
    margin-bottom: 0px;
  }

  .question {
    margin-bottom: 0.5rem;
  }
`;

export const AdCardStyled = styled.li`
  border-top: solid 1px lightgrey;
  border-bottom: solid 1px lightgrey;
  list-style-type: none;
  padding: 10px 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;

  .username {
    text-decoration: none;
    color: #00887a;
    font-family: "Open Sans", sans-serif;
    font-size: 0.8rem;
  }

  .delete-button {
    float: right;
  }

  //Advert pic and username
  .ad_user {
    display: inline-block;
    text-align: center;
    margin: auto 0px;
    width: 25%;

    img {
      height: 60px;
      width: auto;
      margin: auto;
      border: solid 1px lightgrey;
    }

    p {
      margin: auto;
    }
  }

  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    padding-right: 0rem;
    margin-right: 0rem;
  }

  .emoji {
    font-size: 1.5rem;
    padding-right: 0rem;
    margin-right: 0rem;
  }

  .distance {
    font-size: 0.73rem;
    font-weight: bold;
    color: #00887a;
  }

  //Advert title and description
  .ad_info {
    width: 70%;
    margin: auto;
    padding: auto;
    display: inline-block;
    padding-left: 1.5rem;
    font-size: 0.8rem;
  }

  .ad_info h2,
  span {
    margin: auto;
    padding: auto;
  }

  .ad_info h2 {
    font-family: "Catamaran", sans-serif;
    line-height: 1.5rem;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .ad_info span {
    font-family: Helvetica, sans-serif;
    line-height: 1.2rem;
    font-size: 1rem;
  }

  .ad_info br {
    margin: 10px;
  }
  .ad_info button {
    padding: 0.1rem;
    margin: 0.5rem 1.7rem 0rem 0rem;
  }

  @media (min-width: 500px) {
    width: 500px;
    margin: 0px auto;
    padding: auto;
  }
`;

// PROFILE PAGE STYLING

export const ProfileContainer = styled.div`
  text-align: center;
  font-size: 25px;
  padding: 0.5rem;
  padding-top: 0rem;
  height: auto;

  .logout-button {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: #00887a;
    font-family: "Catamaran", sans-serif;
    font-size: 0.8rem;
    border-radius: 0.4rem;
    width: 8rem;
    height: 1.8rem;
    margin: 0.5em;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    align-items: center;
  }

  img {
    padding-top: 0rem;
    margin-top: 0rem;
  }

  h2 {
    color: #00887a;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: #00887a;
    margin-bottom: 0.8rem;
  }

  .info {
    font-size: 1.2rem;
    font-family: Helvetica, sans-serif;
  }

  .fields-gender {
    margin: 1rem;
    text-transform: capitalize;
  }

  .fields {
    margin: 1rem;
  }

  .submit-button {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: #00887a;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    border-radius: 0.4rem;
    width: 10rem;
    height: 2rem;
    margin: 0.5em;
    text-align: center;
  }

  textarea {
    width: 20rem;
    height: 8rem;
    font-family: "Open Sans", sans-serif;
    border-radius: 0.4rem;
    border-width: 0.2rem;
    border-color: #00887a;
  }
`;
export const ProfilePicture = styled.img`
  border-radius: 50%;
`;


// LOGIN STYLES


export const LoginContainer = styled.div`
  height: auto;
  text-align: left;
  padding-left: 50px;

  h1 {
    color: #00887a;
  }

  input {
    width: 80%;
    height: 30px;
    border: none;
    background-color: white;
    border-bottom: 2px solid #00887a;
  }

  button {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    background: #00887a;
    font-family: "Catamaran", sans-serif;
    font-weight: bold;
    border-radius: 0.4rem;
    width: 80%;
    margin-top: 30px;
    text-align: center;
  }
`

export const ProfileAdCardsContainer = styled.div`
  
  text-align: left;
  border-bottom: 1px solid grey;
  width: 90%;
  
  
  h3 {
    font-size: 20px;
    
  }

  p {
    font-size: 16px;
  }
`