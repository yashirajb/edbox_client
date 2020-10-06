import React, {Component} from 'react';
import About from './About/About';
// import Favorites from './Favorites/Favorites';
// import EdBoxList from '../EdBoxContainer/EdBoxList/EdBoxList';
// import NewBox from '../EdBoxContainer/NewBox.jsx/NewBox';



class Sidebar extends Component {
    constructor(){
        super();
        this.state = {
            favorites: []

        }
    }

    render(){
        return(
            <div className='sideBarContainer'>
                <About />
                {/* <Favorites /> */}
                {/* <EdBoxList /> */}
                {/* <NewBox /> */}
            </div>
        )
    }
}

export default Sidebar;