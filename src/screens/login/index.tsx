import React from "react";
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../login/styles";
import Icon from "../../assets/images/cifra.png";
import Redes from "../../components/cardRedesSociais";
import Fundo from "../../assets/images/fundo.png";
import Violao from "../../assets/images/violao.png"


export const Login = () => {
    return (

        <ScrollView style={[{ backgroundColor: "#191919" }]}>


            <View style={styles.all}>
                {/* <ImageBackground
                source={Fundo}
                style={styles.imageBackground}
            > */}
                <Image source={Icon} style={styles.img} />
                <View style={styles.cardLogin}>
                    <TextInput
                        style={styles.input}
                        placeholder="exemplo@exemplo.com.br"
                        placeholderTextColor='#aaa'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        placeholderTextColor='#aaa'
                    />
                    <TouchableOpacity >
                        <Text style={styles.login}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgot}>FORGOT MY PASSWORD</Text>
                    </TouchableOpacity>
                    <Redes />

                    <TouchableOpacity style={[{ flexDirection: "row", alignSelf: "center", paddingTop: 10 }]}>
                        <Text style={[{ fontWeight: "bold" }]}>Don't have an account?</Text><Text style={[{ color: "orange" }]}>Register</Text>
                    </TouchableOpacity>
                </View>

                <Image style={styles.imgViolao}
                    source={Violao} />
                <Text style={[{ alignSelf: "center", textAlign: "center", fontStyle: "italic", color: "#fff" }]}>
                    By signing up, you agree to our Terms of Use and Privacy Policy
                </Text>
                {/* </ImageBackground> */}
            </View>

        </ScrollView>


    )
};

