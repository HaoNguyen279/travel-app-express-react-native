import { getAllPlaces } from "@/services/place.service";
import { useEffect, useState } from "react"

export const usePlace = () => {
    const [place,setPlace] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPlace = async () => {
        setLoading(true);
        const res = await getAllPlaces();
        setPlace(res.data);
        setLoading(false);
    };
    useEffect(() =>{
        fetchPlace();
    }, []);
    return { place, loading, refetch : fetchPlace };
}