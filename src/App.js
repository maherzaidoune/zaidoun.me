import React, { PureComponent } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native-web';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Color from './utils/Color';
import Header from './component/Header';
import Actions from './component/Actions';
import AppReducer from './redux/reducers';
import Footer from './component/Footer';
import { Pages } from './navigation/Pages';
import { Navigator } from './navigation/Navigator';

const store = createStore(AppReducer, {}, applyMiddleware(ReduxThunk));

class Home extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      page: Pages.Main
    }
  }

  updateRoute = (page) => {
    this.setState({
      page
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Header />
            <Actions updateRoute={this.updateRoute} />
            {Navigator(this.state.page)}
          </View>
        </ScrollView>
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
    padding: 15,
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
