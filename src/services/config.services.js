//* Here we will configure the tool that we use to call the Backend
// Import axios, it we will use it to make the calls:
import axios from "axios";


// Create a service object with axios that will use the base URL of our server calls:
const service = axios.create({
    baseURL: "http://localhost:5005/api"
})

// Export our service:
export default service