import React, {useContext,useState} from 'react'
import {View ,StyleSheet,TextInput, Text,Button, Dimensions} from 'react-native'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm'
const WIDTH = Dimensions.get('window').width

const createScreen=({navigation})=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    const {addBlogPost}=useContext(Context)

    return <BlogPostForm onSubmit={(title,content)=>{return addBlogPost(title,content,()=>{navigation.navigate('Index')})}}/>
//     return <View>
//     <Text style={styles.label}>Enter Title: </Text>
//     <TextInput style={styles.input} value={title} onChangeText={(text)=>{setTitle(text)}}/>
//     <Text style={styles.label} >Enter Content: </Text>
//     <TextInput style={styles.input} value={content} onChangeText={(content)=>{setContent(content)}} />
//     <Button title="Add Blog Post"
//     onPress={()=>{
//         {
//             addBlogPost(title,content,()=>{
//                 navigation.navigate('Index');
//             });
//             //navigation.navigate('Index');
//         }
//     }} />    
//  </View>  
    
}
const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        margin:7,
        borderRadius:5
    },
    label:{
        margin: 5,
        fontSize:20,
        marginBottom:10
    }
})
export default createScreen;