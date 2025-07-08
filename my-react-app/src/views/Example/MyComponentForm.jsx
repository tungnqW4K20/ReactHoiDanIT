import React from "react";
import ChiComponent from "./ChiComponent";
import AddComponent from "./AddComponent";

class MyComponentForm extends React.Component {
  state = {
    arrJob: [
      { id: 'job-001', title: 'Frontend Developer', salary: '5000' },
      { id: 'job-002', title: 'Backend Developer', salary: '6000' },
      { id: 'job-003', title: 'Project Manager', salary: '7000' }
    ]
  }

  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job]
    });
  }

  deleteJob = (jobToDelete) => {
    let currentJobs = this.state.arrJob;
    currentJobs = currentJobs.filter(item => item.id !== jobToDelete.id);
    this.setState({
      arrJob: currentJobs
    });
  }

  render() {
    return (
      
      <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
        
        <AddComponent
          addNewJob={this.addNewJob}
        />
        
        <hr className="border-gray-200" />
        
        <ChiComponent
          arrJob={this.state.arrJob}
          deleteJob={this.deleteJob}
        />
      </div>
    );
  }
}

export default MyComponentForm;