import React,{useState} from 'react'
import {Text,TextInput,Button,View,StyleSheet} from 'react-native'


const BlogPostForm =({onSubmit,initialValues})=>{
    const [title,setTitle]=useState(initialValues.title)
    const [content,setContent]=useState(initialValues.content)
    // try{
    //     setTitle(initialValues.title)
    //     setContent(initialValues.content)
    // }
    // catch(e){
        
    // }
    return <View>
    <Text style={styles.label}>Enter Title: </Text>
    <TextInput style={styles.input} value={title} onChangeText={(text)=>{setTitle(text)}}/>
    <Text style={styles.label} >Enter Content: </Text>
    <TextInput style={styles.input} value={content} onChangeText={(content)=>{setContent(content)}} />
    <Button title="Save Blog Post"
    onPress={()=>{ onSubmit(title,content)
    }} />    
 </View>   
}
BlogPostForm.defaultProps={
    initialValues:{
        title:"",
        content:"",
    }
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
});

export default BlogPostForm;