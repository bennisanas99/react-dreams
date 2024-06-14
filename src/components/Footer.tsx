import './Footer.css'

function Footer() {

    return (
        <>
            <header className='header-footer'>
                <div className="site-title">
                    <h1>Dreams</h1>
                </div>
                <div className="contact-info">
                    <div className="location">
                        <p className="text">Location</p>
                        <p className="light-text">Bologna, Italy</p>
                    </div>
                    <div className="contact">
                        <p className="text">Contact</p>
                        <p className="light-text"><a style={{ textDecoration: 'underline' }} href="mailto:email@example.com">bennisanas39&#64;gmail.com</a><br />(+39) 3279157277
                        </p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Footer