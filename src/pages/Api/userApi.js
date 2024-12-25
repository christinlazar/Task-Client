import Api from "../../services/axios"

export const regsiter = async (formData) =>{
    try {
        const result = await Api.post('/register',{formData})
        return result
    } catch (error) {
        return error
    }
}

export const addtask = async (taskData)=>{
    try {
        const result = await Api.post('/add-task',{taskData})
        return result
    } catch (error) {
        return error
    }
}