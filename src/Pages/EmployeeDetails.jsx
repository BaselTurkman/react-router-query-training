import { useParams } from "react-router-dom";
export const EmployeeDetails = () =>{
    const {EmployeeName} = useParams();
    return(
        <div>
            <p>This is Details for {EmployeeName} Employee</p>
        </div>
    )
}