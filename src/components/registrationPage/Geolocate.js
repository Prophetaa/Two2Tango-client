import React, { Component } from 'react';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng
} from 'react-places-autocomplete';

export default class LocationSearchInput extends Component {
	state = { city: '' };

	handleChange = async city => {
		await this.setState({ city });
		this.props.onChange(city);
	};

	handleSelect = city => {
		geocodeByAddress(city)
			.then(results => getLatLng(results[0]))
			.then(latLng => console.log('Success', latLng))
			.catch(error => console.error('Error', error));
	};

	render() {
		return (
			<PlacesAutocomplete
				value={this.state.city}
				onChange={this.handleChange}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
						required
							{...getInputProps({
								id:'geoLocate',
								placeholder: 'City *',
								className: 'location-search-input  form-control'
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
										<span onClick={this.handleSelect}>
											{suggestion.description}
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
