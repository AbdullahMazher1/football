import React from 'react'
import './Presidency.css'
import { FaCalendar, FaComment, FaUser } from 'react-icons/fa'
import { FaClapperboard } from 'react-icons/fa6'
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function News1() {
    return (
        <div className='presidency-outer'>
            <div className='presidency'>
                <img src='/club5.jpg' alt='club' className='im-club' />
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
                        <p> <b>This Saturday, September 28, 2024, the Olympique Football Club of Kinshasa was held in check by CS Bana N'djili, in a match played at 1:00 p.m. on the municipal field of Ndjili. Despite their victory on the first day, the men of president Yannick Situatala did not manage to confirm their good start to the season. </b> </p>
                        <p>Faced with an opponent used to this kind of confrontation, Olympique FC was unable to make the difference during a first half that was rich in action. In the 32nd minute, CS Bana N'djili even came close to opening the scoring with a penalty, which was ultimately missed.</p>
                    </div>

                    <div className='presidency-para'>
                        <p>
                            Despite the adjustments and the motivational speech of coach Serge Lofo at the break, the second half did not bring any significant changes, with very few chances on either side.
                        </p>
                        <p>
                            <b><i>The 0-0 score will remain unchanged until the final whistle, still offering an additional point to the Olympians, who now have 4 points after two rounds.

                            </i></b>
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

export default News1
