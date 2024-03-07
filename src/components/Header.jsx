import React from 'react';
import personalImg from '../images/personal.png'


const Header = () => {
    return (
        <div id="home" style={{paddingTop: "4rem"}}>
            <div className='container header' >
                <div className='headerCenter'>
                    <div className='imgHeader'>
                        <img src={personalImg} className="imgHeaderCircle" />
                    </div>
                    <div>
                        <h1>Desarrollador Web</h1>
                    </div>
                    <div>
                        <h5 className='h5D' style={{position: "relative", zIndex: "99"}}>
                            Bogotá D.C, Colombia📍
                        </h5>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Header;