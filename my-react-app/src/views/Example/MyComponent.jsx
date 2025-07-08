import React from "react";

class MyComponent extends React.Component{

    state = {
        name : '',
        channle : ''
    }

    HandleOnChangename = (event) =>{
        console.log(event.target.value, 'event target: ',event.target, 'event object',event)
        this.setState({
            name : event.target.value,
        })
    }

    HandleOnChangeChannel = (event) =>{
        this.setState({
            channle : event.target.value
        })
    }

    HandleOnClick = () => {
        alert("trẫm vừa ấn xoá xong!");
        this.setState({
            name : '',
            channle : ''
        })
    }

    render(){
        console.log("call render: ",this.state)
        return (
            <React.Fragment>
                <div className="first"> 
                    <input type="text" value = {this.state.name}
                        onChange={(event) => this.HandleOnChangename(event)}
                     />
                     My name is {this.state.name}
                     {console.log('My name is: ',this.state.name)}
                     
                </div>
                <div>
                    <input type="text" value = {this.state.channle}
                        onChange={(event) => this.HandleOnChangeChannel(event)}
                     />
                    My youtube channle : {this.state.channle}
                </div>

                <div className="third">
                    <button onClick={() => this.HandleOnClick()}>
                        Click to delete
                    </button>

                </div>
            
            </React.Fragment>
        ) 
    }
}

export default MyComponent;
