import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import HeaderList from '../components/headerList'
import MatchCard from '../components/MatchInfo'

const keyMatch = (item) => {
    if (item.key % 2 == 0 || item.key == 0){
        return <Text>Chave: {item.key}</Text>
    }
}

export default () => {

  const [matches, setMatches] = useState([
    {match: 'Internacional 4 x 0 Grêmio', key: '0'},
    {match: 'Palmeiras 5 x 0 Corinthians', key: '1'},
    {match: 'Vasco 5 x 0 Botafogo', key: '2'},
  ]

  )
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={({ item }) => (
          <HeaderList title="Quartas de final"></HeaderList>
        )}
        data={matches}
        renderItem={({ item }) => (
         <View>
            <View>
              {keyMatch(item)}
            </View> 
                <MatchCard></MatchCard>
         </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})
