import React, { useState } from "react";
import { Category, Icon } from "./styles";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { FlatList } from "react-native";

export const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectCategory = (categoryId: string) => {
        const category = selectedCategory === categoryId ? "" : categoryId;
        setSelectedCategory(category);
    };

    return (
        <FlatList
            horizontal
            data={categories}
            contentContainerStyle={{ paddingRight: 24 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(category) => category._id}
            renderItem={({ item: category }) => {
                const isSelected = selectedCategory === category._id;
                return (
                    <Category
                        onPress={() => handleSelectCategory(category._id)}
                        key={category._id}
                    >
                        <Icon>
                            <Text opacity={isSelected ? 1 : 0.7}>
                                {category.icon}
                            </Text>
                        </Icon>
                        <Text opacity={isSelected ? 1 : 0.7} weight="600">
                            {category.name}
                        </Text>
                    </Category>
                );
            }}
        />
    );
};
