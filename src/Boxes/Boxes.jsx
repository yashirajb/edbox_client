import React, {Component} from 'react';
import NewBox from '../EdBoxContainer/NewBox/NewBox';
import EdBoxList from '../EdBoxContainer/EdBoxList/EdBoxList';
import EdBoxCard from '../MainContainer/EdBoxCard/EdBoxCard';
import MainContainer from '../MainContainer/MainContainer';
import EditEdBox from '../EdBoxContainer/EdBoxList/EditEdBox/EditEdBox';


class Boxes extends Component {
    constructor(){
        super();
        this.state = {
      //initialize state with an array of boxes that is empty, otherwise we'll get cannot read property of map undefined error. We want to map over all the boxes in the database,
    //   and if it's not an array when the page loads it will give an error
            boxes: []
        }
    }
    // Lifecycle method where we do a fetch request 
    componentDidMount(){
        console.log("component is mounting")
        this.getBoxes();
    }
// ******************************** Create Route **********************************
    createBox = async (formData) => {
        console.log(formData, 'data is getting through')
        try{
            const newBox = await fetch(process.env.REACT_APP_API_URL, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const parsedResponse = await newBox.json();
            // if(parsedResponse.status.code === 201){
                this.setState({
                    boxes: [parsedResponse, ...this.state.boxes]
                    // boxes: [parsedResponse, this.state.boxes]
                })
            // }
        }catch(err){

        }
    }

    // ******************************* Read Route *************************************************
    // This is an AJAX call so we'll use the async keyword, you'll need to figure out where your rails server is running. You may need to check the puma file in the config folder
    getBoxes = async () => {
        const boxes = await fetch(`${process.env.REACT_APP_API_URL}`);
        const parsedResponse = await boxes.json()
        console.log(parsedResponse);
        this.setState({
            boxes: parsedResponse
        })
    }
    // render(){
    //     const boxes = this.state.boxes.map((box)=>{
    //         return <div key={box.id}>
    //             {/* <h3>This box is for students in Grade {box.grade}, but can also be used for students reading at a {box.reading_level} reading level</h3>
    //             <p>This box has been curated for the above students whose literacy development falls within a certain range and should be used by the teacher to {box.description}</p>
    //             <p>Your student's box contains the following: {box.contents}</p> */}
    //             <p>
    //                 <h1>{box.grade} Grade, Level {box.reading_level}</h1>
    //                 <h3>{box.description}</h3>
    //                 <h4>{box.contents}</h4>
    //             </p>
    //         </div>
    //     })
    //     return(
    //         <div>
    //             <h2>This is the boxes component</h2>
    //             {boxes}
    //         </div>
    //     )
    // }

// ***************************************** Update route *************************************
// Need the updated info of each box that's changed
    updateBox = async (id, formData) => {
        try{
            const updatedBox = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                // credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const parsedResponse = await updatedBox.json();
            console.log(parsedResponse, "updateBox fetch is working")
            // if(parsedResponse.status.code === 201){
                this.setState({
                    boxes: this.state.boxes.map(function(box){
                        if(box.id !== id){
                            return box
                        }else{
                            return parsedResponse
                        }
                    })
                })
            //     return true;
            // }else{
            //     return false;
            // }
        }catch(err){
            console.log(err)
            return false;
        }
    }
    //                 boxes: this.state.boxes.map(boxes => boxes.id ===id?
    //                     parsedResponse: boxes)
    //                     })
    //                 console.log("boxes", this.state.boxes.id) 
    //     }catch(err){
    //         console.log(err)
    //     }
    // }

// **************************************** Delete Route ********************************************
    deleteBox = async (id) => {
        console.log(id)

        try{
            const deleteBox = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, {
                method: "DELETE",
            })
            // const parsedResponse = await deleteBox.json()
            // if(parsedResponse.status.code === 200){
                this.setState({
                    boxes: this.state.boxes.filter(box => box.id !== id)
                })
            }catch(err){
            console.log(err)
        }
    }

    // ********************************************************************************
        render(){
            return(
                <div>
                   
                    {/* <div className="boxContainer">
                    <EdBoxList boxes={this.state.boxes}/>
                    </div> */}
                  {/* <NewBox />
                  <EdBoxList /> */}
                  {/* <MainContainer boxes={this.state.boxes} updateBox={this.state.updateBox} deleteBox={this.state.deleteBox}/> */}
                  {/* <MainContainer boxes={this.state.boxes} updateBox={this.updateBox}/> */}
                  <MainContainer boxes={this.state.boxes} updateBox={this.updateBox} deleteBox={this.deleteBox} />
                  <br></br>
                  <br></br>
                  <div className="customBox">Can't find a suitable box? Customize your own here:</div>
                  <br></br>
                  <br></br>
                  <NewBox createBox={this.createBox}/>
                <br></br>
                <br></br>
                </div>
            )
        }
}

export default Boxes;