import React, {Component} from 'react'

class Register extends Component {
    constructor(){
        super();
        this.state = {
            username: null,
            password: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })

        console.log(this.state)
    }

        handleSubmit =(e) => {
            e.preventDefault();
            console.log("registration form submitted")
            this.props.handleRegister(this.state)
        }

    render(){
        console.log("Register form working")
        return(
            <form>
                Username: <input type="text" name="username" onChange={this.handleChange}/>
                <br></br>
                Password: <input type="password" name="password" onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <input type="submit" value="Register Here"/>
            </form>
        )
    }
} 

export default Register;

