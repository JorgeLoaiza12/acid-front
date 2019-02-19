import React, { Component } from 'react';
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react';

const options = {
    scrollwheel: false,
    zoomControl: false,
    minZoomOverride: false,
    maxZoom: 4,
    minZoom: 4,
    disableDoubleClickZoom: true,
    fullscreenControl: false
};

class MapComponent extends Component {
    static propTypes = {
        center: PropTypes.object,
        zoom: PropTypes.number,
        hoverKey: PropTypes.string,
        clickKey: PropTypes.string,
        onCenterChange: PropTypes.func,
        onZoomChange: PropTypes.func,
        onHoverKeyChange: PropTypes.func,
        greatPlaces: PropTypes.array
    };

    static defaultProps = {
        center: {
            lat: -10,
            lng: -55
        },
        zoom: 4
    };

    async fetchData(lat, lng) {
        const dataCountry = await (await fetch(`http://127.0.0.1:3000/getInformation`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lat, lng })
        })).json();

        if (dataCountry.status !== 200) {
            this.props.emmitChanges({ modalError: true, modalErrorText: 'Please try again later.', loading: false });
        } else {
            this.props.emmitChanges({ country: dataCountry, loading: false, modal: true });
        }
    }

    onClick(obj) {
        this.props.emmitChanges({ loading: true });
        this.fetchData(obj.lat, obj.lng);
    }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw' }}>
                <GoogleMapReact
                    options={options}
                    bootstrapURLKeys={{ key: 'AIzaSyDTDGwHDpo84OoVpncBkj3seOnkLCly3XY', language: 'en', }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onChildClick={this._onChildClick}
                    onClick={(event) => this.onClick(event)}
                    debounced={false}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapComponent;