import React from "react";
import ChiComponent from "./ChiComponent";
import AddComponent from "./AddComponent";

class MyComponentFrom extends React.Component {
state = {
    arrJob:[
        {id: '001', title: 'dev', salary:'500'},
        {id: '002', title: 'test', salary:'300'},
        {id: '003', title: 'leader', salary:'700'}
    ]
}


Addnewjob = (job) =>{
    console.log("check job form pareant: ", job)
    this.setState({
        arrJob: [...this.state.arrJob , job]
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
            <AddComponent
                Addnewjob = {this.Addnewjob}
            />
          
        </div>
        <ChiComponent
            arrJob = {this.state.arrJob}
        />
      </div>
    );
  }
}

export default MyComponentFrom;
