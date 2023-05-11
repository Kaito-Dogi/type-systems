import React from 'react';
import {SafeAreaView} from 'react-native';

import {HomeScreen} from './src/screen/home/HomeScreen';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
