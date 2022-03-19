export default function ListStudent({allStudents,editStudent,deleteStudent}) {
  return (
    <>

            <h1 className="text-center">List Of Student</h1>
            <table className="table table-striped table-border">
              <tr>
                <td>S/N</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Actions</td>
              </tr>
           
            {allStudents.map((val,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.email}</td>
                <td>
                  <button onClick={()=>deleteStudent(index)} className="btn btn-danger">Delete</button>
                  <button className="btn btn-warning" onClick={()=>editStudent(index)}>Edit</button>
                </td>
              </tr>
            ))}
             </table>
            
    </>
  )
}
