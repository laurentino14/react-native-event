import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#131016',
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    fontSize: 16,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#befc3a',
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    width: '100%',
    marginTop: 36,
    marginBottom: 42,
  },
  emptyListText: {
    color: '#fff',
  },
})
