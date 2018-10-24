import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import MSSPie from '../../charts/MSSPie'
import './PatientsDashboard.css'

class Patients extends Component {
    constructor () {
        super();
        this.state = {
            data: 
            [
                {name: '≥70', value: 430},
                {name: '<70', value: 390},
                {name: 'missing', value: 300}
            ],
            colors: ['#0088FE', '#999', '#999'],
            centerText: '430',
            centerText2: '/1120',
        }
        // this.getPatientsAge();
      }


    // TODO: waiting for API
    //   getPatientsAge(){
    //   }

      render() {

        return (
            <Panel className ='patient_tile'>
                {/* <Panel.Heading>Patients older than 70</Panel.Heading> */}
                <Panel.Body>
                Patients older than 70
                    <MSSPie data={this.state.data} 
                    colors={this.state.colors} 
                    centerText={this.state.centerText} 
                    centerText2={this.state.centerText2} />
                </Panel.Body>
            </Panel>
        );
      }
  }

  export default Patients;