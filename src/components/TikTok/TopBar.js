import React from "react"
import styled from "styled-components";
import { useTheme } from "react-native-paper";

const TopBar = ({Player}) => {
const theme = useTheme();

const Top = styled.View`
    background-color: ${theme.colors.primary};
    justify-content: center;
    width: 100%;
    position:absolute;
    top: 0;
    padding-top:10px;
    padding-bottom:10px;
`;

const PlayerText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color:white;
    text-align:center;
`;

const InfoText = styled.Text`
    color:white;
`;

return(<>
    <Top>
        <PlayerText>
            Player {Player? "2nd" : "1st"} Turn
        </PlayerText>
        <InfoText>
            Player 1st is X and Player 2nd is 0
        </InfoText>
    </Top>

</>)
}

export default TopBar;