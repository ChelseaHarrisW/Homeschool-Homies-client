import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { getSingleLesson, getSubjects, updateLesson } from "./LessonManager"




export const EditLesson = () => {
    const history = useHistory()
    const {lessonId} = useParams()
    const [originalLesson, setOriginalLesson] = useState({lesson: {id:0}})
    const [currentLesson, setCurrentLesson] = useState({})
    const [allSubjects, updateSubjects] = useState([])

    useEffect(() => {
        getSubjects()
        .then(data => updateSubjects(data))
        getSingleLesson(lessonId)
        .then(data => setOriginalLesson(data))
    }, [])
// fx below fills in the blank input field with the original info
    useEffect(() => {
        const copy = {...originalLesson}
        copy.title = originalLesson.title
        copy.subject = originalLesson.subject?.id
        copy.details = originalLesson.details
        copy.location = originalLesson.location
        copy.min_age = originalLesson.min_age
        copy.max_age = originalLesson.max_age
        copy.date = originalLesson.date
        copy.time = originalLesson.time
        setCurrentLesson(copy)
    }, [originalLesson])
//fx below  is how we complete the update the state once state is changed on current lesson
    const changeLessonState = (e) => {
        const copy = {...currentLesson}
        if (e.target.name === "title") {
            copy.title = e.target.value
        } else if (e.target.name === "subject") {
            copy.subject = parseInt(e.target.value)
        } else if (e.target.name === "details") {
            copy.details = e.target.value
        } else if (e.target.name === "location") {
            copy.location = e.target.value
        } else if (e.target.name === "min_age") {
            copy.min_age = parseInt(e.target.value)
        } else if (e.target.name === "max_age") {
            copy.max_age = parseInt(e.target.value)
        } else if (e.target.name === "date") {
            copy.date = e.target.value
        } else if (e.target.name === "time") {
            copy.time = e.target.value
        }

        setCurrentLesson(copy)
    }
    return (
        <form className="lessonForm">
            <h2 className="lessonForm__title">Register New lesson</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentLesson.title}
                        onChange={changeLessonState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject: </label>
                    <select name="subject" required autoFocus className="form-control"
                        value={currentLesson.subject}
                        onChange={changeLessonState}>
                            <option value="0" hidden>Select a subject...</option>
                            {allSubjects.map(subject => {
                                return <option key={`subject--${subject.id}`} value={subject.id}>{subject.label}</option>
                            })}

                        </select>
                </div>
                <div className="form-group">
                    <label htmlFor="details">Details: </label>
                    <input type="text" name="details" required autoFocus className="form-control"
                        value={currentLesson.details}
                        onChange={changeLessonState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location: </label>
                    <input type="text" name="location" required autoFocus className="form-control"
                        value={currentLesson.location}
                        onChange={changeLessonState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="min_age">Min_age: </label>
                    <input type="text" name="min_age" required autoFocus className="form-control"
                        value={currentLesson.min_age}
                        onChange={changeLessonState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="max_age">Max_age: </label>
                    <input type="text" name="max_age" required autoFocus className="form-control"
                        value={currentLesson.max_age}
                        onChange={changeLessonState}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date of Lesson: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        defaultValue={currentLesson.date}
                        onChange={changeLessonState}/>
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time of Lesson: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        defaultValue={currentLesson.time}
                        onChange={changeLessonState}/>
                </div>
            </fieldset>

            {/* TODO: create the rest of the input fields */}

            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const lesson = {
                        title: currentLesson.title,
                        subject_id: currentLesson.subject,
                        details: currentLesson.details,
                        location: currentLesson.location,
                        min_age: currentLesson.min_age,
                        max_age: currentLesson.max_age,
                        date: currentLesson.date,
                        time: currentLesson.time,
                    }

                    // Send POST request to your API
                    updateLesson(lesson, lessonId)
                        .then(() => history.push("/lessons"))
                }}
                className="btn btn-primary">Save</button>
        </form>
    )
    }
