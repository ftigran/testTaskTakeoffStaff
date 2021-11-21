
import React, { Component } from "react";
import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const App = () => {
    return (
        <Carousel
            plugins={[
             {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: <button>as</button>,
                  arrowLeftDisabled:<button>qq</button>,
                  arrowRight: <button>qesda</button>,
                  arrowRightDisabled: <button>qdsa</button>,
                  addArrowClickHandler: false,
                }
              }
            ]}
            > 
            <h3>So</h3> 
            <h3>coca</h3> 
            <h3>Sso</h3> 

        </Carousel>
    )
}
export default App;
