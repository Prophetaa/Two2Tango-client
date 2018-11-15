import React, { Component } from 'react';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng
} from 'react-places-autocomplete';

export default class LocationSearchInput extends Component {
	state = { city: `` };

	handleChange = async city => {
	await this.setState({ city: `${city.split(',',1)}` });
	};

	handleSelect = city => {
		geocodeByAddress(city)
			.then(results => getLatLng(results[0]))
	};

	handleCity = e =>{
		this.props.onClick(e)
	}


	render() {
		return (
			<PlacesAutocomplete
				value={this.state.city}
				onChange={this.handleChange}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								id:'geoLocate',
								placeholder: 'Select Cities *',
								className: 'location-search-input  form-control boxShaddow'
							})}
						/>	
						<div className="autocomplete-dropdown-container">
							{loading && <div>Loading names...</div>}
							{suggestions.map(suggestion => {
								const className = suggestion.active
									? 'suggestion-item--active'
									: 'suggestion-item';
								const style = suggestion.active
									? { backgroundColor: '#fafafa', cursor: 'pointer' }
									: { backgroundColor: '#ffffff', cursor: 'pointer' };
								return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className,
											style
										})}>
										<span onClick={this.handleCity}>
											{suggestion.description.split(",",1)}
										</span>
									</div>
									
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		);
	}
}
