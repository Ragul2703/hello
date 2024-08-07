import React from 'react';

const Contact = () => (
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title bg-white text-center px-3">Contact Us</h6>
                <h1 className="mb-5" style={{ color: '#fb873f' }}>Get In Touch</h1>
            </div>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
                    <form>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '150px' }}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn py-3 px-5" type="submit" style={{backgroundColor: '#fb873f', color: 'white'}}>Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default Contact;
