import styled from "styled-components/native";
import { Container } from "../../Main/styles";
import { SafeAreaView, Text, View } from "react-native";

const Title = styled.Text`
    /* variant: 'h3', */
    font-weight: 400;
    /* color: "theme.secondary.main.base"; */
    color: blue;
    text-align: left;
`;

const Subtitle = styled.Text`
    /* variant: "h4"; */
    font-weight: 400;
    /* color: "theme.secondary.main.base"; */
    color: blue;
    text-align: left;
`;

const Body = styled.Text`
    /* variant: "p2"; */
    /* color: "theme.neutral.900"; */
    color: gray;
    text-align: left;
`;

export const NotFound = () => {
    return (
        <>
            <Container>
                <SafeAreaView>
                    {/* <Header /> */}
                    <View style={{ marginHorizontal: 8 }}>
                        <Title>404</Title>
                        <Subtitle>
                            Whoops! Looks like you got lost in Paradise...
                        </Subtitle>
                        <Body mt={2}>
                            Let us help you find your way back - check out our
                            FAQ page or go back to the beginning{" "}
                            {/* <Link to="/"> */}
                            <Text style={{ color: "blue" }}>here</Text>
                            {/* </Link> */}.
                        </Body>
                    </View>
                </SafeAreaView>
            </Container>
        </>
    );
};
