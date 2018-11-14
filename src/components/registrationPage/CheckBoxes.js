import React, { Component } from 'react';

import '../../styling/CheckBoxes.css';

export default class CheckBoxes extends Component {
  state={toggle:false}

  render() {
    return (
      <div >
        <p className="ProfileInfo text-center">Tango Level:</p>
        <div className="checkBox_container">
          <label className="check_container">
          <span className="checkBoxSpan">Beginner</span> 
            <input id="beginner"  className="boxShaddow" type="checkbox" onClick={()=>this.props.handleCheck("beginner")}/>
            <span className="checkmark boxShaddow" />
          </label>
          <label className="check_container ">
          <span className="checkBoxSpan">Intermediate</span> 
            <input id="intermediate"  className="boxShaddow" type="checkbox" onClick={()=>this.props.handleCheck("intermediate")}/>
            <span className="checkmark boxShaddow" />
          </label>
        </div>
        <div className="checkBox_container lastCheckBox">
          <label className="check_container">
          <span className="checkBoxSpan">Advanced</span> 
            <input id="advanced" className="boxShaddow" type="checkbox"  onChange={()=>this.props.handleCheck("advanced")}/>
            <span className="checkmark boxShaddow" />
          </label>
          <label className="check_container">
          <span className="checkBoxSpan">Professional</span> 
            <input  id="professional" className="checkmark boxShaddow" type="checkbox" onClick={()=>this.props.handleCheck("professional")}/>
            <span className="checkmark boxShaddow" />
          </label>
        </div>
      </div>
    );
  }
}
