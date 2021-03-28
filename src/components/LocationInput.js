const LocationInput = ({ location, handleLocationChange, handleButtonClick }) => {
    const handleChange = (event) => {
        handleLocationChange(event.target.value)
    }
    return (
        <div>
            Your City <input type="text" onChange={handleChange} value={location} placeholder={location} />
        </div>
    )
}

export default LocationInput