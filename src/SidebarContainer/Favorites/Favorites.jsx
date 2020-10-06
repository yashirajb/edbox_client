import React, {Component} from 'react';
// import SeeMyFavorites from './Favorites/SeeMyFavorites';


class Favorites extends Component{
    constructor(){
        super();
        // stateful logic
        this.state = {
            favBoxes: []
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    // Lifecycle method where we do a fetch request 
    componentDidMount(){
        this.favoriteBoxes();
    }
    // This is an AJAX call so we'll use the async keyword, you'll need to figure out where your rails server is running. You may need to check the puma file in the config folder
   favoriteBoxes = async () => {
        const favBoxes = await fetch("http://localhost:3001/boxes");
        const parsedResponse = await favBoxes.json()
        console.log(parsedResponse);
        this.setState({
            favBoxes: parsedResponse
        })
    // handleClick = () => {
    //     console.log("Clicked the button")
    //     this.setState({

    //     })
    }

    render(){
        return(

            <div> 
                <h2>This is the Favorites Component and will display all the users favorited boxes</h2>
                {/* <button onClick={this.handleClick}></button> */}
                {/* <SeeMyFavorites /> */}
            </div>
        )

    }

}

export default Favorites;