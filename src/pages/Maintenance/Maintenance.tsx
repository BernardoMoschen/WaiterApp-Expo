import styled from "styled-components/native";
import { Container } from "../../Main/styles";
import { Text } from "react-native-paper";
import { View } from "react-native";

const Title = styled.Text`
    /* variant: "h3", */
    /* color: "theme.secondary.main.base", */
    color: blue;
    font-weight: 500;
    text-align: left;
`;

const Subtitle = styled.Text`
    /* variant: "h4"; */
    color: blue;
    font-weight: 500;
    text-align: left;
`;

const Body = styled.Text`
    /* variant: "p2"; */
    color: gray;
    text-align: left;
`;

export const Maintenance = () => {
    return (
        <>
            <Container>
                {/* <Layout> */}
                {/* <LayoutContent> */}
                {/* <Header /> */}
                <View style={{ marginTop: 8 }}>
                    <Title>Whoops!</Title>
                    <Subtitle>We are in maintenance...</Subtitle>
                    <Body mt={2}>
                        <Text variant="bodyMedium">
                            Pardon our appearance: we&apos;re currently
                            perfecting our customer experience.
                        </Text>
                        <Text>
                            You&apos;ll be able to sign up from the comfort of
                            your couch again soon.
                        </Text>
                        <Text>
                            We will be back soon. Check out our Main page if you
                            need support{" "}
                            {/* <Link to="https://paradisemobile.bm/"> */}
                            <Text style={{ color: "blue" }}>here</Text>
                            {/* </Link> */}.
                        </Text>
                    </Body>
                </View>
                {/* </LayoutContent> */}
                {/* </Layout> */}
            </Container>
        </>
    );
};
