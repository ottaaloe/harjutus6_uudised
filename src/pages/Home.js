import React from "react";
import { Link } from "react-router-dom";
import { UUDISED } from '../andmed.js';

const Home = () => {
    return (
        <div>
            <h1>Uudised</h1>
            <div style={{ display: 'flex', 'flex-direction': 'row' }}>
                {UUDISED.map((uudis) => (

                    <div id={uudis.id}>
                        <Link to={`/uudis?id=${uudis.id}`} >
                            <div style={{ width: '250px', padding: '5px' }}>
                                <img src={uudis.pildiURL} style={{ width: '100%', padding: '5px' }} />
                                <div>{uudis.pealkiri}</div>
                            </div>
                        </Link>
                    </div>


                ))}
            </div>
        </div>
    );
}

export default Home;