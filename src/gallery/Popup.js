import React, {Component} from "react";
import "../css/images.css"


class App extends Component {
  //componentDidMount and componentWillUnmount are used to disable scrolling when the modal is open
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
  }
    render() {

    return (
      
        <div className = "popupParent">
          <div className = "popupImage">
            {/* <button 
            className="imageClosingButton"
            onClick = {this.props.closePopup}
            >
            X
            </button> */}
            <img src = {this.props.popImageUrl} style={{width:"130%", height:"auto"}} onClick = {this.props.closePopup}/>
            <h5 style = {{color:"white", fontWeight:"lighter",marginLeft:"40%"}}>* Click on the image to exit</h5>
                
                
          </div>
        </div>
    );
  }
}
export default App;