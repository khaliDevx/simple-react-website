import React, {Component} from "react"
import axios from "axios"

class Blog extends Component{
    state ={
        users: []
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            this.setState({
                users: res.data
            })
        })
    }
    render(){
        const users = this.state.users
        const usersList = users.map(user => {
            return(
                <div key={user.id}>
                    <div className="content">
                        <div>Name: {user.name}</div>
                        <div>Username: {user.username}</div>
                    </div>
                </div>
            )
        })
        return(
            <div>
                <h1>Blog</h1>
                <h2>Users:</h2>
                <div>
                    {usersList}
                </div>
            </div>
        )
    }
}
export default Blog