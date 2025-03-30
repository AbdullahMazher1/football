import React from 'react'
import './PresidencyStory.css'

function PresidencyStory() {
    return (
        <div className='presidency-story'>
            <h1 className='presidency-head'>
                Nasser Al-Khelaïfi is one of the leading figures in the world of sport, entertainment, media and business.
            </h1>
            <div className='presidency-story-grid'>
                <div className='pages-para'>
                    <p>
                        Since 2011, Mr Al-Khelaïfi has been the President of Paris Saint-Germain Football Club (PSG), following his appointment as Chairman of Qatar Sports Investments (QSI) and its acquisition of the French football club that year. Additionally, Mr Al-Khelaïfi sits on the board of the French Professional League (LFP).
                    </p>
                    <p>
                        Mr Al-Khelaïfi is a member of the UEFA Executive Committee, currently serving his second term, after being elected by the European Club Association (ECA) as Chairman in April 2021, representing more than 500 professional football clubs of Europe.
                    </p>
                    <p>
                        On top of his leading roles within sport, Nasser Al-Khelaïfi is the Group Chairman of beIN MEDIA GROUP, the international sports, entertainment and media group operating in more than 40 countries worldwide. It was under Mr Al-Khelaïfi’s management that beIN acquired MIRAMAX, the famed Hollywood film and television studio, of which Al-Khelaïfi is Chairman; and also Digiturk, Türkiye’s largest sports and entertainment platform, of which Al-Khelaïfi is Chairman.
                    </p>
                    <p>
                        Nasser Al-Khelaïfi is also a board member of Qatar’s sovereign wealth fund, Qatar Investment Authority (QIA), while also being a Minister of State of Qatar.
                    </p>
                    <p>
                        In the world of racket sports, Nasser Al-Khelaïfi is the President of the Qatar Tennis, Squash and Badminton Federation, and oversees the country’s two biggest tennis tournaments (ATP and WTA) each year. Mr Al-Khelaifiis also Chairman of Premier Padel, the leading professional tour in padel – one of the world’s fastest growing sports. Mr Al-Khelaïfi was a world ranked professional tennis player for many years and represented his country in the Davis Cup.
                    </p>
                </div>
                <div className='story-next'>
                    <img src='/president.jpg' alt='president' className='im-president' />
                    <div className='presidency-right-container'>
                        <h2>
                            Nasser Al-Khelaïfi
                        </h2>
                        <div className='pages-para'>
                            <p>
                                Born 12 November 1973 in Doha, Ad Dawdah (Qatar).
                            </p>
                            <p>
                                → President of Paris Saint-Germain;
                            </p>
                            <p>
                                → Chairman BeIn Media Group;
                            </p>
                            <p>
                                → Chairman of QSI;
                            </p>
                            <p>
                                → Chairman of ECA;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                <p className='pages-para'>
                    Nasser Al-Khelaïfi is a global ambassador for The Youth Sports Games, founded in 1996 to enable children to participate in organised sporting events and other free activities. He is the Chairman of the PSG Foundation which supports disadvantaged and sick children, as well as young people and communities in difficulty. Since 2022 he has been a Member Friend of the United Nations (UN) Secretary-General’s Special Envoy for Road Safety.
                </p>
            </div>
            <div className='president-says'>
                <hr className='line-pr'></hr>
                <div>
                    <p className='president-para-main'>
                        « Paris is one of the greatest cities in the world and my aim as President has been to build a club that the city deserves. We are now one of the leading sporting institutions internationally – both on and off the pitch – while always placing our local community at the heart of everything we do. I am very proud of what we have collectively achieved at PSG in such a short time – for our fans and for our wider community – and I’m excited for our future ahead. »
                    </p>
                    <p className='pre-name'>
                        Nasser Al-Khelaïfi
                    </p>
                    <p className='pre-add'>
                        President and chief executive officer of Paris Saint-Germain
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PresidencyStory
