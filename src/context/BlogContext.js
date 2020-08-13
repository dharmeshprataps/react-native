import CreateDataContext from'./CreateDataContex'
import jsonServer from './../api/jsonServer'
const blogReducer=(state,action)=>{
    switch(action.type){
        case 'get_blogPosts':
            return action.payload
        case 'delete_blogPost':
            return state.filter((blogPost)=>blogPost.id !== action.payload)
        case 'add_blogPost':
            return [...state,{
                id: Math.floor(Math.random()*99999), 
                title: action.payload.title,
                content: action.payload.content
                }
            ]
        case 'edit_blogPost':
            return state.map(blogPost=>{
                return blogPost.id===action.payload.id 
                ? action.payload 
                : blogPost;
            })
        default:
            return state
    }
}
const getBlogPost=dispatch=>{
    return async ()=>{
        const response=await jsonServer.get('/blogPost')
        dispatch({type:'get_blogPosts',payload:response.data})
    }
} 
const addBlogPost=dispatch=>{
    return async(title,content,callBack)=>{
        await jsonServer.post('/blogPost',{title,content})
        //dispatch({type:"add_blogPost", payload:{title,content}});
        callBack();
    }
}
const deleteBlogPost=(dispatch)=>{
    return async(id)=>{ 
        await jsonServer.delete(`/blogPost/${id}`)
        dispatch({type: "delete_blogPost", payload:id})
    }
}
const editBlogPost=(dispatch)=>{
    return async(title,content,id,callBack)=>{
        await jsonServer.put(`/blogPost/${id}`,{title,content})
        dispatch({type:'edit_blogPost',payload:{id,title,content}});callBack();
    }
}
// export const BlogProvider=({children})=>{
//     const [blogPost,setBlogPost]=useState([]);
//     const addBlogPost=()=>{
//         setBlogPost([...blogPost, {title:`Blog Post #${blogPost.length+1}`}])
//     }
//     return <BlogContext.Provider value={{data:blogPost,addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
//     const addBlogPost=()=>{
//         dispatch({type:"add_blogPost"})
//     }
//     const[blogPost,dispatch]=useReducer(blogReducer,[])
//     return <BlogContext.Provider value={{data:blogPost,addBlogPost}}>
//         {children}
//     </BlogContext.Provider>
// }

export const {Context,Provider}=CreateDataContext(blogReducer,
    {addBlogPost,deleteBlogPost,editBlogPost,getBlogPost},
    [{title: 'TEST POST',content:'TEST CONTENT',id:1}])