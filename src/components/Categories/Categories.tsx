import React, { FC, useState } from "react";
import { CategoryItem, Icon } from "./styles";
import { Text } from "../Text/Text";
import { FlatList } from "react-native";
import { Category } from "../../types/Category";

type Props = {
    categories: Category[];
    onSelectCategory: (categoryId: string) => void;
};

export const Categories: FC<Props> = ({ categories, onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleSelectCategory = (categoryId: string) => {
        const category = selectedCategory === categoryId ? "" : categoryId;
        setSelectedCategory(category);
        onSelectCategory(category);
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
                    <CategoryItem
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
                    </CategoryItem>
                );
            }}
        />
    );
};
