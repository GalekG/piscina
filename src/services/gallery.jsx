import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class Gallery extends Component {
    render() {
        return (
            <Carousel autoFocus={true} autoPlay={true} dynamicHeight={true} infiniteLoop={true} emulateTouch={true}>
                <div>
                    <img src="https://comidatipica.co/wp-content/uploads/2020/05/sancocho-de-gallina-colombia.jpg" alt="Sancocho de Gallina" />
                    <p className="legend">Sancocho de gallina</p>
                </div>
                <div>
                    <img src="https://www.ahumador.fun/wp-content/uploads/2020/12/ahumar-costillas-3-2-1-1024x512.jpeg" alt="Costilla de cerdo ahumado" />
                    <p className="legend">Costilla de cerdo ahumado</p>
                </div>
                <div>
                    <img src="https://img-global.cpcdn.com/recipes/505b18825f70606a/680x482cq70/trucha-ahumada-en-mini-chulengo-foto-principal.jpg" alt="Trucha ahumada" />
                    <p className="legend">Trucha ahumada</p>
                </div>
                <div>
                    <img src="https://antojandoando.com/wp-content/uploads/2016/01/viudo-pescado-feat-pq.jpg" alt="Sancocho de pescado" />
                    <p className="legend">Sancocho de pescado</p>
                </div>
                <div>
                    <img src="https://scontent.fvgz1-1.fna.fbcdn.net/v/t1.6435-9/76776538_509425466275250_2894942308375986176_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGT5Ogs0HFL3QmowCaiGTQ6h7vhr2M5rY-Hu-GvYzmtj74PuWV2YveGMtLl4Lkkjn7Z0RA5dMglvEqLoVhvdVkb&_nc_ohc=lPv7g7YKzFoAX_zSJ5u&_nc_ht=scontent.fvgz1-1.fna&oh=00_AfB_2DYkC2m-FhvP3E9zWWYsWNr8gMoQ20YfgHPmeRmocQ&oe=6380F6F3" alt="Carne de res ahumada" />
                    <p className="legend">Carne de res ahumada</p>
                </div>
            </Carousel>
        );
    }
};
