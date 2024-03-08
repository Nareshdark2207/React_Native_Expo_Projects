import { StyleSheet, Text, TextInput, Button, TextField, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const SigninScreen = ({ navigation, route }) => {
    const [text, onChangeText] = React.useState('');
	return (
		<View style={{ flexDirection: "column", flex: 1, justifyContent: 'center', alignItems: "center"}}>
		<Image source={require("../../assets/images/Logo.png")} style={{ marginRight:20,  marginBottom: 50 }}
			/>
        <Text style={{color: "#f96163", fontSize:30, fontWeight:700, marginBottom:10, textAlign:"right"}}>SIGN IN</Text>
		<Text style={{color: "#919191", fontSize:16, fontWeight:500, textAlign:"center", marginBottom:10 }}>Enter the valid Information to continue</Text>
        <SafeAreaView style={{marginHorizontal: 30, marginTop: 10}}>
            <TextInput
                style={styles.inputProps}
                onChangeText={onChangeText}			
                placeholder="Username"
            />
            <TextInput
                style={styles.inputProps}
                onChangeText={onChangeText}
                placeholder="Password"
            />
            <Text style={{color: "#f96163", fontSize:16, fontWeight:500, padding:14, textAlign:"right"}} onPress={() => navigation.navigate("ForgotPassword")}>Forgot Password ?</Text>
            </SafeAreaView>			
			<TouchableOpacity
					style={{
						backgroundColor: "#f96163",
						borderRadius: 8,
						paddingVertical: 12,
						width: "85%",
						alignItems: "center",
						marginTop: 5,                      
					}}>
					<Text style={{ fontSize: 22, color: "#fff", fontWeight: "700" }}
					onPress={() => navigation.navigate("RecipeList")}
					>
					Sign In
					</Text>
			</TouchableOpacity>
            <Text style={{color: "#919191", fontSize:18, fontWeight:500, padding:18, textAlign:"center"}}>Or Continue with</Text>
			<View style={styles.fixToText}>
				<Text style={styles.titleProps}>
					<FontAwesome name="google" style={styles.iconProps}  />				
					&nbsp;&nbsp;Google
				</Text>
                <Text style={styles.titleProps}>
					<FontAwesome name="facebook" style={styles.iconProps}  />
					&nbsp;&nbsp;Facebook
				</Text>
			</View>
			<View style={styles.fixToText}>
				<Text style={styles.textProps}>			
					Don't have an Account ? <Text style={styles.linkProps} onPress={() => navigation.navigate("Signup")}> Sign up</Text>
				</Text>           
			</View>
        </View>
	);
};

export default SigninScreen;

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
		marginTop: 100,
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