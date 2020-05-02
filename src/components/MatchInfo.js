import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default (props) => {
  return (
    <View style={[styles.item_container, 
        {marginBottom: props.item % 2 != 0 ? 0 : 10 },
        {marginTop: props.item % 2 != 0 ? 0 : 10 }]}>
        <Text>Status: {props.matchStatus}</Text>
        <Text style={styles.score_text}>{props.match}</Text>
        <Text>Local:{props.matchLocation}</Text>
        <Text>Hora:{props.matchLocation}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item_container: {
      flex: 1,
      margin: 10,
      padding: 20,
      width: 325,
      borderWidth: 1,
      borderColor: '#c0c0c0',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    score_text: {
      fontSize: 15,
      fontWeight: 'bold',
    },
  })
  