import { View, Text, TouchableOpacity, Image } from 'react-native'

import check from '../../assets/check.png'
import checked from '../../assets/checked.png'

import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

interface Props {
  title: string;
  completed: boolean;
  onRemove: () => void;
  onChange: () => void;
}

export function Task({ title, completed, onRemove, onChange }: Props) {
  return (
    <View style={styles.container}>
      {/* <Checkbox
        status={completed ? 'checked' : 'unchecked'}
        onPress={onChange}
        color='#5E60CE'
        uncheckedColor='#4EA8DE'
      /> */}

      <TouchableOpacity
        onPress={onChange}
      >
        <Image source={completed ? checked : check}/>
      </TouchableOpacity>

      <Text style={completed ? styles.completed : styles.title}>
        {title}
      </Text>

      <TouchableOpacity
        onPress={onRemove}
      >
        <Feather 
          name='trash-2'
          size={18}
          color='#808080'
        />
      </TouchableOpacity>
    </View>
  )
}