import React, { Component } from 'react'
import * as noUiSlider from 'nouislider'

export default class Slider extends Component {
  
   async componentDidMount(){
        let slider = await document.getElementById('slider');
		await noUiSlider.create(slider, {
    start: [20, 80],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});
    }
    render() {
    return (
      <div id="slider">
        
      </div>
    )
  }
}
