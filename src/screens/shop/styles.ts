import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

container:{
flex:1,
paddingTop:45,
marginHorizontal:5
},

viewImg:{
 alignItems:"center",
  

},
img:{
    width:300,
    height:300,
    paddingTop:90,
    borderRadius:9,
    marginHorizontal:30
             
},
imgIcon:{
    width:110,
    height:50,

   
},
login:{
    textAlign:"right",
    fontWeight:'bold',
    marginTop:-29,
    marginHorizontal:9
   
},
buttonSkill: {
    borderWidth:0.5,
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal:5,
    height:37,
    borderColor:"#AAA",
    backgroundColor:"#fff"
    
},
buttonSkill2: {
    borderWidth:0.5,
    padding: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal:5,
    height:37,
    borderColor:"#AAA",
    backgroundColor:"#000"
    
},
textSkill: {
    marginLeft: 5,
    color: '#AAA',
    fontSize: 11,
    fontWeight: 'bold',
    
    
},
textoAcordes:{
    marginHorizontal:5,
    paddingTop:30,
    fontWeight:"bold",
    fontSize:23,
        
},
containerTop:{
   marginBottom:9
},

textNome:{
   
    fontSize:16
},
textArtista:{
    color:"#9D9D9D"

},

buttonAcordes: {
    backgroundColor: '#fff',
    padding: 12, 
    borderRadius: 50,
    alignItems: "center",
    marginVertical: 3,
    marginHorizontal:5,
    height:60,
    flexDirection:"row"
   
},
navbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal:20,
    marginBottom:50,
      
},
nav:{
    width: 25,
    height: 25,
    tintColor:"grey"
    
},
navText:{
    color:"grey",
    fontSize:11,
    fontWeight:"bold"
       
},
imgChords:{
    width:45,
    height:45,
    borderRadius:60,
    borderBottomLeftRadius:10,
    marginLeft:-10
}


})