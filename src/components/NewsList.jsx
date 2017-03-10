import React from 'react';

import './NewsList.css';

let NewsList = class NewsList extends React.Component {
    render () {
        return (
            <div className="col-md-24">
                <section id="news-block">
                    <h2>Latest news</h2>
                    <table className="table" cellPadding={0} cellSpacing={0}>
                        <tbody>

                        <tr>
                            <td>
                                <div className="news-item">
                                    <ul>
                                        <li>
                                            <div className="new-item-head clearfix">
                                                <h3>Welocome my dear friend</h3>
                                                <time>Posted at: 12.03.2016 at 12.33</time>
                                            </div>
                                        </li>
                                        <li className="item-content clearfix">
                                            <p>
                                                <img src={require('../styles/images/example-imgs/1.jpg')} width="80" alt="" />
                                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="pan">
                                        <a href="#">
                                            &nbsp;Full item
                                            <i className="fa fa-caret-down" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="news-item">
                                    <ul>
                                        <li>
                                            <div className="new-item-head clearfix">
                                                <h3>My best friend</h3>
                                                <time>Posted at: 12.03.2016 at 12.33</time>
                                            </div>
                                        </li>
                                        <li className="item-content clearfix">
                                            <p>
                                                <img src={require('../styles/images/example-imgs/2.jpg')} width="80" alt="" />
                                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="pan">
                                        <a href="#">
                                            &nbsp;Full item
                                            <i className="fa fa-caret-down" aria-hidden="true"/>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className="news-item">
                                    <ul>
                                        <li>
                                            <div className="new-item-head clearfix">
                                                <h3>My best summer</h3>
                                                <time>Posted at: 12.03.2016 at 12.33</time>
                                            </div>
                                        </li>
                                        <li className="item-content clearfix">
                                            <p>
                                                <img src={require('../styles/images/example-imgs/3.jpg')} width="80" alt="" />
                                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                Eveniet minus nulla possimus quis sequi. Dolorum exercitationem fugit
                                                iusto nobis provident quidem ratione voluptates.
                                                Accusamus, magni maiores minima qui totam velit?
                                                </span>
                                            </p>
                                        </li>
                                    </ul>
                                    <div className="pan">
                                        <a href="#">
                                            &nbsp;Full item
                                            <i className="fa fa-caret-down" aria-hidden="true"/>
                                        </a>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        </tbody>

                        <tfoot>
                        <tr>
                            <td>
                                <div className="row">
                                    <div className="col-md-24 text-center">
                                        <div className="pagination">
                                            <ul className="pagination">
                                                <li><a href="#">&laquo;</a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li><a href="#">&raquo;</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tfoot>

                    </table>
                </section>
            </div>
        )
    }
};

export default NewsList;