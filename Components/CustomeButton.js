import React, { Component } from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
const CustomButton = (props)=>{
        return (
            <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}} >
                <Button title ="Home"
                onPress={()=>props.whtsonsaleClick()}
                />
            </View>
            <View style={{flex:1}} >
                <Button title ="History"
                onPress={()=>props.historyClick()}
                />
            </View>
            <View style={{flex:1}} >
                <Button title ="My Profile"
                onPress={()=>props.myProfileClick()}
                />
            </View>
        </View>
        );
}
export default CustomButton;