import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SearchFilter = ({ icon, placeholder }) => {
	return (
		<View style={[styles.card, styles.shadowProp]}>
			<FontAwesome name={icon} size={25} color="#f96163" />
			<TextInput style={{ paddingLeft: 8,  fontSize: 16, color: "#808080" }}>
				{placeholder}
			</TextInput>
		</View>
	);
};

export default SearchFilter;

const styles = StyleSheet.create({
	card: {
		backgroundColor: "#fff",
		flexDirection: "row",
		paddingVertical: 16,
		borderRadius: 8,
		paddingHorizontal: 16,
		marginVertical: 16,
    },
	shadowProp: {
		shadowColor: '#000',
		shadowOffset: {width: 2, height: 4},
		shadowOpacity: 0.4,
		shadowRadius: 6,
    },
});
