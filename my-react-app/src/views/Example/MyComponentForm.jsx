import React from "react";
import ChiComponent from "./ChiComponent";

class MyComponentFrom extends React.Component {
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
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Welcome!
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Please fill in the form below
          </p>

          <form>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                value ={this.state.firstname}
                onChange={(event) => this.HandleOnChangeFirstname(event)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                value ={this.state.lastname}
                onChange={(event) => this.HandleOnChangeLastname(event)}
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
        </div>
        <ChiComponent
            name = {this.state.firstname}
            age = {'26'}
        />
      </div>
    );
  }
}

export default MyComponentFrom;
