import React from 'react'
import styled from 'styled-components'

function travel() {
  return (
    <Container>
        <Item>
            <Img src={require("../../images/travel/travel1.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel2.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel3.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel4.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel5.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel6.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel7.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel8.jpg")}/>
        </Item>
        <Item>
            <Img src={require("../../images/travel/travel9.jpg")}/>
        </Item>
</Container>
)
}

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 30px;
background-color: grey;
`;
const Item = styled.div`
width: 23%;
margin-bottom: 30px;
border-radius: 8px;
overflow: hidden;
object-fit: cover;
`;
const Img  = styled.img`
display: block;
width: 100%;
`;


export default travel