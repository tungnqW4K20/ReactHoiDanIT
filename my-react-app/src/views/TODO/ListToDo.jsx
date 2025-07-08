import React from "react";
import Add from "./Add";
import ChildToDo from "./ChildToDo";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listodo: [
      { id: "todo1", title: "DOING HOMEWORK" },
      { id: "todo2", title: "MAKING VIDEO" },
      { id: "todo3", title: "FIX BUG" },
    ],
    editToDo : {}
  };

    addNewJob = (newobj) => {
    this.setState({
      listodo: [...this.state.listodo, newobj]
    });
    toast.success("wow, so easy !")
    
   }

    deleteJob = (jobToDelete) => {
        let currentJobs = this.state.listodo;
        currentJobs = currentJobs.filter(item => item.id !== jobToDelete.id);
        this.setState({
            listodo: currentJobs  
        });
    };

    updateJob = (updatedJob) => {
    const updatedList = this.state.listodo.map(item =>
        item.id === updatedJob.id ? { ...item, title: updatedJob.title } : item
    );
    this.setState({
        listodo: updatedList
    });
    toast.success("Đã cập nhật thành công!");
};



  render() {

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            ToDo List
          </h1>
        <Add
            addNewJob={this.addNewJob}
        />  

        <ChildToDo
            listodo = {this.state.listodo}
            deleteJob = {this.deleteJob}
            updateJob={this.updateJob}  

        />
        </div>
      </div>
    );
  }
}

export default ListToDo;
