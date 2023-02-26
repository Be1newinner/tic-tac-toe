import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Pressable} from 'react-native';

const Rows = ({func,text}) => {

    const Row = styled(View)`
    background:pink;
    flex: 1;
    border: 2px solid black;
`;

const Option = styled(Text)`
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    `;
    return(
        <Row>
            <Pressable onPress={()=>func(item)}>
                <Option>
                {text}
                </Option>
            </Pressable>
        </Row>
    )
}

export default Rows; 