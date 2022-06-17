import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getTeachers } from "./TeacherManager.js"

export const TeacherList = (props) => {
    const [teachers, setTeachers] = useState([])
    const history = useHistory()


    useEffect(() => {
        getTeachers().then(data => setTeachers(data))

    }, [])
//TODO: Render the teachers name and get access to the contact info
    return (
        <article className="teachers">
            {
                teachers.map(teacher => {
                    return <>
                    <section key={`teacher--${teacher.id}`} className="teacher">
                        <h2 className="teacher__title"> <Link to={`/teachers/${teacher.id}`}>Meet {teacher.user.first_name} {teacher.user.last_name} and View Lessons </Link></h2>
                        <div className="teacher__employment">{teacher.user.first_name} {teacher.user.last_name} has spent much time in many roles but is currently a {teacher.employment_status}</div>
                        <div className="teacher__skillLevel">{teacher.bio}</div>
                        <div className="teacher__contact">For more information feel free to email {teacher.user.first_name} at {teacher.user.email}</div>
                    </section> 
                    <button> View Lessons and Skills </button>
                    </>
                })
            }
        </article>
    )
}