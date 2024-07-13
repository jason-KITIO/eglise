import './bas.css'

import logo from '../logo.svg';
import svg from '../pictures/svg.svg';
import Rectangle from '../pictures/Rectangle.svg';
import instagram from '../pictures/instagram.svg';
import facebook from '../pictures/facebook.svg';
import Ellipse from '../pictures/Ellipse.svg';

import React, { useState } from 'react';

function Cart({ nom, photo, role }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className="hover-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                <div className="initial-div">
                    <img src={photo} />
                    <div>
                        <p>{nom}</p>
                        <span>{role}</span>
                    </div>
                </div>
            ) : (
                <div className="hover-div">
                    <p>{nom}</p>
                    <span>{role}</span>
                </div>
            )}
        </div>
    )
}
function Titre({ titre, sousTitre }) {
    return (
        <div className='titre'>
            <p>{titre}</p>
            <span>{sousTitre}</span>
        </div>
    )
}
const ImageOverlay = ({ Photo, texte, sousTexte }) => {
    return (
        <div className="image-container">
            <img
                src={Photo}
                alt="Background"
                className="background-image"
            />
            <div className="overlay">
                <p>{texte}</p>
                <span>{sousTexte}</span>
            </div>
        </div>
    );
};

function Block({ photo, titre, sousTitre }) {
    return (
        <div className='block'>
            <img src={photo} />
            <p>{titre}</p>
            <span>{sousTitre}</span>
        </div>
    )
}
function Bas() {
    return (
        <div className="bas">
            <Titre titre='NOTRE PERSONNELLES' sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
            <div className='cart'>
                <Cart nom="Abbé Bienvenu SONNA" photo={logo} role="VICAIRE" />
                <Cart nom="Abbé Paul Claver NOA NTEME" photo={logo} role="VICAIRE" />
                <Cart nom="Abbé Antoine Babe" photo={logo} role="VICAIRE" />
                <Cart nom="Mme Anne Brigitte TIENTCHEU" photo={logo} role="Secrétaire" />
                <Cart nom="Mme Paulivette POUALEU" photo={logo} role="Comptable" />
            </div>
            <Titre titre={'NOTRE BERGER'} sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
            <div className='image'>
                <ImageOverlay Photo={logo} texte={'Abbé Micheal Auguste TCHOUMBOU'} sousTexte={'Curé et Vicaire Episcopal'} />
                <ImageOverlay Photo={Rectangle} texte={'Abbé Micheal Auguste TCHOUMBOU'} sousTexte={'Curé et Vicaire Episcopal'} />
                <ImageOverlay Photo={logo} texte={'Abbé Micheal Auguste TCHOUMBOU'} sousTexte={'Curé et Vicaire Episcopal'} />
            </div>
            <div className='annonce'>
                <img src={svg} />
                <p>ANNONCES</p>
            </div>
            <div className='annonce-block'>
                <Block photo={logo} titre={'TITRE'} sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
                <Block photo={logo} titre={'TITRE'} sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
                <Block photo={logo} titre={'TITRE'} sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
                <Block photo={logo} titre={'TITRE'} sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
                <Block photo={logo} titre={'TITRE'} sousTitre={'Nous remercions notre personnel pour son travail et son denouement que le seigneur veils sur nous.'} />
            </div>
            <footer>
                <div className='haut'>
                    <div className='gauche'>
                        <img src={Ellipse} />
                        <div>
                            <p>English</p>
                            <p>Privacy</p>
                            <p>Legal</p>
                        </div>
                        <div>
                            <img src={facebook} />
                            <img src={instagram} />
                        </div>
                    </div>
                    <div className='droite'>
                        <p>Join Our Newsletter</p>
                        <span>Be the first to know about our latest updates, exclusive offers, and more.</span>
                        <div className='input'>
                            <input type='text' placeholder='Enter your email'/>
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>
                <div className='bas'>
                    <div>
                        <p>English</p>
                        <p>Privacy</p>
                        <p>Legal</p>
                    </div>
                    <p>© 2024 DECODE All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Bas;