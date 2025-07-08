import React from "react";

class AddComponent extends React.Component{

state ={
    title: '',
    salary:''
}

HandleOnChangetitle = (event) =>{
    this.setState({
        title : event.target.value
    })
}

HandleOnChangesalary = (event) =>{
    this.setState({
        salary : event.target.value
    })
}

HandleOnClick = (event) =>{
    event.preventDefault();
    if (!this.state.title || !this.state.title )
    {
        alert("Missing require params!")
        return;
    }
    console.log("Check data input", this.state)
    this.props.Addnewjob({
        id: Math.floor(Math.random() * 1001),
        title : this.state.title,
        salary : this.state.salary
    });
    this.setState({
        title : '',
        salary : ''
    })
}


    render() {
        return(
            <React.Fragment>
                <form>
                <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                    Job title
                </label>
                <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    value ={this.state.title}
                    onChange={(event) => this.HandleOnChangetitle(event)}
                />
                </div>

                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                    Salary
                </label>
                <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                    value ={this.state.salary}
                    onChange={(event) => this.HandleOnChangesalary(event)}
                />
                </div>

                <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold shadow-md hover:from-indigo-600 hover:to-blue-600 transition"
                onClick={(event) => this.HandleOnClick(event)}
                >
                Submit
                </button>
            </form>


            </React.Fragment>
               
            

        )
    }
}

export default AddComponent