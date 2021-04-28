import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  teamsItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderColor: '#05668d',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  teamsPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  teamsName: {
    flex: 1,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#05668d',
    marginTop: 30
  },
  teamsInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});

export default styles;
