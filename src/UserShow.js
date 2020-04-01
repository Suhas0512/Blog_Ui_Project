import React from "react"
import Axios from "axios"
import {Link} from "react-router-dom"

class UserShow extends React.Component{
    constructor(props){
        super()
        this.state={
            users:{},
            posts:[]
        }
    }
    componentDidMount=()=>{
        const id=this.props.match.params.id
        Axios.all([
            Axios.get(`http://jsonplaceholder.typicode.com/users/${id}`),
            Axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        ]).then(responseArr=>{
            const users=responseArr[0].data
            const posts=responseArr[1].data
            this.setState({users,posts})
        })
    }
    render(){
        return(
            <div style={{border:"2px solid black"}}>
                <h2>User Name:{this.state.users.name}</h2>
                <h2>Posts Written By The User</h2>
                {this.state.posts.map(ele=>{
                    return(
                    <dt key={ele.id}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></dt>
                    )
                })}
                
            </div>
        )
    }
}
export default UserShow