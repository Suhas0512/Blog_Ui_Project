import React from "react"
import Axios from "axios"
import {Link} from "react-router-dom"

class Posts extends React.Component{
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            const posts=response.data
            this.setState({posts})
        })
    }
    render(){
        return(
        <div style={{border:"2px solid black",width:"800px"}}>
            <h2>Listing Posts - {this.state.posts.length}</h2>
            {this.state.posts.map(ele=>{
                return(
            <dt key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></dt>
                )
            })}
        </div>)
    }
}

export default Posts