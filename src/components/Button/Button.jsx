import React, {Component} from "react";


export default class Button extends Component {
    

    render(){
        return (
            <button type="submit" className="Button" onClick={console.log('ddd')}>Load more</button>
        )
    }
}