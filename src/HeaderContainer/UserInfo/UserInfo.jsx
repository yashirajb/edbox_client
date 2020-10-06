import React, {Component} from 'react';

class Users extends Component {
    constructor(){
        super();
        this.state = {
      //initialize state with an array of Users that is empty, otherwise we'll get cannot read property of map undefined error. We want to map over all the Users in the database,
    //   and if it's not an array when the page loads it will give an error
            users: []
        }
    }
    // Lifecycle method where we do a fetch request 
    componentDidMount(){
        this.getUsers();
    }
    // This is an AJAX call so we'll use the async keyword, you'll need to figure out where your rails server is running. You may need to check the puma file in the config folder
    getUsers = async () => {
        const users = await fetch("http://localhost:3001/users");
        const parsedResponse = await users.json()
        console.log(parsedResponse);
        this.setState({
            users: parsedResponse
        })
    }
    render(){
        const users = this.state.users.map((user)=>{
            return <div key={user.id}>
                {/* <h3>This user is for students in Grade {user.grade}, but can also be used for students reading at a {user.reading_level} reading level</h3>
                <p>This user has been curated for the above students whose literacy development falls within a certain range and should be used by the teacher to {user.description}</p>
                <p>Your student's user contains the following: {user.contents}</p> */}
                <p>
                    <h1>{user.grade} Grade, Level {user.reading_level}</h1>
                    <h3>{user.description}</h3>
                    <h4>{user.contents}</h4>
                </p>
            </div>
        })
        return(
            <div>
                <h2>This is the users component</h2>
                {users}
            </div>
        )
    }


}

export default Users;