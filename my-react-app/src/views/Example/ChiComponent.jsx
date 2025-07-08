import React from "react";

class ChiComponent extends React.Component {
    state = {
        showjob : false
    }

    HandleShow = (showjob) => {
        this.setState({
            showjob : true
        })
    }

    HandleClose = (showjob) =>{
        this.setState({
            showjob: false
        }) 
    }

  render() {

    console.log("check props", this.props) 

    let {arrJob } = this.props
    
    let {showjob} = this.state

    let check = showjob === true ? 'showjob = true' : 'showjob = false'

    console.log("check", check)
    return (
        <React.Fragment>
            {showjob === false ?
            <div>
                <button onClick = {(showjob) => this.HandleShow(showjob)}>Show</button>
            </div>
            :
            <>
                <div className = "job-list">
                    <h1> Job list</h1>
                    {
                        arrJob.map((item, index) => {
                            return (
                                <div key = {item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }

                </div>
                    <div>
                        <button onClick={(showjob) => this.HandleClose(showjob)}>Hide</button>
                    </div>
                </>    
            }
        </React.Fragment>
    );
  }
}





//function component
//
// const ChiComponent = (props) => {
//     console.log("check props",props )
//     let {arrJob} = props; 
//     return (
//        <div>
//            {/* child component name : {name}     
//            child component age : {age}
//            child component adres : {adress} */}
//            <h1> Job list</h1>           {
//              arrJob.map((item, index) => {
//                 if (+item.salary> 500)
//                 {
//                     return (
//                         <div key = {item.id}>
//                             {item.title} - {item.salary} $
//                         </div>
//                     )
//                 }
//              })
//            }

//        </div>
//     )
// } 


export default ChiComponent;
