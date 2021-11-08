import React from 'react'
import './Header.css'


function Header() {
    return (
        <div className="navigation-wrapper">

            <div className="left-column">
                <div className="icon">
                    <i className="bi bi-phone"></i>
                </div>

                <div className="contact-hours-wrapper">
                    <div className="phone">
                        435 201 3329
                    </div>

                    <div className="hours">
                        dallynowens2@gmail.com
                    </div>

                </div>
            </div>


            <div className="center-column">
                <div className="banner-image text-center">
                    Dallyn Owens<br />
                    Portfolio
                </div>
            </div>

            <div class="right-column">
                <div class="gitHub-wrapper">
                    <a href="https://github.com/dallynowens2">
                        https://github.com/dallynowens2
                    </a>
                </div>

                <div class="contact-icon">
                    <a href="https://github.com/dallynowens2">
                        <i className="bi bi-folder"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Header
