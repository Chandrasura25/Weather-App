//import logo from './logo.svg';
import './App.css';
// import Button from "./component/Button";
// import AddStudent from "./component/AddStudent";
// function App() {
//   return (
//    <>
//    <Button title='Edit' color='btn btn-success'/>
//    <Button title='Delete' color='btn btn-danger'/>
//    <Button title='rusticate'color='btn btn-warning'/>
//    </> 
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_bln/ank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     // <>Hello world
//     // {Math.random() }
//     // </>
//   );
// }

// const App = () =>{
//   const myStyle={
//     color:"white",
//   }
//   const gender ="male";
//   const name ="Chandrasura";
//   const url ="https://www.google.com";
//   const numer = Math.floor(Math.random() * 11);
//   const doSomething =()=>{
//     alert (`hello`)
//   }
//   const random = ()=>{ (numer<5)?
//       alert(`small number`): alert(`big number`);
//     window.location.reload()
//   }
//   return(
//     <>
//     <h1 style={myStyle} className="first">Hello {name}</h1>
//     <h1 className={gender=="female"? "text-primary": "text-danger"}>Hello {name}</h1>
//     <a href={url}>link to google</a><br />
//     <button onClick={doSomething}>Click me</button><br />
//     <div className="div">{numer}</div>
//     <button onClick={random}>Random</button>
//     </>
//   )
// }

// export default App;
// import { useState } from "react";
// const App = () =>{

// // const handlefirstname = (e)=>{
// const [allStudents, setallStudents] = useState([]);
//   setfirstname(e.target.value)
// console.log(firstname);
// };
import { useState } from "react";
import AddStudent from "./component/AddStudent";
// import Button from "./components/Button";
import ListStudent from "./component/ListStudent";
const App = () =>{  

const [allStudents, setallStudents] = useState([]);
const [editMode, seteditMode] = useState(false)
const [currentIndex, setcurrentIndex] = useState(0)
// const handlefirstname = (e)=>{
//   setfirstname(e.target.value)
// console.log(firstname);
// };

const addStudent=(newStudent)=>
{
  setallStudents([...allStudents,newStudent])
} 

const deleteStudent = (index) =>
{
  let newAllStudents = [...allStudents]
  let updatedStudents = newAllStudents.filter((val,ind)=>( ind!=index))
  setallStudents(updatedStudents)
}

const editStudent= (index)=>{
  seteditMode(true)
  let newAllStudents = [...allStudents]
  let currentStudent = newAllStudents[index]
  let {firstname, lastname, email, password}=currentStudent
  setcurrentIndex(index)
}

// const updateDetails=(newStudent)=>
// {
//   let newAllStudents = [...allStudents]
//   // let changedDetails = {firstname, lastname, email, password}
//   // newAllStudents[currentIndex]=changedDetails
//   newAllStudents[currentIndex]=newStudent
//   setallStudents(newAllStudents)
//   seteditMode(false)
// }

  return(
    <div>
      <div className="container-fluid">
        <div className="row">
        <div className="col-6 border-right">
          <AddStudent addStudent={addStudent}></AddStudent>
        </div>

        <div className="col-6 vh-100">
            <ListStudent allStudents={allStudents} deleteStudent={deleteStudent}></ListStudent>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default App;




