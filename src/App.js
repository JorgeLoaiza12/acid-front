import React, { Component } from 'react';
import './App.css';
import MapComponent from './components/MapComponent';
import LoadingSpinner from './components/LoadingSpinner';
import ModalComponent from './components/ModalComponent';
import ModalErrorComponent from './components/ModalErrorComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      loading: false,
      modal: false,
      modalError: false,
      modalErrorText: ''
    }
  }

  handleState = (changes) => {
    this.setState(changes);
  }

  handleStateModal = () => {
    this.setState({
      country: null,
      modal: false
    });
  }

  handleStateModalError = () => {
    this.setState({
      modalError: false,
      modalErrorText: ''
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <MapComponent emmitChanges={this.handleState}></MapComponent>
          {
            this.state.loading && <LoadingSpinner></LoadingSpinner>
          }
          {
            this.state.country && this.state.modal &&
            <ModalComponent
              dataCountry={this.state.country.data} show={this.state.modal} closeModal={this.handleStateModal}>
            </ModalComponent>
          }
          {
            this.state.modalError &&
            <ModalErrorComponent
              errorText={this.state.modalErrorText} show={this.state.modalError} closeModalError={this.handleStateModalError}>
            </ModalErrorComponent>
          }
        </div>
      </div>
    );
  }
}

export default App;
