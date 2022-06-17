import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getLessonsByTeacher, getSingleLesson, joinLesson, leaveLesson } from "../lessons/LessonManager.js"
import { getSingleTeacher } from "./TeacherManager.js"

export const TeacherDetails = (props) => {
    const [teachers, setTeachers] = useState([])
    //setting the initial state of lessons as an array
    const [refreshState, setRefreshState] = useState(false)
    // refreshes the buttons state on the ternary statement
    const history = useHistory()
    // defining use history
    const { teacherId } = useParams()

    useEffect(() => {

        getSingleTeacher(teacherId)
            .then(data => setTeachers(data))

    }, [])

    // the function above is fetching the data from the backend using the fx created in the lesson manager to get the data from the backend
    // relay it to the front end then set the state using the function "setLessons"
    //then rendering the information below int the JSX return
    return (
        <article className="lessons">
            {

                <>
                    <section key={`parent--${teachers.parent?.id}`} className="teacher info">
                        <h2 className="Parent_name">About our Teacher: {teachers.parent?.user?.first_name} {teachers.parent?.user?.last_name}</h2>
                        <div className="Parent_name">{teachers.parent?.user?.first_name} {teachers.parent?.user?.last_name} is
                            a {teachers.parent?.employment_status} she is skilled in:{'insert skills here'} and will be hosting:</div>

                    </section>
                    <section key={`teacher--${teachers.id}`} className="teacher">
                    {
                teachers.lessons?.map(lesson => {
                    return <>
                    <section key={`lesson--${lesson.id}`} className="lesson">
                        <Link to={`/lessons/${lesson.id}`}className="lesson__title">{lesson.title} by {lesson.parent.user.first_name}</Link>
                    <div className="lesson__title"> <h3>{lesson.title}</h3> We will be covering {lesson.subject?.label} concepts </div>
                    <div className="lesson__age"> the targeted age range is from {lesson.min_age} to {lesson.max_age} to encourage peer-to-peer learning</div>
                    <div className="lesson__details">Here are the lesson's details: {lesson.details}</div>
                    <div className="lesson__teacher contact">for more information about this lesson you can contact {lesson.parent?.user?.first_name} at {lesson.parent?.user?.email}</div>
                    </section> 
                    </>
                })
            }
                    </section>

                </>
            }

        </article>
    )
}