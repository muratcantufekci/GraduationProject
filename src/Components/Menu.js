import React from 'react';
import Fancybox from './FancyBox';


function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <div className="item-con" key={item.id}>
                        <div >
                            <Fancybox>
                                <a className="item-container" data-fancybox="gallery" href={item.image}>
                                <img  src={item.image} alt=""/> 
                                </a>
                            </Fancybox>
                            <h2>Step : {item.stepSize}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;