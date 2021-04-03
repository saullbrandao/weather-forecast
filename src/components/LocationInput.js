import styled from "styled-components";

const TextInput = styled.input`
    width: 30rem;
    padding: 0.5rem;
    text-align: center;
    font-size: 1rem;
    border-radius: 1rem;
    border: 2px solid #2E8BC0;

    :focus {
        outline: none;
        ::placeholder {
            color: transparent
        }
    }
`

const LocationInput = ({ handleLocationChange }) => {
    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            handleLocationChange(event.target.value)
            event.target.value = ''
        }
    }

    return (
        <TextInput type="text"
            onKeyPress={handleKeyPress}
            placeholder="Enter City Name"
        />
    )
}

export default LocationInput