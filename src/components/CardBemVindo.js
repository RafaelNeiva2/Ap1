import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default function BemVindo(){
    return(
    <View style={styles.card}>
        <Text style={styles.cardTitle}>Bem vindo ao Two-Sets</Text>
        <Text style={styles.cardSubtitle}>Todas as informações e notícias do mundo do tenis</Text> 
    </View>

    );
}
const styles = StyleSheet.create({
    
    card:{
      backgroundColor:'#fff',
      padding:12,
      borderRadius:2,
      marginBottom:20
    },
    cardTitle:{
      fontSize:18,
      fontWeight:'bold'
  
    },
    cardSubtitle:{
      color:'#999',
      
    }
  
  });
  
