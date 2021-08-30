import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';






// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { firstname: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({ firstname: event.target.value });
//   }
  
//   render() {
//     return (
//       <div className="container">
//         <h1>Hello {this.state.firstname} !</h1>
//         <form action="addUser" method="post" style ={{width:"300px"}}>

//           <div class="form-group">
//             <label for="">firstname</label>
//             <input onChange ={this.myChangeHandler} type="text" className="form-control" name="firstname" />
//           </div>
//           <div class="form-group" >
//             <label for="">lastname</label>
//             <input type="text" className="form-control" name="lastname" />
//           </div>
//           <div class="form-group">
//             <label for="">email</label>
//             <input type="email" className="form-control" name="email" />
//           </div>
//           <div class="form-group">
//             <label for="">positon</label>
//             <input type="text" className="form-control" name="position" />
//           </div>
          
//           <input type="submit" value="cornfirm" className="btn btn-success"></input>
//         </form>
//         <div className="employees">
//           <button className="btn btn-primary">Show info</button>
//           {employeeList.map((val,key) => {
//             return (
//               <div className="info card">
//                 <div className="info-body text-left">
//                   <p className="info-text">fName: {val.firstname}</p>
//                   <p className="info-text">lName: {val.lastname}</p>
//                   <p className="info-text">email: {val.email}</p>
//                   <p className="info-text">position: {val.position}</p>
//                 </div>
//               </div>
//             )
            
//           })}
//         </div>



//       </div>

//     );
//   }
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
          

  </React.StrictMode>,
  document.getElementById('root')
);



