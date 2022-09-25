import React from "react";
import styled from 'styled-components'
import { AccountBox } from "../accountCreate";

const AppContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
/* background: black; */
// justify-content: center;
`

export default function Log(){
    return (
    <AppContainer>
        <AccountBox />
    </AppContainer>
    )
}