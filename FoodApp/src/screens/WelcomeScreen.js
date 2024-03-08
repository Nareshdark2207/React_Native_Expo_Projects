import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../../assets/images/welcome1.png")}
				style={{ marginTop: 40 }}
			/>

			<Text style={{ color: "#f96163", fontSize: 22, fontWeight: "bold" }}>
				40K+ Premium Recipes
			</Text>

			<Text style={styles.headerProps}>
				Welcome to Foodbie
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("Signin")}
				onPointerOver={onPointerOver}
				style={styles.btnProps}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700", }}>
					Let's Go
				</Text>
			</TouchableOpacity>
		</View>
	);
};
function onPointerOver(event) {
  console.log(
    'Over blue box offset: ',
    event.nativeEvent.offsetX,
    event.nativeEvent.offsetY,
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
	btnProps:{
		backgroundColor: "#f96163",
		borderRadius: 8,
		paddingVertical: 15,
		width: "80%",
		alignItems: "center",
	},
	headerProps: {
		fontSize: 40,
		fontWeight: "bold",
		color: "#3c444c",
		marginTop: 44,
		marginBottom: 40,
	}
});
