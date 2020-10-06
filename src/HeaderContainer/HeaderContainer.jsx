import React, {Component} from 'react';
import Register from './AuthGateway/Register/Register';
import Login from './AuthGateway/Login/Login';
import UserInfo from './UserInfo/UserInfo'
import Search from './Search/Search'
import AuthGateway from './AuthGateway/AuthGateway';
import Header from './Header/Header';


class HeaderContainer extends Component{
//          constructor(){
//             super();
//             this.state = {
//             loggedIn: false,
//             username: null
//    }

// }

// handleLogin = (recieveFormData) => {
//     console.log(recieveFormData)
//     this.setState({
//       loggedIn: true,
//       username: recieveFormData.username
//     })
//   }
     render(){

        return(
            <div>
                {/* <Search />
                <UserInfo /> */}
                {/* <AuthGateway handleLogin={this.handleLogin} handleRegister={this.handleRegister} /> */}
                {/* <Login handleLogin={this.handleLogin}/>
                <Register handleRegister={this.handleRegister} /> */}
               <Header />
            </div>
        );
    }
}

export default HeaderContainer;