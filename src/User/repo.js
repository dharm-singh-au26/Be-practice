import { User } from "../../db"

export const getUser = async (userData) =>{ 
    return await User.find({...userData})   
}

export const createUser = async (user) => {
    return await User.create(user)
}