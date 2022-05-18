import React from 'react'
import styled from 'styled-components'

function dress() {
    return (
        <Container>
            <Item>
                <Img src={require("../../images/dress/dress1.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress2.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress3.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress4.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress5.jpg")}/>   
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress6.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress7.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress8.jpg")}/>
            </Item>
            <Item>
                <Img src={require("../../images/dress/dress9.jpg")}/>
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


export default dress