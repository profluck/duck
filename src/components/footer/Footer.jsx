import React from 'react';

import './Footer.css';

let Footer = class Footer extends React.Component {
    render () {
        return (
            <footer id="footer">
                <div className="row">
                    <div className="col-md-24">
                        <div className="col-md-5 col-sm-8 col-xs-10">
                            <div className="left-foot-content">
                                <img src={ require('../../styles/images/footer-duck(x1)-optimized.png') } className="img-responsive" width="180" alt="Footer duck image" />
                            </div>
                        </div>
                        <div className="col-md-19 col-sm-16 col-xs-14 cust-relative">
                            <div className="notes text-center">
                                <p className="copyright">
                                    Copyright <i className="fa fa-copyright"/> All Rights Reserved
                                </p>
                                <p className="author">
                                    Created by Arthr Danko&nbsp;
                                    <a target="_blank" href="https://github.com/profluck/news-test-project">https://github.com/profluck/news-test-project</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
};

export default Footer;