import React from "react";

class ChiComponent extends React.Component {
    state = {
        showjob: false
    }

    HandleShow = (showjob) => {
        this.setState({
            showjob: true
        })
    }

    HandleClose = (showjob) => {
        this.setState({
            showjob: false
        })
    }

    HandleOnclickDelte = (job) => {
        console.log("HandleOnclickDelete: ", job)
        this.props.Deletejob(job);
    }


    render() {
        let { arrJob } = this.props
        let { showjob } = this.state

        return (
            <React.Fragment>
                {showjob === false ?

                    <div className="flex justify-center mt-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
                            onClick={(showjob) => this.HandleShow(showjob)}
                        >
                            Show Job List
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-list w-full p-6 bg-white rounded-lg shadow-md mt-4">
                            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                                Job List
                            </h1>

                            <div className="space-y-3"> 
                                {
                                    arrJob.map((item, index) => {
                                        return (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between border-b border-gray-200 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-gray-700">
                                                    {item.title} - <span className="font-semibold text-green-600">${item.salary}</span>
                                                </span>
                                                
                                                <button
                                                    className="ml-4 bg-red-100 hover:bg-red-200 text-red-700 font-bold py-1 px-3 rounded-full text-xs transition-colors"
                                                    onClick={() => { this.HandleOnclickDelte(item) }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded-lg transition-all duration-300"
                                onClick={(showjob) => this.HandleClose(showjob)}
                            >
                                Hide Job List
                            </button>
                        </div>
                    </>
                }
            </React.Fragment>
        );
    }
}

export default ChiComponent;