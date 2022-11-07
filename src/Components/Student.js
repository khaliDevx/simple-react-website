import React, {Component} from "react"
import "./Student.css"
class Student extends Component{
    
    render() {
        const students = this.props.students
        const studentsInfo = students.map( s => {
            return s.level > 0 ? (
                <div className="item" key={s.id}>
                    <div>{s.id}</div>
                    <div>{s.name}</div>
                    <div>{s.age}</div>
                </div>
            ) : null
        
        })

        return(
            <div>
                {studentsInfo}
            </div>
        )
    }
}
export default Student