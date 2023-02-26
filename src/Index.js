import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Bottom from "./components/TikTok/BottomBar";
import TopBar from "./components/TikTok/TopBar";
import ResetButton from "./components/TikTok/ResetButton";
import Box from "./components/TikTok/Box";

const Index = () => {
  
const Container = styled.View`
    flex: 1;    
    justify-content: center;
    align-items:center;
`;

const [currPlayer, setCurrPlayer] = useState(false);
const [whoWon, setWhoWon] = useState("1st");
const [isGameFinished, setIsGameFinished] = useState(false);

const [inText,setInText] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
});

    const Tick = (its) => {

    if(inText[its]===""){
        if(currPlayer){
            let newArray = {...inText};
            newArray[its] = 0;
            setInText(newArray);
            setCurrPlayer(!currPlayer);
            WhoWonFun();
        } else {
            let newArray = {...inText};
            newArray[its] = "X";
            setInText(newArray);       
            setCurrPlayer(!currPlayer); 
            WhoWonFun();
        }
    }

}

    const winningArray = [
        [1,2,3],[4,5,6],[7,8,9],
        [1,4,7],[2,5,8],[3,6,9],
        [1,5,9],[3,5,7]
    ]

    useEffect(()=>{
        WhoWonFun();
    },[inText]);

    const clearContent = () => {
        setInText({
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
        });
        setCurrPlayer(false);
    }

    const WhoWonFun = () => {   

        winningArray.forEach(e=>{
            if(inText[e[0]] === inText[e[1]] & inText[e[1]] === inText[e[2]] & inText[e[1]] === "X") {
                setIsGameFinished(true);
                setWhoWon("1st");
            } 
            if(inText[e[0]] === inText[e[1]] & inText[e[1]] === inText[e[2]] & inText[e[1]] === 0) {
                setIsGameFinished(true);
                setWhoWon("2nd");
            }
        })
        console.log(inText);
    }
    
return(
<Container>

    <TopBar Player={currPlayer} />
       
    <Box    Array={inText} 
            gameFinished={isGameFinished} 
            func={(e)=>Tick(e)}
        />

    <ResetButton 
        gameMode={isGameFinished} 
        clearFunction={()=>{ 
            clearContent();
            setIsGameFinished(false);
        }} 
    />

   { isGameFinished && <Bottom whoWonned={whoWon} /> }
</Container>)
}

export default Index;
