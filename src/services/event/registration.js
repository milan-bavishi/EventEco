import { toast } from "react-toastify";
import { apiConnector } from "../connector";

export function registerUser(name) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/event/register', { name, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Event Registred")
        }
        catch (error) {
            console.log("Error At Service of User Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}




