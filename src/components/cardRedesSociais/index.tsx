import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Facebook from "../../assets/images/face.png";
import Google from "../../assets/images/google.png";
import { styles } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign"




export default function Redes() {
    return (
        <View style={styles.container}>
        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Image
                source={Facebook}
                style={styles.buttonImageIconStyle}
            />
            <View  />
            <Text style={styles.buttonTextStyle}>
                Login With Facebook
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.buttonStyle,{backgroundColor:"#aaa"}]}
            activeOpacity={0.5}>
            <AntDesign name={"google"} style={styles.icon} size={20} color={"#fff"}/>
            <View  />
            <Text style={styles.buttonTextStyle}>
                Login With Google
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.buttonStyle,{backgroundColor:"#000"}]}
            activeOpacity={0.5}>
            <AntDesign name={"apple1"} style={styles.icon} size={20} color={"#fff"}/>
            <View  />
            <Text style={styles.buttonTextStyle}>
                Login With Apple
            </Text>
        </TouchableOpacity>
    </View >

    );
}