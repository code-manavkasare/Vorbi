import { StyleSheet } from 'react-native';
import theme from '../../theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1F2232',
  },
  topContainer: {
    height: theme.height * 0.3,
    width: theme.width,
    justifyContent: 'center',
    paddingHorizontal: theme.width * 0.1,
  },
  headingText1: {
    fontSize: 34,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
  },
  headingText2: {
    fontSize: 34,
    fontFamily: 'Poppins-Regular',
    color: '#FFB30F',
  },

  middleContainer: {
    width: theme.width * 0.8,
    height: theme.height * 0.4,
    justifyContent: 'space-between',
    paddingBottom: 40,
    borderBottomWidth: 2,
    borderBottomColor: '#363C5A',
  },
  phoneInput: {
    borderWidth: 1,
    borderColor: '#363C5A',
    borderRadius: 10,
    paddingHorizontal: 20,
    width: theme.width * 0.8,
    paddingVertical: 15,
    fontSize: 20,
    color: '#6D7187',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFB30F',
    width: theme.width * 0.8,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonLabel: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: '#ffff',
  },
  googleContainer: {
    margin: 10,
    backgroundColor: '#363C5A',
    width: theme.width * 0.8,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  googleSubContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  googleLabel: {
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },

  bottomContainer: {
    height: theme.height * 0.2,
    alignItems: 'center',
    paddingTop: 40,
  },
  bottomHeading: {
    color: '#fff',
    fontSize: 24,
  },
  bottomButton: {
    backgroundColor: '#FFB30F',
    width: theme.width * 0.4,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  otpScreenHeading: {
    fontSize: 30,
    color: '#fff',
  },
  otpScreenDescirption: {
    fontSize: 16,
    color: '#fff',
  },
  otpInputCell: {
    borderWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: 'rgba(54,60,90, 0.8)',
    borderRadius: 5,
    color: '#fff',
  },
  otpScreenMidBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },

  forgotPasswordButton: {
    width: theme.width * 0.8,
    alignItems: 'flex-end',
  },
  forgotPasswordButtonLabel: {
    color: '#B3B7CD',
    textDecorationLine: 'underline',
  },

  error: {
    color: 'crimson',
  },
  modal: {
    flex: 1,
    backgroundColor: theme.background.primary100,
  },
  listItem: {
    marginVertical: 20,
    width: theme.width * 0.8,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  listItemLabel: {
    color: '#fff',
    fontSize: 18,
  },
  listHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: theme.width * 0.75,
    alignSelf: 'center',
    marginVertical: theme.height * 0.05,
  },
  listHeading: {
    fontSize: 30,
    color: '#fff',
  },
});
