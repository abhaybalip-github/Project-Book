import React from 'react';
import ListItem from './ListItem';
import './ListBox_style.css';

function getItem(title,desc){
    return({
            t: title,
            d: desc
        })
}

var my_list = [
    getItem('1',''),
    getItem('2',''),
    getItem('3',''),
    getItem('4',''),
    getItem('5',''),

]

export default class ListBox extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <div className='list-head'>
                List-Head
            </div>
            <div className='list-box'>
                {my_list.map(function(item){
                    return(
                        <ListItem title={item.t} desc={item.d}/>
                    )
                })}
            </div>
            </>
        )
    }
}