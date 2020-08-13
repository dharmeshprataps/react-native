import React,{useState,useContext} from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen=({navigation})=>{
    //console.log(navigation.getParam('id'));

    const {state,editBlogPost}=useContext(Context);
    const blogPost =state.find((blogPost)=> blogPost.id===navigation.getParam('id'))
    // const [title,setTitle]=useState(blogPost.title)
    // const [content,setContent]=useState(blogPost.content)
    // return <View>

    //     <Text> Edit title</Text>
    //     <TextInput value={title} on onChangeText={(newTitle)=>{setTitle(newTitle)}}/>
    // </View>

    return <BlogPostForm initialValues={{title:blogPost.title, content:blogPost.content}} onSubmit={(title,content)=>{editBlogPost(title,content,navigation.getParam('id'),()=>{navigation.pop()})}}/>
}


const styles=StyleSheet.create({});

export default EditScreen;