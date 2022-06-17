import React from "react"
import { Route } from "react-router-dom"
import { EditLesson } from "./lessons/EditLesson"
import { LessonDetails } from "./lessons/LessonDetails"
import { LessonForm } from "./lessons/LessonForm"
import { LessonList } from "./lessons/LessonList"
import { TeacherDetails } from "./teachers/TeacherDetails"
import { TeacherList } from "./teachers/TeacherList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/lessons">
                <LessonList />
            </Route>
            <Route exact path="/teachers">
                <TeacherList />
            </Route>
            <Route exact path="/lessons/new">
                <LessonForm />
            </Route>
            <Route exact path="/lessons/:lessonId(\d+)/edit">
                <EditLesson />
            </Route>
            <Route exact path="/lessons/:lessonId(\d+)">
                <LessonDetails />
            </Route>
            <Route exact path="/teachers/:teacherId(\d+)">
                <TeacherDetails />
            </Route>
        </main>
    </>
}
