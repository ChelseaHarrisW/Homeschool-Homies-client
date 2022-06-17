import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getLessons, deleteLesson } from "./LessonManager.js"

export const LessonList = (props) => {
    const [lessons, setLessons] = useState([])
    //setting the initial state of lessons as an array
    const history = useHistory()
    // defining use history


    useEffect(() => {
        getLessons()
        .then(data => setLessons(data))

    }, [])
    const deleteLessonById = (id) => {
        deleteLesson(id)
        .then(() => {
            getLessons().then(data => setLessons(data))
        })
    }
// the function above is fetching the data from the backend using the fx created in the lesson manager to get the data from the backend
// relay it to the front end then set the state using the function "setLessons"
//then rendering the information below int the JSX return
    return (
        <article className="lessons">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/lessons/new" })
                }}
            >Register New Lesson</button>
            {
                lessons.map(lesson => {
                    return <>
                    <section key={`lesson--${lesson.id}`} className="lesson">
                        <Link to={`/lessons/${lesson.id}`}className="lesson__title">{lesson.title} by {lesson.parent.user.first_name}</Link>
                        <div className="lesson__skill_type">Subject: {lesson.subject.label}</div>
                        <div className="lesson__age"> ages: {lesson.min_age} - {lesson.max_age} are welcome</div>
                    </section> 
                    <Link to={`/lessons/${lesson.id}/edit`}>edit</Link>
                    <button onClick={e => deleteLessonById(lesson.id)}>Delete</button>
                    </>
                })
            }
        </article>
    )
}