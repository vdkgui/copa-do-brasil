import React, { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import HeaderList from '../components/headerList'
import MatchCard from '../components/MatchInfo'

import api from '../../api/api'

import resp from '../../api/response.json'
import fases from '../../api/fases.json'

export default props => {

  const [matches, setMatches] = useState([])
  const {route} = props
  const {data} = route.params

  // const [matchKeys, setKeys] = useState(Object.keys(matchArray))
  
  const getAllRounds = (item) => {
    return ( {
      fase_id: item.fase_id, 
      nome: item.nome,
      status: item.status
    } )
  }
  
  const [rounds, setRounds] = useState(data.fases.map(getAllRounds))
  const [currentRound, setCurrent] = useState(0)
  const [buttonRightDisable, setButtonRightDisable] = useState(false)
  const [buttonLeftDisable, setButtonLeftDisable]  = useState(true)

  useEffect(() =>{
    getMatchesFromRound(rounds[currentRound].fase_id)
      }, []) 

  const clickRightButton = () => {
    if(currentRound < rounds.length-1 && 
        rounds[currentRound+1].status != "aguardando-resultados") {
          setButtonLeftDisable(false)
          if(rounds[currentRound+2].status == "aguardando-resultados"){
            setButtonRightDisable(true)
          }
        getMatchesFromRound(rounds[currentRound+1].fase_id)
      setCurrent(currentRound+1)
    }
  }

  const clickLeftButton = () => {
    if(currentRound !=0) {
      setButtonRightDisable(false)
      getMatchesFromRound(rounds[currentRound-1].fase_id)
      setCurrent(currentRound-1)
    }
    if(currentRound == 1){
      setButtonLeftDisable(true)
    }
  }


  const getMatchesFromRound = (id) => { 
    api.get('/campeonatos/2/fases/'+id).then((response)=>{
      console.log(id)
      // console.log(response.data.chaves)
      setMatches(response.data.chaves)
    })
  }
    
  const backMatch = (item, index) => {

    if ('volta' in item){
      return (
        <View>
          <Text style={styles.keyMatch}>Chave {index+1}</Text>
          <MatchCard 
              status={item.volta[0].status}
              score={item.volta[0].placar}
              date={item.volta[0].data_realizacao}
              time={item.volta[0].hora_realizacao}
            />
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(matches)}
        ListHeaderComponent={() => { 
          return(
            <HeaderList 
            title={rounds[currentRound].nome}
            buttonLeftDisable={buttonLeftDisable}
            buttonRightDisable={buttonRightDisable}
            onPressRight={() => clickRightButton()}
            onPressLeft={() => clickLeftButton()}
            />
          )
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
        <View>
          <MatchCard 
            status={item.ida[0].status}
            score={item.ida[0].placar}
            date={item.ida[0].data_realizacao}
            time={item.ida[0].hora_realizacao}
          />
          {backMatch(item, index)}
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
  },
  keyMatch: {
    flexDirection: "row", 
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
})
