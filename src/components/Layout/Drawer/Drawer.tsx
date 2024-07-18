import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../../pages/My/pages/Home/Home";

const Drawer = createDrawerNavigator();

const DrawerContent = () => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Drawer content</Text>
        </View>
    );
};

export const DrawerRouter = () => {
    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};
