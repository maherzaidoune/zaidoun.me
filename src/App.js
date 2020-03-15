import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native-web';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Color from './utils/Color';
import Header from './component/Header';
import Actions from './component/Actions';
import Me from './component/Me';
import AppReducer from './redux/reducers';
import Footer from './component/Footer';

const store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));

class Home extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: '40vw', alignItems: 'center'}}>
          <Header />
          <Actions />
          <Me />
        </View>
        <Footer />
      </View>
    )
  }
}

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.main,
    padding: 20,
    height: "100vh",
    alignItems: 'center'
  },
  header: {
    flex: 0,
    backgroundColor: Color.main,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    color: Color.white,
    padding: 15,
    backgroundColor: Color.primary,
    fontSize: 26,
    fontWeight: '600'
  },
  calltoaction: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '500',
    padding: 12
  },
  infotext: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center'
  },
  info: {
    flexGrow: 1,
    backgroundColor: Color.main,
    padding: 10
  }
});

export default App;
