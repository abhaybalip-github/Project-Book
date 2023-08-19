import React from "react";
import ListItem from "./ListItem";

import './Styles/ListBox_style.css'

var count = 3
var list = [
    
]

export default class ListBox extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
            <>
                <div className="list-box">
                    <div className="list-title">Task - List </div>
                    <div className="box-menu">
                        <input className="menu-text" type="text" placeholder="Enter Task"></input>
                        <button className="menu-submit">Submit</button>
                    </div>
                    <div className="list">
                        {list.map(item => (
                            <ListItem id={item.id} title={item.title} />
                        ))}
                    </div>

                </div>
            </>
        )
    }
}