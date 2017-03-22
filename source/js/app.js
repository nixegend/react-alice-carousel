import React from 'react';
import AliceCarousel from './structure/react-alice-carousel';


export class App extends React.Component {
    _logCurrentSlideIndex(currentSlideIndex) {
        console.log('currentSlide: ', currentSlideIndex);
    }

    render() {
        const responsive = {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            960: {
                items: 3
            }
        };

        return (
            <div className="app">
                <h1 className="h1">React Alice Carousel</h1>
                <AliceCarousel
                    responsive={ responsive }
                    onSlideChange={this._logCurrentSlideIndex}
                >
                    <div className="item"><h1>1</h1></div>
                    <div className="item"><h1>2</h1></div>
                    <div className="item"><h1>3</h1></div>
                    <div className="item"><h1>4</h1></div>
                    <div className="item"><h1>5</h1></div>
                    <div className="item"><h1>6</h1></div>
                    <div className="item"><h1>7</h1></div>
                    <div className="item"><h1>8</h1></div>
                </AliceCarousel>
            </div>
        );
    }
}
