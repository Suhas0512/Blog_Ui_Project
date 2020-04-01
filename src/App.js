import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom"
import Home from "./Home"
import Users from "./Users"
import UserShow from "./UserShow"
import Posts from "./Posts"
import PostShow from "./PostShow"

function App() {
  return (
    <BrowserRouter>
      <div align="center" style={{backgroundColor:"pink"}}>
        <Link to="/">Home</Link>||
        <Link to="/users">Users</Link>||
        <Link to="/posts">posts</Link>

        <Route path ="/" component={Home} exact={true}/>
        <Route path ="/users" component={Users} exact={true}/>
        <Route path="/users/:id" component={UserShow}/>
        <Route path ="/posts" component={Posts} exact={true}/>
        <Route path ="/posts/:id" component={PostShow}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
