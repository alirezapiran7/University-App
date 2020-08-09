import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false
        }
    }
    
    static getDerivedStateFromError(error) {
        // process the error
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }

    render() {
        if(this.state.hasErrored) {
            return (
                <div className='error-boundary'>
                    <i class="fas fa-exclamation-triangle fa-4x text-danger"></i>
                    <h1>Ocorreu um erro inesperado, por favor, tente novamente mais tarde.</h1>
                    <p>Entre em contato com a gente e informe o que aconteceu, ajeitaremos o erro o quanto antes.</p>
                </div>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;