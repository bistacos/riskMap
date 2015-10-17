/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = React;

var riskMap = React.createClass({
  getInitialState: function() {
    return { };
  },
  render: function() {
    return (
      <View style={styles.view}>
          <Text style={styles.welcome}>
            Welcome to RiskMap!
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <ScrollView styles={styles.scrollView}>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <Text>1/4</Text>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <Text>Halfway down!</Text>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <Text>3/4</Text>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <TestComponent></TestComponent>
            <Text>Heres the bottom</Text>
          </ScrollView>
        </View>
    );
  },
});

var TestComponent = React.createClass({
  render: function() {
    return (
      <View>
        <Text>Some placeholder text not wrapped in view</Text>
        <Text>Some placeholder text not wrapped in view</Text>
        <Text>Some placeholder text not wrapped in view</Text>
        <Text>Some placeholder text not wrapped in view</Text>
        <Text>Some placeholder text not wrapped in view</Text>
        <Text>Some placeholder text not wrapped in view</Text>
        <Text>Some placeholder text not wrapped in view</Text>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  scrollView: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  view: {
    flex: 1,
    padding: 20,
  },
});

AppRegistry.registerComponent('riskMap', () => riskMap);
