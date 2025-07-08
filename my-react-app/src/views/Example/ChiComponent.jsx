import React from "react";

class ChiComponent extends React.Component {
state = {
    firstname: '',
    lastname: ''
}

HandleOnChangeFirstname = (event) =>{
    this.setState({
        firstname : event.target.value
    })
}

HandleOnChangeLastname = (event) =>{
    this.setState({
        lastname : event.target.value
    })
}

HandleOnClick = (event) =>{
    event.preventDefault();
    alert("đã submit thành công!")
    console.log("Check data input", this.state)
    this.setState({
        firstname : '',
        lastname :''
    })
}

  render() {
    console.log("check props", this.props) 

    let {name, age } = this.props
    return (
      <div>
          child component name : {name}   
          child component age : {age}
      </div>
    );
  }
}

export default ChiComponent;
