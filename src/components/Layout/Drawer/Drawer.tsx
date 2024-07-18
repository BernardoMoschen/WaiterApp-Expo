import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../../../pages/My/pages/Home/Home";
import { DrawerContent } from "./components/DrawerContent";

const Drawer = createDrawerNavigator();


export const DrawerRouter = () => {
    return (
        <Drawer.Navigator drawerContent={() => <DrawerContent />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Home} />
        </Drawer.Navigator>
    );
};
