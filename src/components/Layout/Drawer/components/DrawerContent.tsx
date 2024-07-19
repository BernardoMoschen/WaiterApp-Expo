import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import {
    DrawerItem,
    DrawerContentScrollView,
    DrawerContentComponentProps,
} from "@react-navigation/drawer";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const DrawerContent: FC<DrawerContentComponentProps> = (params) => {
    return (
        <DrawerContentScrollView {...params}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{
                            uri: "https://i.ibb.co/kmkwtCw/Whats-App-Image-2024-05-27-at-3-24-21-PM.jpg",
                        }}
                        size={50}
                    />
                    <Title style={styles.title}>Bernardo Moschen</Title>
                    <Caption style={styles.caption}>+1 (441) 555-5551</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph
                                style={[styles.paragraph, styles.caption]}
                            >
                                500Mb
                            </Paragraph>
                            <Caption style={styles.caption}>Used Data</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph
                                style={[styles.paragraph, styles.caption]}
                            >
                                20GB
                            </Paragraph>
                            <Caption style={styles.caption}>Total</Caption>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="account-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => {
                            params.navigation.navigate("Profile");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="home"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {
                            params.navigation.navigate("Home");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="poll"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Services"
                        onPress={() => {
                            params.navigation.navigate("Services");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="wallet-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Billing"
                        onPress={() => {
                            params.navigation.navigate("Billing");
                        }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <MaterialCommunityIcons
                                name="forum-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Support"
                        onPress={() => {
                            params.navigation.navigate("Feedback");
                        }}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={false} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: "bold",
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 15,
    },
    paragraph: {
        fontWeight: "bold",
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
