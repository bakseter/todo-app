import React from 'react';

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './addTodo.scss';

export default class AddTodo extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    handleClick = () => {
        const text = this.state.text;
        this.props.onAddClick(text);
        this.setState({
            text: ''
        });
    };

    updateValue = ( evt ) => {
        this.setState({
            text: evt.target.value
        });
    };

    render() {
        const { text } = this.state;
        
        return (
            <div className="container">
                <input
                    type="form"
                    classname="input-field"
                    value={text}
                    placeholder="todo..."
                    onChange={this.updateValue}
                />
                <button onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faPlus} /> 
                </button>
            </div>
        );
    }
}
