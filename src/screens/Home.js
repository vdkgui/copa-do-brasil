import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import api from '../../api/api'
import ButtonChamps from '../components/ButtonChamps'


export default props => {

  const [championships, setChamps] = useState()
  const { navigation } = props
  
  useEffect(() =>{
    getAllChamps()
      }, []) 

  const getAllChamps = () => {
    api.get('/campeonatos').then((response)=>{
      console.log(response.data)
      setChamps(response.data)
    })
  }
  
  const goToChampsScreen = (item) => {
    let id = item.campeonato_id
    api.get('/campeonatos/'+id).then((response)=>{
      navigation.navigate(item.nome, {data:response.data})
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={championships}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => {
          return(
            <Text style={styles.list_header}>Lista de Campeonatos</Text>
          )
        }}
        renderItem={({ item, index }) => (
          <ButtonChamps 
            text={item.edicao_atual.nome_popular}
            onPress={() => goToChampsScreen(item)}
          />
        )}
      />
    </View>
  )
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
    marginTop: 10
  },
  list_header: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    // textAlign: 'center',
  },

})