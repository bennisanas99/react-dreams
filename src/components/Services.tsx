import './Service.css';
import app from '../assets/app.png';
import seo from '../assets/seo.png';
import website from '../assets/website.png';
import google_analytics from '../assets/google_analytics.png';
import nlp from '../assets/nlp.png';

function Homepage() {

    return (
        <>
            <div className='services-container-page'>
                <div className="title-section">
                    <div className="title-container">
                        <hr />
                        <span className="tit">Rafforza La Tua Presenza</span>
                        <hr />
                    </div>
                </div>
                <div className="services-info-container">
                    <div className="info">
                        <div className="services-container">
                            <div className="cards">
                                <img src={website} width="300" height="300" alt="create website"
                                    className="services-info-images" />
                                <p className="title">Creazione Professionale Di Siti Web</p>
                                <p>Trasforma la tua presenza online con un sito web professionale e curato, sempre aggiornato per
                                    rappresentare al meglio il tuo marchio.</p>
                            </div>
                            <div className="cards">
                                <img src={seo} width="300" alt="manage seo" height="300"
                                    className="services-info-images" />
                                <p className="title">Posizionamento Siti Web</p>
                                <p>Aumenta la tua visibilità e attira più traffico con i nostri servizi SEO, progettati per garantire il
                                    tuo
                                    posizionamento sulla prima pagina di Google.</p>
                            </div>
                            <div className="cards">
                                <img src={google_analytics} alt="manage google analytics" width="300" height="300"
                                    className="services-info-images" />
                                <p className="title">Ottimizzazione Strategia Di Marketing</p>
                                <p>Sblocca il potere dei dati con il nostro supporto completo di Google Analytics, offrendoti preziose
                                    intuizioni per ottimizzare la tua strategia di marketing e aumentare il tuo ROI.</p>
                            </div>
                            <div className="cards">
                                <img src={app} alt="create mobile app" width="300" height="300"
                                    className="services-info-images" />
                                <p className="title">Creazione Di Applicazioni</p>
                                <p>Con una vasta esperienza nella creazione di applicazioni su misura, siamo in grado di sviluppare
                                    soluzioni digitali che rispondono perfettamente a tutte le tue esigenze.</p>
                            </div>
                            <div className="last-card">
                                <img src={nlp} alt="nlp mental coaching" width="300" height="300"
                                    className="services-info-images" />
                                <div className="last-texts">
                                    <p className="title">Sessione Di Mental Coaching</p>
                                    <p>Sblocca il tuo pieno potenziale con il nostro servizio di mental coaching professionale, guidato
                                        da
                                        un esperto con una licenza avanzata. Scopri tecniche comprovate per migliorare la tua mente,
                                        aumentare la tua resilienza e raggiungere i tuoi obiettivi con sicurezza e chiarezza.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage