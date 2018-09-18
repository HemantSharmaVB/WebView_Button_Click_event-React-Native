import React, { Component } from 'react'
import { View, StyleSheet, WebView, Text, Platform, ActivityIndicator} from 'react-native'
import CustomButton  from './Components/CustomeButton';
export default class App extends Component {
constructor(){
  super()
  this.state={
    linkqna:'https://www.youtube.com/'
  }}
addProduct=()=>{
  this.state.linkqna='https://www.youtube.com/'
  this.setState({'linkqna':this.state.linkqna+''})
 
}
historyMethod=()=>{
  this.state.linkqna='https://www.youtube.com/'
  this.setState({'linkqna':this.state.linkqna+'/feed/history'})
}

myProfileMethod=()=>{
  this.state.linkqna='https://www.youtube.com'
  this.setState({'linkqna':this.state.linkqna+'/signin'})
}
  ActivityIndicatorLoadingView() {
    return (
      <ActivityIndicator
        color='#009688'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
       <WebView
        source={{ uri:this.state.linkqna }}
         style={styles.WebViewStyle}
         javaScriptEnabled={true}
         domStorageEnabled={true}
         renderLoading={this.ActivityIndicatorLoadingView} 
         startInLoadingState={true}
         />
      </View>
      <View>
       <CustomButton whtsonsaleClick={this.addProduct} historyClick={this.historyMethod} myProfileClick={this.myProfileMethod}/>
       </View>
      </View>
    )
  }
}
const styles = StyleSheet.create(
{
 
WebViewStyle:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
},
 
ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  
}
});