import React, {Component} from 'react';
import './App.css';
import Boxes from './Boxes/Boxes';
// import Sidebar from './SidebarContainer/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './HeaderContainer/HeaderContainer';
import MainContainer from './MainContainer/MainContainer'
import Sidebar from './SidebarContainer/Sidebar';
import FooterContainer from './FooterContainer/FooterContainer';


class App extends Component {
          constructor(){
            super();
       }

      render(){
        return (
          <div>
            <HeaderContainer />
            <Sidebar />
            <Boxes />
            {/* <MainContainer /> */} 
            <FooterContainer />   
          </div>


        )
 
  }
}

export default App;
