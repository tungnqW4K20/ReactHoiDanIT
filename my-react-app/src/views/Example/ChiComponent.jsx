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

    let {name, age, adress, arrJob } = this.props
    return (
      <div>
          {/* child component name : {name}     
          child component age : {age}
          child component adres : {adress} */}
          <h1> Job list</h1>
          {
            arrJob.map((item, index) => {
                return (
                    <div key = {item.id}>
                        {item.title} - {item.salary}
                    </div>
                )
            })
          }

      </div>
    );
  }
}

export default ChiComponent;
