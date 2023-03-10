import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
`

export const HomeDetailContainer = styled.div`
  width: 100%;
`
export const HomeBanner = styled.div`
  height: 230px;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 15px;
  background-image: url(${props => props.ImageUrl});

  @media screen and (min-width: 576px) {
    padding-left: 5%;
  }
`
export const PremiumContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: space-between;
`

export const PremiumDetails = styled.div`
  height: 30px;
`
export const HomeLog = styled.img`
  height: 35px;
`
export const HomeDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: #212121;
`
export const HomeButton = styled.button`
  height: 40px;
  width: 110px;
  background: transparent;
  border: 1px solid #231f20;
  color: #212121;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 15px;
`
export const CrossMarkCon = styled.div`
  height: 20px;
  width: 20px;
  font-size: 20px;
  cursor: pointer;
  outline: none;
`

export const VideosUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
export const SearchContainer = styled.div`
  height: 75px;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    background-size: cover;
  }
  @media screen and (min-width: 768px) {
    padding-left: 5%;
  }
`
export const SearchInput = styled.input`
  height: 35px;
  width: 80%;
  border: 1px solid;
  outline: none;
  padding-left: 10px;
  font-family: 'Roboto';
  font-size: 14px;
  border-right: 0px;
  @media screen and (min-width: 576px) {
    width: 66%;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const SearchButton = styled.button`
  height: 35px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  @media screen and (min-width: 576px) {
    width: 15%;
  }
  @media screen and (min-width: 768px) {
    width: 12%;
  }
`
export const HomeVideosContainer = styled.div`
  width: 100%;
`
export const VideoDetailUl = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`
