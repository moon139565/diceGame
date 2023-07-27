
import styled from "styled-components";

import React from 'react'
import { Button } from "../styled/Button";

function StartGame({toggle}) {
  return (
    <Container>
        <div>
        <img src="images/dicess.png" alt="" />
        </div>
        <div className="content">
            <h1>Dice <span>Game</span></h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display:flex;
    margin:0 auto;
    height:100vh;
    align-items:center;
    gap: 20px;

    .content{
        h1{
            font-size: 96px;
            white-space:nowrap;
        }
    }
    span{
        color: red;
    }
`

