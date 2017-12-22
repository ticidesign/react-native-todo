import { StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FF6666',
    padding: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    display: 'flex',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 30,
  },
  title: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 50,
  },
  subtitle: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 16,
    letterSpacing: 0.05,
    lineHeight: 50,
  },
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 0.7,
    height: 50,
    padding: 10,
    marginRight: 5,
    backgroundColor: 'white',
  },
  button: {
    flex: 0.3,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,

  },
  text: {
    fontFamily: 'Arial',
    color: 'white',
    fontSize: 12,
  },
  todos: {
    marginBottom: 20,
  },
  todo: {
    width: width,
    marginLeft: -30,
    marginBottom: 5,
    padding: 15,
    paddingLeft: 25,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  todoText: {
    color:'white',
    fontSize: 18,
  }
});