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
padding: 0px 0px;
margin: auto;
display: inline-block;
`



export const AdCardStyled = styled.li`
border-top: solid 1px lightgrey;
border-bottom: solid 1px lightgrey;
list-style-type: none;
padding: 10px 10px;
margin: auto;
display: flex;
justify-content:center;
align-items: center;
text-align: left;

//Advert pic and username
.ad_user{
    display:inline-block;
    text-align:center;
    margin: auto 0px;
    width: 25%;   

    img {
        height: 60px;
        width: auto;
        margin:auto;
        border: solid 1px lightgrey;
    }
    
    p {
        margin: auto;
    }
}

//Advert title and description
.ad_info {
    width: 70%;
    margin:auto;
    padding:auto;
    display: inline-block;
}

.ad_info h2, span {
    margin:auto;
    padding: auto;
}

.ad_info br {
    margin: 10px;
}
.ad_info button {
    padding:0.1rem;
    margin: auto 1rem;
}

@media (min-width: 500px){
    
    width: 500px;
    margin: 0px auto;
    padding: auto;
}
`




// PROFILE PAGE STYLING 

export const ProfileContainer = styled.div`
  text-align: center;
  font-size: 25px;
  
`
export const ProfilePicture = styled.img`
  border-radius: 50%;
  
`