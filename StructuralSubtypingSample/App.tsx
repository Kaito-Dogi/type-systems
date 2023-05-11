import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {mockHomeScreenUiModel} from 'src/mock/mockHomeScreenUiModels';
import {HomeScreen} from 'src/screen/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen uiModels={mockHomeScreenUiModel} />
    </SafeAreaView>
  );
};

export default App;
