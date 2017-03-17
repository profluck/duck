import React from 'react';
import './NewsList.css';

class NewsList extends React.Component {

    render() {

        //console.log("RENDER LIST NEWS");

        let list = '';

        if(this.props.listItems.length > 0) {
            list = this.props.listItems.map( function(item, i) {

                return (
                    <tr key={item.id}>
                        <td>
                            <div className="news-item">
                                <ul>
                                    <li>
                                        <div className="new-item-head clearfix">
                                            <h3> {item.title} </h3>
                                            <time>Posted at: {item.post_date} </time>
                                        </div>
                                    </li>
                                    <li className="item-content clearfix">
                                        <p>
                                            <img src={item.image} width="80" alt={item.title} />
                                            <span> {item.text} </span>
                                        </p>
                                    </li>
                                </ul>
                                <div className="pan">
                                    <a href="#">
                                        Full item &nbsp;
                                        <i className="fa fa-caret-down" aria-hidden="true"/>
                                    </a>
                                </div>
                            </div>
                        </td>
                    </tr>
                );
            });
        }
        else {
            list = <tr><td className="not-found"><b>Sorry, but nothing is not found!</b></td></tr>;
        }

        return (
            <div className="col-md-24">
                <section id="news-block">
                    <h2>Latest news</h2>
                    <table className="table" cellPadding={0} cellSpacing={0}>
                        <tbody>
                        { list }
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default NewsList;