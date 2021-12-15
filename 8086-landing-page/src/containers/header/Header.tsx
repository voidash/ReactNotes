import React from 'react'
import './header.scss';
import people from '../../assets/people.png';
import ai from '../../assets/chip.svg';

const Header = () => {
    return (
        <div>
            <div className="gpt3__header section__padding" id="home">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text">
                        Top Notch 8086 emulator on Browser 
                    </h1>
                    <p>Built with Rust and served through Web assembly, all web interface built on React; prepare yourself to write code virtually.</p>
                    <div className="gpt3__header-content__input">
                        <input type="email" placeholder="Your email Address"/>
                        <button>Get Started</button>
                    </div>
                    <div className="gpt3__header-content__people">
                        <img alt="people" src= {people}/>
                        <p>23 requested access a visit in last 24 hours</p>
                    </div>
                </div>

                    <div className="gpt3__header-image">
                        <img src={ai} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Header;
