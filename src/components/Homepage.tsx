import { Link, BrowserRouter as Router } from 'react-router-dom'
import './style.css'

function Homepage() {

    return (
        <div className='homepage-container'>
            <header>
                <h1>Dreams</h1>
                <nav>
                    <ul>
                        <li><Link className="button" to='/Booking'>Prenota un appuntamento</Link></li>
                    </ul>
                </nav>
            </header>
            <hr />
            <section className="header-section">
                <div className="container">
                    <h1>Benvenuto su Dreams</h1>
                    <p>Creiamo e gestiamo siti web e applicazioni, offrendo anche supporto per il marketing digitale e l'analisi dei dati.</p>
                    <p>Lascia che il tuo business cresca online con soluzioni complete e personalizzate.</p>
                </div>
            </section>
        </div>
    )
}

export default Homepage
