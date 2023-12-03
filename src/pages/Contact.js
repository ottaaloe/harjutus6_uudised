//import { useLocation } from 'react-router-dom'

const Contact = () => {
    //const location = useLocation();
    //const uudis = location.state

    const kontaktid = [
        {
            'title': 'Toimetus',
            'content': 'Helista meie toimetusse, kui Sul on küsimusi või ettepanekuid meie poolt avaldatud sisu osas, nt uudised, artiklid, podcastid, videod. ',
            'contact': '+372 669 8030'
        },
        {
            'title': 'Äriklienditeenindus',
            'content': 'Ärikliendid saavad oma tellimuse osas abi äriklienditeeninduselt.',
            'contact': '+372 680 4567'
        },

    ]


    return (
        <div>
            <h1>Kontakid</h1>
            <div>
                {kontaktid.map((kontakt) => (
                    <div>
                        <h2>{kontakt.title}</h2>
                        <h3>{kontakt.content}</h3>
                        <h4>{kontakt.contact}</h4>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Contact;