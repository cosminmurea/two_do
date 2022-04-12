
const getTasks = async () => {
    try {
        const response = await fetch('/tasks')
        handleErrors(response)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error)
    }
}

const getTaskById = async (taskId) => {
    try {
        const response = await fetch(`/tasks/${taskId}`)
        handleErrors(response)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error)
    }
}

const createNewTask = async (taskDescription) => {
    const description = validateParseDescription(taskDescription)
    if (description) {
        try {
            const fetchOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: description })
            }
            const response = await fetch('/tasks', fetchOptions)
            handleErrors(response)
            const jsonData = await response.json()
            return jsonData
        } catch (error) {
            console.error(error)
        }
    } else {
        return null
    }
}
const updateTaskDescription = async (taskId, newDescription) => {
    const updatedDescription = validateParseDescription(newDescription)
    if (updatedDescription) {
        try {
            const fetchOptions = {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ description: updatedDescription })
            }
            const response = await fetch(`/tasks/${taskId}`, fetchOptions)
            handleErrors(response)
            const jsonData = await response.json()
            return jsonData
        } catch (error) {
            console.error(error)
        }
    } else {
        return null
    }
}

const updateTaskStatus = async (taskId, taskStatus) => {
    try {
        const fetchOptions = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ taskStatus: !taskStatus })
        }
        const response = await fetch(`/tasks/status/${taskId}`, fetchOptions)
        handleErrors(response)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error)
    }
}

const deleteTaskById = async (taskId) => {
    try {
        const fetchOptions = {
            method: 'DELETE'
        }
        const response = await fetch(`/tasks/${taskId}`, fetchOptions)
        handleErrors(response)
        const jsonData = await response.json()
        return jsonData
    } catch (error) {
        console.error(error)
    }
}

/*
Error Handler;
*/
const handleErrors = (response) => {
    if (!response.ok) {
        const newError = `${response.status} : ${response.statusText}` || response
        throw Error(newError)
    }
}

/*
Validate and parse taskDescription value from user input;
*/
const validateParseDescription = (taskDescription) => {
    if (taskDescription.trim().length === 0) {
        alert('All fields are required!!')
        return null
    }
    if (taskDescription.trim().length > 254) {
        alert('Task description can be MAX 254 characters long!!')
        return null
    }

    return taskDescription.trim()
}

/*
Basic async setTimeout() => can be used with the await keyword
*/
const promiseTimeout = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000)
    })
}

export {
    getTasks,
    getTaskById,
    createNewTask,
    updateTaskDescription,
    updateTaskStatus,
    deleteTaskById,
    promiseTimeout
}
