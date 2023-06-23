import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllPhonesService } from "../services/phones.services";
import { GridLoader } from "react-spinners";

function Phones() {
    const navigate = useNavigate()
    // Create state for the phones:
    const [phones, setPhones] = useState(null)
    // Create state for when the page is loading:
    const [isLoading, setIsLoading] = useState(true)
    // Create state to show or hide the details from a phone:
    const [showPhoneDetails, setShowPhoneDetails] = useState(false)

    // Create a function to get all the data from the phones and change the state:
    const getData = async () => {
        try {
            // Use a service to get all the data:
            const response = await getAllPhonesService()
            // Update the states:
            setPhones(response.data)
            setIsLoading(false)
        } catch (error) {
            navigate("/error")
        }
    }

    // useEffect to call getData:
    useEffect(() => {
        getData()
    }, [])

    // Create a function to show the details of a phone:
    const handleShowPhone = (e) => {
        // console.log(e.target.innerText)
        // Change state to show the phone details:
        setShowPhoneDetails(true)
    }

    

    // If it is loading then show a spinner:
    if (isLoading) {
        return (
            <div>
                <GridLoader color="rgba(0, 0, 0, 0.62)" size={50}/>
            </div>
        )
    }
    
    return (
        <div className="phoneList">
            <h1>All of our Phones</h1>
            
            {!showPhoneDetails && phones.map(eachPhone => {
                return <Link key={eachPhone.id} onClick={handleShowPhone} to={`/${eachPhone.id}`}>
                        <h2>{eachPhone.name}</h2>
                    </Link>
            })}
        </div>
    )
}

export default Phones;
