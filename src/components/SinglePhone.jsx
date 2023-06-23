import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { getPhoneDetailsService } from "../services/phones.services";
import Galaxy_S7 from "../assets/images/Galaxy_S7.png"
import Honor_10 from "../assets/images/Honor_10.png"
import IPhone_7 from "../assets/images/IPhone_7.png"
import Moto_G6 from "../assets/images/Moto_G6.png"
import Nokia_7_1 from "../assets/images/Nokia_7.1.jpg"
import P10_Lite from "../assets/images/P10_Lite.jpg"
import Xiaomi_MI_A2 from "../assets/images/Xiaomi_MI_A2.jpeg"
import ZenPhone_5 from "../assets/images/ZenPhone_5.jpg"

function SinglePhone() {
    const navigate = useNavigate()
    // Get the params:
    const params = useParams()

    // Create an array with all the images:
    const imagesArr = [IPhone_7, Galaxy_S7, Honor_10, P10_Lite, Nokia_7_1, ZenPhone_5, Xiaomi_MI_A2, Moto_G6]

    // Create state for a phone:
    const [phone, setPhone] = useState(null)
    // Create state for when it is loading:
    const [isLoading, setIsLoading] = useState(true)

    // Create a function to get the data:
    const getData = async () => {
        try {
            // console.log(params.phoneId)
            // console.log("testing single phone")
            // Call the server to get the data, using a service:
            const response = await getPhoneDetailsService(params.phoneId)
            // console.log(response.data)
            setPhone(response.data[0])
            setIsLoading(false)
        } catch (error) {
            navigate("/error")
        }
    }

    // useEffect to call getData:
    useEffect(() => {
        getData()
    }, [])

    // If it is loading then show a spinner:
    if (isLoading) {
        return (
            <div>
                <GridLoader color="rgba(0, 0, 0, 0.62)" size={50}/>
            </div>
        )
    }


    return <div className="singlePhone">
        <div className="singlePhone-title">
            <h2>{phone.name}</h2>
            <p> - </p>
            <h3>{phone.manufacturer}</h3>
            <p>€{phone.price}</p>
        </div>
        <p>{phone.description}</p>
        <p>Color: {phone.color}</p>
        <img src={imagesArr[phone.id]} alt="phone" />
        <p>Screen: {phone.screen}</p>
        <div className="singlePhone-processor-ram">
            <p>Processor: {phone.processor}</p>
            <p>RAM: {phone.ram}GB</p>
        </div>
        
        <Link to={"/"}>Back</Link>
    </div>;
}

export default SinglePhone;
