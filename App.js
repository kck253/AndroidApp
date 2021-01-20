/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import Video from 'react-native-video';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    opacity: 0,
    opacity1:0,
    opacity2:0
    };
}

 onLoadStart = () => {
    this.setState({opacity: 1});
}

onLoad = () => {
    this.setState({opacity: 0});
}

onBuffer = ({isBuffering}) => {
    this.setState({opacity: isBuffering ? 1 : 0});
}

onLoadStart1 = () => {
  this.setState({opacity1: 1});
}

onLoad1 = () => {
  this.setState({opacity1: 0});
}

onBuffer1 = ({isBuffering}) => {
  this.setState({opacity1: isBuffering ? 1 : 0});
}

onLoadStart2 = () => {
  this.setState({opacity2: 1});
}

onLoad2 = () => {
  this.setState({opacity2: 0});
}

onBuffer2 = ({isBuffering}) => {
  this.setState({opacity2: isBuffering ? 1 : 0});
}
  render(){
    return(
      
      <View style={{width:"100%",height:"100%",backgroundColor:"white"}}>
        <View style={{height:"8%",alignItems:"center",backgroundColor:"aliceblue",justifyContent:"center",borderBottomWidth:0.2,borderRadius:5}}>
          <Text style={{fontSize:21,fontWeight:"bold",color:"purple"}} >VIDEOS</Text>
        </View>
        <ScrollView>
          <View>
            <View style={{height:200,marginTop:"5%",padding:20,justifyContent:"center"}}>
              <Video source={{uri: "https://content.jwplatform.com/manifests/yp34SRmf.m3u8"}}         
                    onBuffer={this.onBuffer}          
                    onLoadStart={this.onLoadStart}
                    onLoad={this.onLoad}         
                    style={styles.backgroundVideo} />
            <ActivityIndicator
                animating
                size="large"
                color={"white"}
                style={[styles.activityIndicator, {opacity: this.state.opacity}]}
            />    
            </View>
          
            <View style={{height:200,marginTop:"5%",padding:20,}}>
              <Video source={{uri: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"}}
                    onBuffer={this.onBuffer1}           
                    onLoadStart={this.onLoadStart1}
                    onLoad={this.onLoad1}               
                    style={styles.backgroundVideo} />
              <ActivityIndicator
                animating
                size="large"
                color={"white"}
                style={[styles.activityIndicator, {opacity: this.state.opacity1}]}
            /> 
              
            </View>
            <View style={{height:200,marginTop:"5%",padding:20,marginBottom:"5%"}}>
              <Video source={{uri: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"}}
                      onBuffer={this.onBuffer2}         
                      onLoadStart={this.onLoadStart2}
                      onLoad={this.onLoad2}         
                    style={styles.backgroundVideo} />
            <ActivityIndicator
                animating
                size="large"
                color={"white"}
                style={[styles.activityIndicator, {opacity: this.state.opacity2}]}
              />     
          
            </View>
          
          </View>
        </ScrollView>
        <View style={{height:"8%",alignItems:"center",flexDirection:"row",backgroundColor:"aliceblue",justifyContent:"center",borderTopWidth:0.15,borderRadius:5}}>
          <Text style={{fontSize:21,fontWeight:"bold",color:"purple"}} >VIDEOS</Text>
        </View>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
activityIndicator: {
    position: 'absolute',
    top: 70,
    left: 70,
    right: 70,
    height: 50,
},
});