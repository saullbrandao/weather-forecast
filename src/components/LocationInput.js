import { useEffect, useState } from "react";

const LocationInput = ({ handleLocationChange }) => {
    const [inputValue, setInputValue] = useState('')
    
    useEffect(() => {
        const inputTimer = setTimeout(() => {
            if (inputValue) {
                handleLocationChange(inputValue)
                setInputValue('')
            }
        }, 1000)
        return () => clearTimeout(inputTimer)
    }, [inputValue, handleLocationChange])

    return (
        <div>
            <input type="text"
                onChange={(event) => setInputValue(event.target.value)}
                value={inputValue}
                placeholder="Enter City Name"
            />
        </div>
    )
}

export default LocationInput