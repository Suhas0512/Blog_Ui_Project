import React from "react"
import Axios from "axios"
import {Link} from "react-router-dom"

class PostShow extends React.Component{
    constructor(props){
        super()
        this.state={
            users:{},
            posts:[],
            comments:[]
        }
    }
    componentDidMount=()=>{
        const id=this.props.match.params.id
        Axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
        .then(response=>{
            const posts=response.data
            this.setState({posts})
            const userId=posts[0].userId
            Axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response=>{
                const users=response.data
                this.setState({users})
            })
        })
        Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response=>{
            const comments=response.data
            this.setState({comments})
        })
    }
    render(){
        return(
            <div style={{border:"2px solid black"}}>
                <h2>USER NAME:{this.state.users.name}</h2>
                {this.state.posts.map(ele=>{
                    return(
                        <div key={ele.id}>
                            <h2>TITLE:{ele.title}</h2>
                            <h3>BODY:<br/>{ele.body}</h3>
                        </div>
                    )
                })}<hr/>
                <h2>Comments</h2>
                {this.state.comments.map(ele=>{
                    return(
                    <dt key={ele.id}>{ele.body}</dt>
                    )
                })}<hr></hr>
                <Link to={`/users/${this.state.users.id}`}>More about author:{this.state.users.name}</Link>
            </div>
        )
    }
}
export default PostShow