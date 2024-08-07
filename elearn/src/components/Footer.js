import React from 'react';

const Footer = () => (
    <footer className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, City, Country</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light me-1" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light me-1" href="#"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light me-1" href="#"><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light me-0" href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <a className="btn btn-link" href="#">About Us</a>
                    <a className="btn btn-link" href="#">Contact Us</a>
                    <a className="btn btn-link" href="#">Our Services</a>
                    <a className="btn btn-link" href="#">Privacy Policy</a>
                    <a className="btn btn-link" href="#">Terms & Conditions</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Popular Links</h5>
                    <a className="btn btn-link" href="#">About Us</a>
                    <a className="btn btn-link" href="#">Contact Us</a>
                    <a className="btn btn-link" href="#">Our Services</a>
                    <a className="btn btn-link" href="#">Privacy Policy</a>
                    <a className="btn btn-link" href="#">Terms & Conditions</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Newsletter</h5>
                    <p>Subscribe to our newsletter for the latest updates and offers.</p>
                    <div className="position-relative w-100">
                        <input className="form-control border-0" type="text" placeholder="Your email" />
                        <button type="button" className="btn btn-primary position-absolute top-0 end-0 mt-1 me-1" style={{backgroundColor: '#fb873f'}}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
