import React, { Component } from 'react';

class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		if (error) {
			this.setState({hasError: true})
		}
	}

	render() {
		if(this.state.hasError) {
			return <h1>Oooops. There is an error</h1>
		}
		return this.props.children
	}
}

export default ErrorBoundary;