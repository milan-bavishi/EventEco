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


export async function findallData(setallData, setLoading,email) {
    try {
        setLoading(true);
        const response = await apiConnector(
            "GET",
            "http://localhost:4000/dashboard/alleventData",email
        );

        if (!response.data.success) {
            setallData(response);
            setLoading(false);
            throw new Error(response.data.msg);
        }

        if (response.data.success) {
            setallData(response.data.result);
        }
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error)
        toast.error("Could not get your event");
    }

}
