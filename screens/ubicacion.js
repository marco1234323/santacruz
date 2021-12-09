import React,{Component} from 'react'
import {View,Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Welcome extends Component{
    render(){
        return <View>
            
            <Ionicons name={'ios-add'} size={26} style={{color:'#f00'}}/>
            
        </View>
    }
}

