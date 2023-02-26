import React from "react"
import { Button , useTheme } from "react-native-paper";
import styled from "styled-components";

const ResetButton = ({gameMode, clearFunction}) => {
const theme = useTheme();

const Reset = styled(Button)`
    position: absolute;
    bottom: 90px;
`;

    return(<>
    
    <Reset mode="contained" 
        buttonColor={gameMode?"green":theme.colors.primary} 
        onPress={()=>{ clearFunction()}}>
       { gameMode ? "Start Again" : "Reset Game"}
    </Reset>

    </>)
}

export default ResetButton;