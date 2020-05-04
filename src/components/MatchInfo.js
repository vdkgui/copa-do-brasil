import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default (props) => {
  return (
    <View style={styles.item_container}>
        <Text>Status: {props.status}</Text>
        <Text style={styles.score_text}>{props.score}</Text>
        { props.date 
          ? <Text>Data:{props.date}</Text>
          : <Text>Data: A definir</Text>
        }
        { props.time
          ? <Text>Hora:{props.time}</Text>
          : <Text>Hora: A definir</Text>
        }
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
  