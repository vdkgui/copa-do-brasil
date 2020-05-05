import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import api from '../../api/api'
import ButtonChamps from '../components/ButtonChamps'


export default props => {

  const {route} = props
  const {data} = route.params

  return (
    <View style={styles.container}>
        <Text style={styles.text}> O {data.edicao_atual.nome} ainda não iniciou</Text>
    </View>
  )
 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  text: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

})