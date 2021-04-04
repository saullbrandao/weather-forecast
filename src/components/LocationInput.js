import styled from "styled-components";

const TextInput = styled.input`
    display: flex;
    justify-self: center;
    width: 45em;
    padding: 0.5em;
    text-align: center;
    font-size: 1em;
    border-radius: 1em;
    border: 2px solid #2E8BC0;

    :focus {
        outline: none;
        ::placeholder {
            color: transparent
        }
    }

    @media(max-width: 970px) {
        width: 100%;
    }

    @media(max-width: 530px) {
        width: 100%;
    }
`

const LocationInput = ({ handleLocationChange }) => {
    const handleKeyPress = event => {
        if (event.key === 'Enter' && event.target.value) {
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