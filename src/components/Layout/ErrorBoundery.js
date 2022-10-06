import { Component } from 'react';
// if any erorr happen in production env led to crash the website
class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        };
    }
    componentDidCatch(error) {
        this.setState({
            hasError: true,
        });
    }
    render() {
        if (this.state.hasError) {
            return <p className='centered'>Somthing Went Wrong...</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
