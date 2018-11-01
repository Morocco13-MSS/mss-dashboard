import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

class AverageBloodLoss extends Component {
    render() {
        
        return (
            <Panel>
                <Panel.Body>
                    <h4>{'Perte de sang moyenne'}</h4>
                    <div className="square_top_pna">
                        <div className="bloodLoss_value">
                        {
                            Math.round(this.props.averageBLoss)                            
                        }
                        </div>
                    </div>
                    <div className="square_bottom_bloodLoss">
                        <div className="square_bloodLoss_left">
                            <div className="perforation_name"> {'Missing'}</div>
                            <div className="perforation_value">{this.props.missing}</div>
                        </div>
                        <div className="square_bloodLoss_right">
                            <div className="perforation_name">{'Total'}</div>
                            <div className="perforation_value">{this.props.total}</div>
                        </div>
                    </div>

                </Panel.Body>
            </Panel>
        );
    }
}
export default AverageBloodLoss;