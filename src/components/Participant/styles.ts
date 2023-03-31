import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  name: {
    color: '#fff',
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e83f5b',
    width: 56,
    height: 56,
    borderRadius: 5,
  },
})
