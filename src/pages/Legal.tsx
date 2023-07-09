import React from 'react';
import './Legal.css';
import Privacy from '../components/ui/Privacy'
import Terms from '../components/ui/Terms'

const Legal: React.FC = () => {
    return(
        <>
            <Privacy />
            <Terms />
        </>
    )
}

export default Legal;