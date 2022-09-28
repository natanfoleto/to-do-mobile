import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 8,
    paddingLeft: 12,
    paddingRight: 18,
    marginBottom: 8
  },
  title: {
    flex: 1,
    color: '#F2F2F2',
    marginLeft: 8,
    marginRight: 8
  },
  completed: {
    flex: 1,
    color: '#808080',
    marginLeft: 8,
    marginRight: 8,
    textDecorationLine: 'line-through'
  }
})
