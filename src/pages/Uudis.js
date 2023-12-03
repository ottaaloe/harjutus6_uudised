import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { UUDISED } from '../andmed.js';

const Uudis = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    console.log(id);
    const uudis = UUDISED[id];

    return (
        <div style={{ 'max-width': '800px', 'border': '1px solid green', 'text-align': 'left' }} >
            <h3>{uudis.pealkiri}</h3>
            <img src={uudis.pildiURL} style={{ width: '800px' }} />
            <p>{uudis.sisu}</p>
            <Link to="/">Tagasi</Link>
        </div>
    );
}

export default Uudis;
