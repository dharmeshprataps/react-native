import React ,{useContext,useEffect} from'react'
import {View,StyleSheet,Button,FlatList,Text} from 'react-native'
import {Context} from '../context/BlogContext'
import {Foundation,Feather} from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
const IndexScreen=({navigation})=>{
    const {state,addBlogPost,deleteBlogPost,getBlogPost}=useContext(Context)
    useEffect(()=>{
        getBlogPost()
        const listener=navigation.addListener('didFocus',()=>{
            getBlogPost();
        })
        return ()=>{
            listener.remove();
        }
    },[])
    return<View style={styles.view}>
        <FlatList 
            keyExtractor ={(post)=>{
                return post.id.toString()
            }}
            data={state}
            renderItem={({item})=>{
                return <View style={styles.text2} >
                    <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id})}}><Text >{item.title}</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{deleteBlogPost(item.id)}} ><Feather style={styles.icon} name="trash"/></TouchableOpacity>
                </View>
            }}
        />
    </View>
}
IndexScreen.navigationOptions=({navigation})=>{
    return {
        headerRight: <TouchableOpacity onPress={()=>{navigation.navigate('Create')}}><Feather name="plus" style={{marginRight:15}} size={30}/></TouchableOpacity>
    }
}
const styles=StyleSheet.create({
    view:{
        paddingHorizontal: 10,
        justifyContent: "space-around"
    },
    icon1:{
        justifyContent:'space-evenly',
        alignContent:"center",
        fontSize:35
    },
    icon:{
        justifyContent:'space-around',
        alignContent:"center",
        fontSize:35
    },
    text1:{
        margin: 15,
        fontSize: 18,
        padding: 5,
        borderWidth: 3,
        backgroundColor: "grey"
    },
    text2: {
        margin: 15,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        backgroundColor : "grey",
        flexDirection: 'row',
        justifyContent: "space-between"

    }
})

export default IndexScreen;