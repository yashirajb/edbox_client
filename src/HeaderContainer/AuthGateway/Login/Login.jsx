import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: null
        }
    }
    handleChange = (e) => {
        this.setState({
            // e.target represents the input
            // name corresponds with the thing we are changing in the form
            // Need to use variable name as key name? Use bracket notation
            [e.target.name] : e.target.value
        })

        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.username);
        this.props.handleLogin(this.state)
    }

    render(){
        console.log("Login form working")
        return(
            <div className='loginContainer'>
                <form onSubmit= {this.handleSubmit}>
                username: <input type="text" name="username" onChange={this.handleChange}/>
                password: <input type="password" name="password" onChange={this.handleChange}/>
                <input type="submit" value="Login Here"/>
            </form>
            </div>
        )
    }

}

export default Login; 