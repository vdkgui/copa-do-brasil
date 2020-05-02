import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
  return (
    <View style={styles.header_container}>
      <Icon.Button
          name="arrow-left"
          backgroundColor="#fcfcfc"
          color="#3b9c00"
          size={18}
          padding={18}
        />
      <Text style={styles.list_header_level}>{props.title}</Text>
      <Icon.Button
          name="arrow-right"
          backgroundColor="#fcfcfc"
          color="#3b9c00"
          size={18}
          padding={18}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  header_container: {
    flex: 2,
    flexDirection: "row", 
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  list_header_level: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  }
})