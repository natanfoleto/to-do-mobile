import { useState } from 'react'

import { 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  FlatList, 
  Alert 
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { Task } from '../../components/Task'

import logoImg from '../../assets/Logo.png'
import clipboardImg from '../../assets/Clipboard.png'

import { styles } from './styles'

interface TodoProps {
  title: string;
  completed: boolean;
}

export function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([])
  const [todoName, setTodoName] = useState('')

  function handleTodoAdd() {
    if (todos.findIndex(todo => todo.title === todoName) === 0)
      return Alert.alert('To-do existe', 'Já existe um to-do na lista com esse nome')

    if (!todoName)
      return Alert.alert('To-do sem descrição', 'Digite uma descrição da sua tarefa na caixa de texto')

    setTodos(prevState => [...prevState, { title: todoName, completed: false }])
    setTodoName('')
  }

  function handleTodoRemove(title: string) {
    Alert.alert('Remover o To-do?', `${title}`, [
      {
        text: 'Sim',
        onPress: () => setTodos(prevState => prevState.filter(todo => todo.title !== title))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleTodoChange(title: string) {
    const newTodos = todos.map(todo => {
      if (todo.title === title)
        return {...todo, completed: !todo.completed}

      return todo
    });

    setTodos(newTodos)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={logoImg}
        style={styles.logo}
      />

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput 
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            onChangeText={setTodoName}
            value={todoName}
          />

          <TouchableOpacity 
            style={styles.button}
            onPress={handleTodoAdd}
          >
            <AntDesign
              name="pluscircleo" 
              size={22}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
          <View style={styles.headerTasks}>
            <View style={styles.created}>
              <Text style={styles.createdText}>
                Criadas
              </Text>
              <Text style={styles.count}>
                {todos.length}
              </Text>
            </View>
            
            <View style={styles.completed}>
              <Text style={styles.completedText}>
                Concluídas
              </Text>
              <Text style={styles.count}>
                {todos.filter(todo => todo.completed === true).length}
              </Text>
            </View>
          </View>

          <FlatList 
            data={todos}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <Task 
                title={item.title}
                completed={item.completed}
                onRemove={() => handleTodoRemove(item.title)}
                onChange={() => handleTodoChange(item.title)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.viewListEmpty}>
                <Image 
                  source={clipboardImg}
                />

                <Text style={styles.titleEmpty}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.subtitleEmpty}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
          />
        </View>

      </View>
    </View>
  )
}