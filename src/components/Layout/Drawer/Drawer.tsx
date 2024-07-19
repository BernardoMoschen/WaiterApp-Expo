import React from "react";
import { Text, View } from "react-native";
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Home } from "../../../pages/My/pages/Home/Home";
import { DrawerContent } from "./components/DrawerContent";

const Drawer = createDrawerNavigator();

export const DrawerRouter = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props: DrawerContentComponentProps) => (
                <DrawerContent {...props} />
            )}
        >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Home} />
            <Drawer.Screen name="Services" component={Home} />
            <Drawer.Screen name="Billing" component={Home} />
            <Drawer.Screen name="Feedback" component={Home} />
        </Drawer.Navigator>
    );
};
