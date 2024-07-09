import React from "react";
import { Category, Icon } from "./styles";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { FlatList } from "react-native";

export const Categories = () => {
    return (
        <FlatList
            horizontal
            data={categories}
            contentContainerStyle={{ paddingRight: 24 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(category) => category._id}
            renderItem={({ item: category }) => (
                <Category key={category._id}>
                    <Icon>
                        <Text>{category.icon}</Text>
                    </Icon>
                    <Text weight="600">{category.name}</Text>
                </Category>
            )}
        />
    );
};
