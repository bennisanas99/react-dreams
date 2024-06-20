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
                        <p className="light-text"><a style={{ textDecoration: 'underline' }} href="mailto:bennisanas39@gmail.com">bennisanas39&#64;gmail.com</a></p>
                        <p className='light-text'><a style={{ textDecoration: 'underline' }} href="tel:+393279157277">+39 3279157277</a></p>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Footer