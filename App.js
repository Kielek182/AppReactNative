import { StatusBar } from 'expo-status-bar';
import {StyleSheet,
        Text,
        SafeAreaView,
        TouchableOpacity,
        } from 'react-native';
import React,{useState} from 'react';//usestate consigo usar funções



export default function App() {
    const[numero,setNumero]= useState(1)

    function randomNumero(){

        const novo_numero=Math.floor(Math.random()*100)//math.floor=arredonda numero

        setNumero(novo_numero)
    }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.numero}>{numero}</Text>
      <TouchableOpacity onPress={randomNumero} style={styles.botao}>
          <Text>Gerar Número</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8BFD8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  numero:{
      fontSize:38,
      fontWeight:'bold',
      color:'#FFDEAD',
  },
  botao:{
      backgroundColor:'#E6E6FA',
      width:'40%',
      paddingHorizontal:5,
      paddingVertical:10,
      borderRadius:50,
      justifyContent:'center',
      alignItems:'center',
      marginTop: 10,
  }
});
