import React from 'react';
import './ListItem_Style.css';

export default class ListItem extends React.Component{
    constructor({title,desc}){
        super()
        this.title = title
        this.desc = desc
    }
    render(){
        return(
            <>
            <div className='list-item'>
                <div className='item-title'>{this.title}</div>
                <div className='item-desc'>{this.desc}</div>
                <div className='item-button'>
                    <div className='item-cancel'></div>
                    <div className='item-done'></div>
                </div>
            </div>
            </>
        )
    }
}