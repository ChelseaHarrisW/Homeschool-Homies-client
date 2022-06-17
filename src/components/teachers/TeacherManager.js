export const getTeachers = () => {
    return fetch("http://localhost:8000/teachers", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const getSingleTeacher = (teacherId) => {
    return fetch(`http://localhost:8000/teachers/${teacherId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const createTeacher = (teacher) => {
    return fetch("http://localhost:8000/teachers", {
        method: `POST`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(teacher)
    })
        .then(response => response.json())
}

export const getSkills = () => {
    return fetch("http://localhost:8000/skill_types", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        }
    })
        .then(response => response.json())
}

export const updateTeacher = (teacher, teacherId) => {
    return fetch(`http://localhost:8000/teachers/${teacherId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
        body: JSON.stringify(teacher)
    })
}

export const deleteTeacher = (teacherId) => {
    return fetch(`http://localhost:8000/teachers/${teacherId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("auth_token")}`
        },
    })
}