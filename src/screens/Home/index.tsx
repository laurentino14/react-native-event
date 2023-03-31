import {useState} from 'react'
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import {Participant} from '../../components/Participant'
import {styles} from './styles'
export function Home() {
  const [participants, setParticipants] = useState<string[]>([])

  const [participantName, setParticipantName] = useState<string>('')
  function handleParticipantsAdd(name: string) {
    if (participants.includes(name)) {
      return Alert.alert(
        'Participante já adicionado!',
        'Já existe alguém na lista com o mesmo nome!',
      )
    }
    setParticipants(prevState => [...prevState, name])
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert(
      'Remover participante',
      `Deseja remover o participante ${name}?`,
      [
        {
          text: 'Sim',
          onPress: () => {
            setParticipants(prevState =>
              prevState.filter(participant => participant !== name),
            )
            Alert.alert('Deletado!')
          },
          style: 'default',
        },
        {
          text: 'Não',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Evento React Native</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          placeholderTextColor={'#6b6b6b'}
          keyboardType='twitter'
          onChangeText={e => {
            setParticipantName(e)
          }}
          value={participantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleParticipantsAdd(participantName)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>Nenhum participante</Text>
        )}
        keyExtractor={participant => participant}
        renderItem={({item}) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
      />
      <StatusBar
        animated
        backgroundColor={'transparent'}
        barStyle='light-content'
        translucent
      />
    </View>
  )
}
