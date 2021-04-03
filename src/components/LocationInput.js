import { useEffect, useState } from "react";
import styled from "styled-components";

const TextInput = styled.input`
    width: 30rem;
    padding: 0.5rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 4px;
`

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
        <TextInput type="text"
            onChange={(event) => setInputValue(event.target.value)}
            value={inputValue}
            placeholder="Enter City Name"
        />
    )
}

export default LocationInput