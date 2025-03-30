import React from 'react'
import './Presidency.css'
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa'
import { FaClapperboard } from 'react-icons/fa6'
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function News3() {
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
                        <p> <b>On the Etso field in the commune of N'djili, the Olympique Football Club of Kinshasa returned to winning ways in the most beautiful way, winning 2-0 against AS Vaillants Héros on the 4th day of the urban championship of Tshangu. </b> </p>
                        <p>Coach Serge Lofo's men had to put an end to a series of games without a win, and they answered the call. Motivated by the speech of president Yannick Situatala, the Olympians gave their opponents no chance. </p>
                    </div>
                    <div className='speech'>
                        <p>
                            <span className="big-quotes">“</span> Malgré les conditions difficiles, on est content et fière de nos joueurs pour leur prestation; ce n’est que le début. Nous les félicitons pour la victoire et nous espérons qu’au fur des matchs ils vont d’améliorer. C’était notre premier match officiel, rien n’était facile <span className="big-quotes">”</span>
                        </p>
                    </div>

                    <div className='presidency-para'>
                        <p>
                            It took only 17 minutes for Mbiyavanga to open the scoring and give his team the lead. (1-0)

                            After the break, OFC Kinshasa returned to the field with the same attacking intentions. In the 67th minute, Mbiyavanga scored a second goal, sealing the victory for his team. (2-0)
                        </p>
                        <p>
                            <b><i>The smile was on the faces of the technical staff and the sports committee, present for this match, with the certainty that this victory will revive the team for the next few days.

                                Thanks to this success, OFC Kinshasa now has 8 points in 4 games.</i></b>
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

export default News3
