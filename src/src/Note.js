import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './note.css'

class Note extends Component {

    handleonClickDelete = (e) => {
        this.props.delete(this.props.index)
    }


    render() {
        const title = this.props.title;
        const content = this.props.content;

        return (
            <div className="Note col s12 m4 l3">
                <div className="DeleteBtn">
                    <div className="DeleteBtn btn-floating btn-large">
                        <i onClick={this.handleonClickDelete} id="Icon" className="material-icons">delete</i>

                    </div>
                </div>

                    <div className='card yellow lighten-4'>
                        <span className="card-title">Title: {title}</span>
                        <p><div className='card-content black-text'>{content}</div>
                        </p>
                    </div>
                </div>
        )
    }
}


export default Note