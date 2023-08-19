import React from "react";
import './Styles/ListItem_style.css';

export default class ListItem extends React.Component{
    constructor({id,title}){
        super()
        this.title = title
        this.id = id
    }
    render(){
        return(
            <>
            <div className="list-item">
                <div className="item-title">{this.id}. {this.title}</div>
                <div className="item-menu"><img src=""></img></div>
            </div>
            </>
        )
    }
}