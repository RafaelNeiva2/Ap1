import React, { useState } from "react";
import { ScrollView, Text, Image, TouchableOpacity, FlatList, View } from "react-native";
import Raul from "../../assets/images/raul.png";
import { styles } from "./styles";
import IconImage from "../../assets/images/cifra.png";
import Caetano from "../../assets/images/caetano.png";
import Legiao from "../../assets/images/legiao.png";
import Ze from "../../assets/images/ze.png";
import More from "../../assets/images/more.png";
import Nando from "../../assets/images/nando.png";
import Skank from "../../assets/images/skank.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";





interface Category {
    id: string,
    categoria: string,
}

interface TopChords {
    id: string,
    nome: string,
    artista: string,
    image: Document


}
interface PictureMenu {
    id: string,
    imagem: Document
}


export const Shop = () => {

    const [categoryList, setCategoryList] = useState<Category[]>([
        {
            id: "1",
            categoria: "All",
        },
        {
            id: "2",
            categoria: "Rock",
        },
        {
            id: "3",
            categoria: "Sertanejo",
        },
        {
            id: "4",
            categoria: "Gospel",
        },
        {
            id: "10",
            categoria: "MPB",
        },
        {
            id: "6",
            categoria: "More",
        }
    ]);
    const [topChords, setTopChords] = useState<TopChords[]>([
        {
            id: "1",
            nome: "Sozinho",
            artista: "Caetano Veloso",
            image: Caetano

        },
        {
            id: "2",
            nome: "Tempo Perdido",
            artista: "Legião Urbana",
            image: Legiao

        },
        {
            id: "3",
            nome: "Chao de Giz",
            artista: "Ze Ramalho",
            image: Ze
        },
       
    ]);

    const [menu, setMenu] = useState<PictureMenu[]>([
        {
            id: "1",
            imagem: Raul

        },
        {
            id: "2",
            imagem: Nando

        },
        {
            id: "3",
            imagem: Skank

        },
    ]);


    const [style, setStyle] = useState<boolean>(true)

    function mostrarOcultar() {
        if (style === true) {
            setStyle(false)
        } else {
            setStyle(true)
        }
    }


    return (


        <ScrollView style={styles.container}>

            <View style={styles.containerTop}>
                <Image source={IconImage} style={styles.imgIcon} />
                <TouchableOpacity>
                    <Text style={styles.login}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>



            <FlatList showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={categoryList}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={mostrarOcultar} style={style ? styles.buttonSkill : styles.buttonSkill2}>
                        <Text style={styles.textSkill}>
                            {item.categoria}
                        </Text>
                    </TouchableOpacity>
                }
                keyExtractor={item => item.id}
            />

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={menu}
                renderItem={({ item }) =>
                    <View style={styles.viewImg}>
                        <Image source={item.imagem} style={styles.img} />
                    </View>
                }
                keyExtractor={item => item.id}
            />


            <Text style={styles.textoAcordes}>
                View top chords
            </Text>

            <FlatList
                data={topChords}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.buttonAcordes}>
                        <Image source={item.image} style={styles.imgChords} />
                        <View style={[{ position: "relative", paddingLeft: 10 }]}>
                            <Text style={styles.textNome}>
                                {item.nome}
                            </Text>
                            <Text style={styles.textArtista}>
                                {item.artista}
                            </Text>
                        </View>

                    </TouchableOpacity>
                }

                keyExtractor={item => item.id}
            />


            <View style={styles.navbar}>
                <TouchableOpacity>
                <AntDesign name={"home"}  size={25} color={"orange"}/> 
                    <Text style={[styles.navText, { color: "orange" }]}>Start</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                 <MaterialCommunityIcons name={"playlist-music"}  size={25} color={"#aaa"}/> 
                    <Text style={styles.navText}>Lists</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <AntDesign name={"search1"}  size={25} color={"#aaa"}/>
                    <Text style={styles.navText}>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <SimpleLineIcons name={"graduation"} style={[{marginLeft:8}]} size={25} color={"#aaa"}/>
                    <Text style={styles.navText}>Academy</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={More} style={styles.nav} />
                    <Text style={styles.navText}>More</Text>
                </TouchableOpacity>
            </View>



        </ScrollView>

    );


}

