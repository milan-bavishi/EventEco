import { toast } from "react-toastify";
import { apiConnector } from "../connector";
import { useDispatch } from "react-redux";

export function registerUser(organizerName, eventname, organizerEmail, date, time, categories, venue, description, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/event/registerevent', { organizerName, eventname, organizerEmail, date, time, categories, venue, description, checkUserPresent: true, })
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

export function registerEvent(organizerName, eventname, organizerEmail, date, time, categories, venue, description, email, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        console.log("Service Called")
        try {
            const response = await apiConnector("POST", 'http://localhost:4000/dashboard/registerevent', { organizerName, eventname, organizerEmail, date, time, categories, venue, description, email, checkUserPresent: true, })
            if (!response.data.success) {
                throw new Error(response.data.msg)
            }
            toast.success("Event Registred")
        }
        catch (error) {
            console.log("Error At Service of event Registration", error)
            toast.error(error.message);
        }
        toast.dismiss(toastId)
    }
}
