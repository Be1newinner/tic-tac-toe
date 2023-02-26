import React from "react";
import { Pressable } from 'react-native';
import styled from "styled-components";

const Box = ({Array, gameFinished, func}) => {

const Boxed = styled.View`
    flex-wrap: wrap;
    display: flex;
flex-direction: row;
    `;

const Row = styled.View`
    width:33%;
    background:pink;
    border: 2px solid black;
`;

const Option = styled.Text`
    font-size: 80px;
    font-weight: bold;
    text-align: center;
`;

    return(<>
        <Boxed>
    {[1,2,3,4,5,6,7,8,9].map((e,i)=>{
        return(
        <Row key={i+Array[e]} >
         <Pressable onPress={()=>!gameFinished && func(e) }>
             <Option>
             {Array[e]}
             </Option>
         </Pressable>
         </Row>
         )})}
    </Boxed>
    </>)
}

export default Box;