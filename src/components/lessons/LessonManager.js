export const getLessons = () => {
    return fetch("http://localhost:8000/lessons", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleLesson = (lessonId) => {
    return fetch(`http://localhost:8000/lessons/${lessonId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}
export const getLessonsByTeacher = (teacherId) => {
    return fetch(`http://localhost:8000/lessons/teacher=${teacherId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createLesson = (lesson) => {
    return fetch("http://localhost:8000/lessons", {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(lesson)
    })
        .then(response => response.json())
}

export const getSubjects = () => {
    return fetch("http://localhost:8000/skill_types", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const updateLesson = (lesson, lessonId) => {
    return fetch(`http://localhost:8000/lessons/${lessonId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(lesson)
    })
}

export const deleteLesson = (lessonId) => {
    return fetch(`http://localhost:8000/lessons/${lessonId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
    })
}

export const leaveLesson = (lessonId, setRefreshState) => {
    return fetch(`http://localhost:8000/lessons/${lessonId}/leave`, {
        method: "DELETE", 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
    })
    .then(() => setRefreshState(false))
}
export const joinLesson = (lessonId, setRefreshState) => {
    return fetch(`http://localhost:8000/lessons/${lessonId}/signup`, {
        method: "POST", 
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
    })
   
}