import React, {Component} from "react";


export default class Button extends Component {
    

    render(){
        const {onClick} = this.props;
        return (
            <button type="submit" className="Button" onClick={onClick}>Load more</button>
        )
    }
}