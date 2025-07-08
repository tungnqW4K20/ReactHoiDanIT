import React from "react";

// class ChiComponent extends React.Component {

//   render() {
//     console.log("check props", this.props) 

//     let {name, age, adress, arrJob } = this.props
//     return (
//       <div>
//           {/* child component name : {name}     
//           child component age : {age}
//           child component adres : {adress} */}
//           <h1> Job list</h1>
//           {
//             arrJob.map((item, index) => {
//                 return (
//                     <div key = {item.id}>
//                         {item.title} - {item.salary}
//                     </div>
//                 )
//             })
//           }

//       </div>
//     );
//   }
// }





//function component
//
const ChiComponent = (props) => {
    console.log("check props",props )
    let {arrJob} = props; 
    return (
       <div>
           {/* child component name : {name}     
           child component age : {age}
           child component adres : {adress} */}
           <h1> Job list</h1>           {
             arrJob.map((item, index) => {
                 return (
                     <div key = {item.id}>
                         {item.title} - {item.salary}
                     </div>
                 )
             })
           }

       </div>
    )
} 


export default ChiComponent;
