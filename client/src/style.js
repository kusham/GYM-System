import styled from 'styled-components'
import backgroundImage from './resources/images/background.png'


export const Root = styled.div`
 background-image: url(${backgroundImage});
 height: 100vh;
`

export const Container = styled.div`
height: 84vh;
`

export const Footer = styled.div`
display: flex;
justify-content: center;
font-family: NationalBold,Helvetica,Arial,Sans-serif;
color: white;
font-size: 20px;
height: 4vh;
`