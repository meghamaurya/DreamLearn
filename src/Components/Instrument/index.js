import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Instrument() {
    const [instruments, setInstruments] = useState({});
    const params = useParams();

    const { instrument } = params;
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${instrument}`)
            .then((res) => {
                console.log(res.data)
                setInstruments(res.data);
            })
    }, [instrument])
    return (
        <div>
            <p>{instruments.title}</p>
            <div>
                <img className="w-72 h-72" src={instruments.image} alt={instrument.title} width="300px" />
                <p>{instruments.price}</p>
            </div>
        </div>
    )
}