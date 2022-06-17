import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { getLessons, getSingleLesson, joinLesson, leaveLesson } from "./LessonManager.js"

export const LessonDetails = (props) => {
    const [lesson, setLesson] = useState({})
    //setting the initial state of lessons as an array
    const [refreshState, setRefreshState] = useState(false)
    // refreshes the buttons state on the ternary statement
    const history = useHistory()
    // defining use history
    const { lessonId } = useParams()

    useEffect(() => {

        getSingleLesson(lessonId)
            .then(data => setLesson(data))

    }, [])

    // the function above is fetching the data from the backend using the fx created in the lesson manager to get the data from the backend
    // relay it to the front end then set the state using the function "setLessons"
    //then rendering the information below int the JSX return
    return (
        <article className="lessons">
            {

                <>
                    <section key={`parent--${lesson.parent?.id}`} className="teacher info">
                        <h2 className="Parent_name">About our Teacher: {lesson.parent?.user?.first_name} {lesson.parent?.user?.last_name}</h2>
                        <div className="Parent_name">{lesson.parent?.user?.first_name} {lesson.parent?.user?.last_name} is
                            a {lesson.parent?.employment_status} learn more about {lesson.parent?.user?.first_name} by
                            checking out <Link> {lesson.parent?.user?.first_name}'s profile</Link> </div>

                    </section>
                    <section key={`lesson--${lesson.id}`} className="lesson">
                        <div className="lesson__title"> <h3>{lesson.title}</h3> We will be covering {lesson.subject?.label} concepts </div>
                        <div className="lesson__age"> the targeted age range is from {lesson.min_age} to {lesson.max_age} to encourage peer-to-peer learning</div>
                        <div className="lesson__details">Here are the lesson's details: {lesson.details}</div>
                        <div className="lesson__teacher contact">for more information about this lesson you can contact {lesson.parent?.user?.first_name} at {lesson.parent?.user?.email}</div>
                    </section>

                    <div>{
                        lesson.joined === true ?
                            <button onClick={(e) => {
                                e.preventDefault();
                                leaveLesson(lesson.id, setRefreshState)
                                    .then(() => {
                                        getSingleLesson(lessonId)
                                            .then(data => setLesson(data))
                                    })
                            }}
                            >Leave</button> :
                            <button onClick={(e) => {
                                e.preventDefault();
                                joinLesson(lesson.id, setRefreshState)
                                    .then(() => {
                                        getSingleLesson(lessonId)
                                            .then(data => setLesson(data))
                                    })
                            }}
                            >Join</button>
                    }
                    </div>
                </>
            }

        </article>
    )
}