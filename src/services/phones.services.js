//* This is where we will code the services for the Phones routes:
// Import the service:
import service from "./config.services"

// Create a function to get all the Phones:
const getAllPhonesService = () => {
    return service.get("/phones")
}

// Create a function to get the details of a Phone:
const getPhoneDetailsService = (phoneId) => {
    return service.get(`/phones/${phoneId}`)
}

export {
    getAllPhonesService,
    getPhoneDetailsService
}