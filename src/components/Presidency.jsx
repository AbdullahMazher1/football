import React from 'react'
import './Presidency.css'
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa'
import { FaClapperboard } from 'react-icons/fa6'
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Presidency() {
    return (
        <div className='presidency-outer'>
            <div className='presidency'>
                <img src='/person.jpg' alt='club' className='im-club' />
                <div className='presidency-bottom'>
                    <div className='presidency-row'>
                        <div className='current-row-item'>
                            <FaCalendar className='row-icon' />
                            <p className='row-para'>12th September, 2025</p>
                        </div>
                        <div className='current-row-item'>
                            <FaUser className='row-icon' />
                            <p className='row-para'>By OFCK</p>
                        </div>
                        <div className='current-row-item'>
                            <FaClapperboard className='row-icon' />
                            <p className='row-para'>Le Club</p>
                        </div>
                        <div className='current-row-item'>
                            <FaComment className='row-icon' />
                            <p className='row-para'>Comments</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='presidency-para'>
                        <p> <b>Entame réussie pour l’Olympique Football Club de Kinshasa au championnat de l’Entente Urbaine de Football de Kinshasa Tshangu première division. Les Olympiens ont battu au bout du bout la formation de Saint Martin, 1-0, au terrain Municipal de Ndjili, ce samedi 21 septembre. Un motif de satisfaction pour le comité directeur même si, pour le coach, il y a encore un chantier. </b> </p>
                        <p>Faisant son entrée en compétition ce samedi face à l’équipe de Saint Martin, L’équipe chère aux président Yannick Situatala s’est offert une victoire pour bien démarrer la saison. 1 but à zéro devant Saint Martin.

                            Un match très compliqué pour les Olympiens, mais la victoire est un motif de satisfaction pour Caleb Kalala, vice-président du club, qui n’a pas manqué de félicité ces joueurs. </p>
                    </div>
                    <div className='speech'>
                        <p>
                            <span className="big-quotes">“</span> Malgré les conditions difficiles, on est content et fière de nos joueurs pour leur prestation; ce n’est que le début. Nous les félicitons pour la victoire et nous espérons qu’au fur des matchs ils vont d’améliorer. C’était notre premier match officiel, rien n’était facile <span className="big-quotes">”</span>
                        </p>
                    </div>

                    <div className='presidency-para'>
                        <p>
                            Serge Lofo Bongeli, entraîneur principal des Olympiens, n’a pas encore eu l’équipe de ces rêves, mais compte faire le nécessaire pour rencontrer les objectifs du club.
                        </p>
                        <p>
                            <b><i>Il y avait un peu de déchets techniques, mais c’est notre premier match… on va continuer à travailler. Il n’y aura pas de match facile pour nous, mais on va prendre match par match</i></b>
                        </p>
                    </div>
                </div>

            </div>
            <div className="presidency-sidebar">
                {/* Search Bar */}
                <h2>Search</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FaSearch className="search-icon" />
                </div>

                {/* Recent Posts Section */}
                <h2>Recent Posts</h2>
                <div className="sidebar-links">
                    {[
                        "L’OFCK bat l’As Vaillants Héros 2-0.",
                        "Football Eufkin Tshangu 1ère division – OFCK vs Bana Nd’jili",
                        "Vice-président de l’OFCK « Nous sommes fiers de nos joueurs",
                        "L’OFCK ouvre la saison avec une belle victoire face à Saint-Martin.",
                        "Serge Lofo Bongeli est le nouvel entraîneur de l’OFCK."
                    ].map((post, index) => (
                        <p key={index}>{post}</p>
                    ))}
                </div>

                {/* Recent Comments */}
                <h2>Recent Comments</h2>
                <p>No comments to show.</p>

                {/* Social Media Links */}
                <h2>Follow Us</h2>
                <div className="social-links">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                </div>
            </div>
        </div>
    )
}

export default Presidency
