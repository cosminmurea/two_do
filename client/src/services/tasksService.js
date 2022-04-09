
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


export {
    getTasks,
    getTaskById,
    createNewTask
}
