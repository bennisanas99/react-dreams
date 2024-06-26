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
            <div className="booking-body">
                <h1 className="richiedi-appuntamento">Richiedi un Appuntamento</h1>
                <div className="form-container">
                    <form action="https://formsubmit.co/bennisanas39@gmail.com" method="POST">
                        <div className="div-name-surname">
                            <div className="div-input">
                                <label htmlFor="first-name">Nome</label>
                                <input type="text" id="first-name" name="name" required/>
                            </div>
                            <div className="div-input" >
                                <label htmlFor="last-name">Cognome</label>
                                <input type="text" id="last-name" name="surname" required/>
                            </div>
                        </div>
                        <div className="div-name-surname">
                            <div className="div-input" >
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" pattern='/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g' required/>
                            </div>
                            <div className="div-input" >
                                <label htmlFor="phone">Telefono</label>
                                <input type="tel" id="phone" name="phone" pattern='/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g' required/>
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