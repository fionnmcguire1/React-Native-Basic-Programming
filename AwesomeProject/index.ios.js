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
//URL for requesting JSON objects to populate the app view
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
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
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
          </View>
        </View>
      );
    //Note: like html the style goes within the tag, obviously
  }

}
//creating new styles with various classes of style to be applied above
/*
*Stylesheet properties
* flex --> appears to be a relative size multiplier and only works in combination with others
*      --> flex: 3 is three times the size of flex:1
* flexDirection --> appears to be how things are laid out on the app
*               --> | column |
*               --> | column | 
*               --> | column | 
*               --> |  row   |  row   |  row   |
* alignItems --> determines alignment of children on a secondary axis. If primary axis is 
             --> row then secondary axis is column
* justifyContent --> determines the distribution of conmponents
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 53,
    height: 81,
  }
});

//Deploying the project
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
