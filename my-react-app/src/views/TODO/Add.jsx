import React from "react";

class Add extends React.Component{

state = {
       title: '' 
  };

  HanleOnChangeTitle = (event) => {
    this.setState({
        title : event.target.value
    })
  }

  HandleAdd = (event) => {
    event.preventDefault();
    if (!this.state.title){
        alert("điền đi đã bé yêu !")
        return;
    }
    this.props.addNewJob({
        id : Math.floor(Math.random() * 1000),
        title : this.state.title
    })
    this.setState({
        title : '' 
    })

  }

    render() {
        
        return(
            <div className="flex gap-2 mb-6">
                <input
                type="text"
                placeholder="Add new todo"
                className="flex-grow px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value = {this.state.title}
                onChange={(event) => {this.HanleOnChangeTitle(event)}}
                />
                <button
                type="button"
                className="px-4 py-2 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition"
                onClick={(event) => {this.HandleAdd(event)}}
                >
                Add
                </button>
            </div>
        )
    }
}


export default Add;