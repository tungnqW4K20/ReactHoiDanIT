import React from "react";
class AddComponent extends React.Component {
  state = {
    title: '',
    salary: ''
  }

  handleChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.title || !this.state.salary) {
      alert("Missing required params!");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 10001),
      title: this.state.title,
      salary: this.state.salary
    });
    this.setState({
      title: '',
      salary: ''
    });
  }

  render() {
    return (
      <div className="w-full">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            JOB TITLE
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Vui lòng điền đầy đủ bên dưới
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="job-title" className="sr-only">Job title</label>
              <input
                id="job-title"
                type="text"
                required
                placeholder="Job title (e.g., Senior React Developer)"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={this.state.title}
                onChange={this.handleChangeTitle}
              />
            </div>
            <div>
              <label htmlFor="salary" className="sr-only">Salary</label>
              <input
                id="salary"
                type="number" 
                required
                placeholder="Salary (e.g., 5000)"
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={this.state.salary}
                onChange={this.handleChangeSalary}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddComponent;