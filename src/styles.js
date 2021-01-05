import styled from 'styled-components'

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
`

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
`

export const AdList = styled.ul`
padding: 10px 10px;
margin: 10px 10px;`

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
`