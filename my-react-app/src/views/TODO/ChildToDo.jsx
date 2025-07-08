import React from "react";

class ChildToDo extends React.Component {
    state = {
        editToDo: {
            id: '',
            title: ''
        }
    };

    HandleClickDelete = (job) => {
        this.props.deleteJob(job);
    };

    HandleClickEdit = (job) => {
        this.setState({
            editToDo: { ...job }
        });
    };

    HandleChangeEditInput = (event) => {
        this.setState({
            editToDo: {
                ...this.state.editToDo,
                title: event.target.value
            }
        });
    };

    HandleSave = () => {
        this.props.updateJob(this.state.editToDo);
        this.setState({
            editToDo: { id: '', title: '' }
        });
    };

    HandleCancelEdit = () => {
        this.setState({
            editToDo: { id: '', title: '' }
        });
    };

    render() {
        let { listodo } = this.props;
        let { editToDo } = this.state;
        let isEmtyObj = Object.keys(editToDo).length === 0

        return (
            <>
                {listodo && listodo.length > 0 ? (
                    <div className="space-y-3">
                        {listodo.map((item, index) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl shadow"
                            >
                                {editToDo.id === item.id ? (
                                    <>
                                        <input
                                            value={editToDo.title}
                                            onChange={this.HandleChangeEditInput}
                                            className="border border-gray-300 rounded px-2 py-1"
                                        />
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="px-3 py-1 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                                                onClick={this.HandleSave}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="px-3 py-1 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
                                                onClick={this.HandleCancelEdit}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <span className="text-gray-700 font-medium">
                                            {index + 1} - {item.title}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                className="px-3 py-1 bg-yellow-400 text-white rounded-lg shadow hover:bg-yellow-500 transition"
                                                onClick={() => this.HandleClickEdit(item)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="px-3 py-1 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                                                onClick={() => this.HandleClickDelete(item)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        làm méo có cái gì mà hiện
                    </div>
                )}
            </>
        );
    }
}

export default ChildToDo;
