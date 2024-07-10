import React, { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { products } from "../../mocks/products";
import { Text } from "../Text/Text";
import {
    Divider,
    Image,
    ProductContainer,
    ProductDetails,
    AddToCartButton,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal/ProductModal";
import { Product } from "../../types/Product";

export const Menu = () => {
    const [isProductModalVisible, setIsProductModalVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<null | Product>(
        null
    );

    const handleOpenModal = (product: Product) => {
        setSelectedProduct(product);
        setIsProductModalVisible(true);
    };

    return (
        <>
            <FlatList
                style={{ marginTop: 32 }}
                contentContainerStyle={{ paddingHorizontal: 24 }}
                ItemSeparatorComponent={Divider}
                data={products}
                keyExtractor={({ _id }) => _id}
                renderItem={({ item: product }) => (
                    <ProductContainer onPress={() => handleOpenModal(product)}>
                        <Image
                            source={require("./mockImage.png")}
                            // source={{
                            //     uri: `http://localhost:3001/upload/${product.imagePath}`,
                            // }}
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
                        <AddToCartButton onPress={() => alert("AddToCart")}>
                            <PlusCircle />
                        </AddToCartButton>
                    </ProductContainer>
                )}
            />
            <ProductModal
                visible={isProductModalVisible}
                product={selectedProduct}
                onClose={() => setIsProductModalVisible(false)}
            />
        </>
    );
};
