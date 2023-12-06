import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { contentfulClient } from '../App';

const Home = () => {
    const [uudised, setUudised] = useState([]);

    useEffect(() => {
        contentfulClient.getEntries().then((response) => {
            console.log('getEntries', response.items);
            setUudised(response.items);
        });
    }, [])

    return (
        <div>
            <h1>Uudised</h1>
            <div style={{ display: 'flex', 'flexDirection': 'row' }}>
                {uudised.map((uudis) => (

                    <div id={uudis.fields.id}>
                        <Link to={`/uudis/${uudis.sys.id}`} >
                            <div style={{ width: '250px', padding: '5px' }}>
                                <img src={uudis.fields.image.fields.file.url} alt={uudis.fields.image.fields.title} style={{ width: '100%', padding: '5px' }} />
                                <div>{uudis.fields.title}</div>
                            </div>
                        </Link>
                    </div>


                ))}
            </div>
        </div>
    );
}

export default Home;