import { Suspense, lazy } from 'react'
import './Booking.css'
import { Link } from 'react-router-dom'

function Booking() {

    const Footer = lazy(() => import('./Footer'))


    return (
        <>
            <header>
                <Link className="booking-back-home" to='/'><h1>Dreams</h1></Link>
            </header>
            <hr />
            <div className="body">
                <h1 className="richiedi-appuntamento">Richiedi un Appuntamento1</h1>
                <div className="form-container">
                    <form>
                        <div className="div-name-surname">
                            <div className="div-input">
                                <label htmlFor="first-name">Nome</label>
                                <input type="text" id="first-name" name="first-name" />
                            </div>
                            <div className="div-input" >
                                <label htmlFor="last-name">Cognome</label>
                                <input type="text" id="last-name" name="last-name" />
                            </div>
                        </div>
                        <div className="div-name-surname">
                            <div className="div-input" >
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div className="div-input" >
                                <label htmlFor="phone">Telefono</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                        </div>
                        <div className="div-input">
                            <label htmlFor="message">Messaggio</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button type="submit">Invia Messaggio</button>
                    </form>
                </div>
            </div>
            <Suspense fallback={<p>Loading footer component...</p>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default Booking