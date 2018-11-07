import React, { Component } from 'react';
import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng
} from 'react-places-autocomplete';

export default class LocationSearchInput extends Component {
	state = { address: '' };

	handleChange = async address => {
		await this.setState({ address });
		this.props.onChange(address);
	};

	handleSelect = address => {
		geocodeByAddress(address)
			.then(results => getLatLng(results[0]))
			.then(latLng => console.log('Success', latLng))
			.catch(error => console.error('Error', error));
	};

	render() {
		return (
			<PlacesAutocomplete
				value={this.state.address}
				onChange={this.handleChange}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<input
							{...getInputProps({
								placeholder: 'City',
								className: 'location-search-input  form-control'
							})}
						/>
						<div className="autocomplete-dropdown-container">
							{loading && <div>Loading...</div>}
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
