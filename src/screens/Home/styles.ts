import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center'
  },
  logo: {
    marginTop: 70
  },
  content: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    marginTop: 72,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: -32,
    marginBottom: 32,
    paddingLeft: 24,
    paddingRight: 24
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    fontSize: 16
  },
  button: {
    padding: 18,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tasks: {
    paddingLeft: 24,
    paddingRight: 24
  },
  headerTasks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  created: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  completed: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  createdText: {
    color: '#4EA8DE',
    fontWeight: 'bold'
  },
  completedText: {
    color: '#8284FA',
    fontWeight: 'bold'
  },
  count: {
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontWeight: 'bold',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 8,
    borderRadius: 100
  },
  viewListEmpty: {
    width: '100%',
    height: 208,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#333333',
    borderTopWidth: 1
  },
  titleEmpty: {
    marginTop: 16,
    color: '#808080',
    fontWeight: 'bold'
  },
  subtitleEmpty: {
    color: '#808080'
  }
})
