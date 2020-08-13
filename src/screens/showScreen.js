import React, {useContext} from 'react'
import {View ,StyleSheet, Text} from 'react-native'
import { Context } from '../context/BlogContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EvilIcons } from '@expo/vector-icons';

const showScreen=({navigation})=>{
    //console.log(navigation.getParam('id'))
    const {state}=useContext(Context);
    const blogPost=state.find(blogPost => blogPost.id===navigation.getParam('id')) 
    return <View>
    <Text>{blogPost.title}</Text>
    <Text>{blogPost.content}</Text></View> 
}
showScreen.navigationOptions=({navigation})=>{
    return {headerRight: <TouchableOpacity onPress={()=>{navigation.navigate('Edit',{id:navigation.getParam('id')})}}><EvilIcons name="pencil" size={35}/></TouchableOpacity>}
}
const styles=StyleSheet.create({})
export default showScreen;