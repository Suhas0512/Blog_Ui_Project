import React from "react"
import {Link} from "react-router-dom"
import Axios from "axios"

class Users extends React.Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            this.setState({users})
        })
    }
    render(){
        return(
        <div style={{border:"2px solid ", alignItens:"center", width:"400px"}}>
            <h2>Listing Users - {this.state.users.length}</h2>
            {this.state.users.map(ele=>{
                return(
                    <dt key={ele.id}><Link to={`/users/${ele.id}`}>{ele.name}</Link></dt>
                )
            })}
        </div>)
    }
}
export default Users

