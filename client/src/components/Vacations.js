import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Vacations() {
    const [vacations, setVacations] = useState([])
    
    useEffect(() => {
        fetch('/api/vacations')
        .then(res => res.json())
        .then(setVacations)
    }, [])
return (
    <>
    <h2>Vacations</h2>
    <div className="vacations">
        {vacations.map(vacation => 
            <vacation key={vacation.sku} vacation={vacation} /> 
            )}
    </div>
    </>
)
}
export default Vacations;