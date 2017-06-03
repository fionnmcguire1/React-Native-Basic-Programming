/* Testing new code on tutorial found here
* https://www.decoide.org/docs/react-native/tutorial.html 
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
//creating pretend data to be displayed on the screen, note that because i'm using an image
//I had to import the image comonent in the react-native list above
var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'https://i.imgur.com/UePbdph.jpg'}},
];
//creting a class with a series of text components with styles applied which are defined below
export default class AwesomeProject extends Component {
  render() {
    /*
    * Assigning global array element to local class variable
    * Some sources say you must have https as the uri but style must
    * be applied to the thumnail for it to appear
    */
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Fionn's React Native Tutorial!
        </Text>

        <Text>{movie.title}</Text>
        <Text>{movie.year}</Text>
        <Image source={{uri: movie.posters.thumbnail}} 
          style={styles.thumbnail}/>
      </View>
    );
  }
}
//creating new styles with various classes of style to be applied above
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
  thumbnail: {
    width: 53,
    height: 81,
  }
});

/*
        //Code removed on line 26
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        
*/

//Deploying the project
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
