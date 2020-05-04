import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (props) => {
  return (
    <View style={styles.header_container}>
      <Button icon={
        <Icon
          name="arrow-left"
          backgroundColor="#fcfcfc"
          color={props.buttonLeftDisable ? "#a3a2a2":"#3b9c00"}
          size={18}
          padding={18}
        />}
        type='clear'
        onPress={props.onPressLeft}
        />
      <Text style={styles.list_header_level}>{props.title}</Text>
      <Button icon={
        <Icon
          name="arrow-right"
          backgroundColor="#fcfcfc"
          color={props.buttonRightDisable ? "#a3a2a2":"#3b9c00"}
          size={18}
          padding={18}
        />}
        type='clear'
        onPress={props.onPressRight}
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
  },
})