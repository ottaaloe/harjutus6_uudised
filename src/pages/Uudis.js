import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import { contentfulClient } from '../App';

const Uudis = () => {
    const { newsId } = useParams();
    const [uudis, setUudis] = useState([]);
    console.log('news', newsId);
    useEffect(() => {
        contentfulClient.getEntry(newsId).then((response) => {
            console.log(response);
            setUudis(response.fields);
        });
    }, [])

    if (!uudis.title)
        return null
    else {

        return (
            <div style={{ 'max-width': '800px', 'xborder': '1px solid green', 'text-align': 'left' }} >

                <h3>{uudis.title}</h3>
                <img src={uudis.image.fields.file.url} style={{ width: '800px' }} />
                {<p style={{ 'white-space': 'pre-wrap' }}>{uudis.body}</p>}
                <Link to="/">Tagasi</Link>
            </div>
        );
    }
}

export default Uudis;
