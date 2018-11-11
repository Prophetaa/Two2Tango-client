import React, { Component } from 'react';

import '../../styling/CheckBoxes.css';

export default class CheckBoxes extends Component {
  state={toggle:false}

  componentDidMount(){
    if(this.props.currentPage === "2"){ //If statement to make checkBox component re-usable in diff ways
    let inputs = document.getElementsByTagName('input'),
    checkboxes = [];

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type === 'checkbox') {
        checkboxes.push(inputs[i]);
        inputs[i].addEventListener('change', function () {
            if (this.checked) {
                for (let j = 0; j < checkboxes.length; j++) {
                    if (checkboxes[j] !== this) {
                        checkboxes[j].checked = false;
                    }
                }
            }
        });
    }
}
  }
}

  render() {
    return (
      <div >
        <p className="ProfileInfo text-center">Tango Level:</p>
        <div className="checkBox_container">
          <label className="check_container">
          <span className="checkBoxSpan">Beginner</span> 
            <input id="beginner" type="checkbox" onClick={()=>this.props.handleCheck("beginner")}/>
            <span className="checkmark" />
          </label>

          <label className="check_container">
          <span className="checkBoxSpan">Intermediate</span> 
            <input id="intermediate" type="checkbox" onClick={()=>this.props.handleCheck("intermediate")}/>
            <span className="checkmark" />
          </label>
        </div>
        <div className="checkBox_container lastCheckBox">
          <label className="check_container">
          <span className="checkBoxSpan">Advanced</span> 
            <input id="advanced" type="checkbox"    onChange={()=>this.props.handleCheck("advanced")}/>
            <span className="checkmark" />
          </label>

          <label className="check_container">
          <span className="checkBoxSpan">Professional</span> 
            <input  id="professional" className="checkmark" type="checkbox" onClick={()=>this.props.handleCheck("professional")}/>
            <span className="checkmark" />
          </label>
        </div>
      </div>
    );
  }
}
