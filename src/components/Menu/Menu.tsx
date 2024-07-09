import React from "react";
import { FlatList, Pressable } from "react-native";
import { products } from "../../mocks/products";
import { Text } from "../Text/Text";
import {
    Divider,
    Image,
    Product,
    ProductDetails,
    AddToCartButton,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

export const Menu = () => {
    return (
        <FlatList
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            ItemSeparatorComponent={Divider}
            data={products}
            keyExtractor={({ _id }) => _id}
            renderItem={({ item: product }) => (
                <Product>
                    <Image
                        // source={{
                        //     uri: `http://localhost:3001/upload/${product.imagePath}`,
                        // }}
                        source={require("./mockImage.png")}
                    />
                    <ProductDetails>
                        <Text weight="600">{product.name}</Text>
                        <Text
                            size={14}
                            color="#666"
                            style={{ marginVertical: 8 }}
                        >
                            {product.description}
                        </Text>
                        <Text weight="600" size={14}>
                            {formatCurrency(product.price)}
                        </Text>
                    </ProductDetails>
                    <AddToCartButton>
                        <PlusCircle />
                    </AddToCartButton>
                </Product>
            )}
        />
    );
};
