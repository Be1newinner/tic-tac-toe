import React from "react";
import { useTheme } from "react-native-paper";
import styled from "styled-components";

const BottomBar = ({whoWonned}) => {

const theme = useTheme();

const Bottom = styled.View`
    background-color: ${theme.colors.primary};
    justify-content: center;
    width: 100%;
    position:absolute;
    bottom: 0;
    padding-top:20px;
    padding-bottom:20px;
    height: 70px;
`;

const PlayerText = styled.Text`
    font-weight: bold;
    font-size: 18px;
    color:white;
    text-align:center;
`;

    return(<Bottom>
        <PlayerText>
        {`${whoWonned} Player Won`}
            </PlayerText>
        </Bottom>)
}

export default BottomBar;