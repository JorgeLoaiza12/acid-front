import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WeatherIcon from 'react-icons-weather';
import '../assets/styles/ModalComponent.css';

const LoadingSpinner = (props) => {
    return (
        <Modal show={props.show} onHide={props.closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Country: {props.dataCountry.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <span className="bfont">Temperature:</span>
                    <div className="container--temperature">
                        <WeatherIcon name="darksky" className="weather-icon" iconId={props.dataCountry.weather.icon} flip="horizontal" rotate="90" />
                        <span className="temperature">{(props.dataCountry.weather.apparentTemperature).toFixed()}°C</span>
                    </div>
                </div>
                <p className="country-property"><span className="bfont">Capital:</span> {props.dataCountry.capital}</p>
                <p className="country-property"><span className="bfont">Subregion:</span> {props.dataCountry.subregion}</p>
                <p className="country-property"><span className="bfont">Population:</span> {props.dataCountry.population}</p>
                <p className="country-property"><span className="bfont">Region:</span> {props.dataCountry.region}</p>
                <p className="country-property"><span className="bfont">Subregion:</span> {props.dataCountry.subregion}</p>
                <p className="country-property"><span className="bfont">Timezone:</span> {props.dataCountry.timezone}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default LoadingSpinner;