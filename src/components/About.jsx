import React from 'react';

const About = () => {
    return (
        <div>
            <div className="about-container">
                <div className="mockup mockup-macbook loaded opened">
                    <div className="part top">
                        <img
                            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg"
                            alt=""
                            className="top"
                        />
                        <img
                            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
                            alt=""
                            className="cover"
                        />
                        
                        <video autoPlay>
                            <source
                                src="https://d1xm195wioio0k.cloudfront.net/images/video/support.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="part bottom">
                        <img
                            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg"
                            alt=""
                            className="cover"
                        />
                        <img
                            src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg"
                            alt=""
                            className="bottom"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
