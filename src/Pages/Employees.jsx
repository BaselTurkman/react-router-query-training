import { useNavigate } from "react-router-dom"
export const Employees = () =>{
    const nav = useNavigate()
    const names = ["Basel", "Mustafa", "Obada", "Abdullmenem"]
    return (
        <div>
            <p> This is Employees page</p>
            {names.map((name) => {
                return(
                    <div>
                        <h1>This is {name}</h1>
                        <button onClick={() => nav(`./${name}`)}>View More</button>
                    </div>
                )
            })}
        </div>
    )
}