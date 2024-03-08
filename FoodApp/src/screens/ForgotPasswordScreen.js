import { StyleSheet, Text, TextInput, Button, TextField, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ForgotPasswordScreen = ({ navigation, route }) => {
    const [text, onChangeText] = React.useState('');
	return (
		<View style={{ flexDirection: "column", flex: 1, justifyContent: 'center', alignItems: "center"}}>
		<Image source={require("../../assets/images/Logo.png")} style={{ marginRight:20,  marginBottom: 50 }}
			/>
        <Text style={{color: "#f96163", fontSize:30, fontWeight:700, marginBottom:10, textAlign:"right"}}>FORGOT PASSWORD</Text>
		<Text style={{color: "#919191", fontSize:16, fontWeight:500, textAlign:"center", lineHeight:24, marginHorizontal: 20, marginBottom:10 }}>Don't Worry it happens. Please enter the email address associate with your account</Text>
        <SafeAreaView style={{marginHorizontal: 30, marginTop: 10}}>
            <TextInput
                style={styles.inputProps}
                onChangeText={onChangeText}			
                placeholder="Email Address"
            />
            </SafeAreaView>			
			<TouchableOpacity
					style={{
						backgroundColor: "#f96163",
						borderRadius: 8,
						paddingVertical: 12,
						width: "85%",
						alignItems: "center",
						marginTop: 24,                      
					}}>
					<Text style={{ fontSize: 22, color: "#fff", fontWeight: "700" }}
					onPress={() => navigation.navigate("RecipeList")}
					>
					Send OTP
					</Text>
			</TouchableOpacity>

			<View style={styles.fixToText}>
				<Text style={styles.textProps}>			
					You remember your password ? <Text style={styles.linkProps} onPress={() => navigation.navigate("Signin")}>Sign in</Text>
				</Text>           
			</View>
        </View>
	);
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    inputProps: {
        backgroundColor: "rgb(255 255 255)",
		borderColor: "thistle",
		borderWidth: 1,
        height: 50,
        width: 350,
        borderRadius: 5,
        margin: 10,
        marginBottom: 10,
        padding: 10,
    },
    shadowProp: {
		shadowColor: '#000',
		shadowOffset: {width: 2, height: 4},
		shadowOpacity: 0.4,
		shadowRadius: 6,
    },
	fixToText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
    },
	textProps: {
		fontSize: 18, 
		color: "#414141",
		fontWeight: "500",
		marginTop: 320,
	},
	linkProps: {
		fontSize: 18, 
		color: "#f96163",
		fontWeight: "500",
	},
	titleProps: {
		fontSize: 18, 
		color: "#414141",
		backgroundColor: "#fff", 
		fontWeight: "500",
		borderColor:"#6f6f6f",
		borderWidth: 0,
		borderRadius: 8,
		paddingVertical: 10,
		width: "35%",
		textAlign: 'center',
		verticalAlign: 'middle',
		marginTop: 4,
		justifyContent:"space-between",
		marginLeft: 12,		
	},
	iconProps: {
		fontSize:20,
	    color:"#f96163"
	}
});