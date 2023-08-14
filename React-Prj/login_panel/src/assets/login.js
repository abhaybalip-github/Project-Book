import React from 'react';
export default class Login extends React.Component{
    constructor(){
        super()
        this.main_panel_style = {
            'border': '1px solid black',
            'border-radius': '10px',
            'height': '40vh',
            'width': '50vh',
            'text-align': 'center',
            'padding': '5vh 0vh 0vh 0vh',
            'position': 'absolute',
            'transform': 'translate(-50%, -50%)',
            'top': '50%',
            'left': '50%'
        }
        this.input_panel_style = {
            'height': '5vh',
            'width': '40vh',
            'border-radius': '10px',
            'position': 'absolute',
            'top': '10vh',
            'left': '5vh',
        }
        this.pass_panel_style = {
            'height': '5vh',
            'width': '40vh',
            'border-radius': '10px',
            'position': 'absolute',
            'top': '25vh',
            'left': '5vh',
        }
        this.pass_word_style = {
            'position': 'absolute',
            'top': '20vh',
            'left': '50%',
            'transform': 'translate(-50%)',
            'align': 'center'
        }
        this.button_style = {
            'height': '4vh',
            'width': '7.5vh',
            'position': 'absolute',
            'bottom': '7vh',
            'left': '50%',
            'transform': 'translate(-50%)'
        }
        this.reveal_panel_style = {
            'height': '10vh',
            'width': '50vh',
            'border': '1px solid black',
            'border-radius': '10px',
            'position': 'absolute',
            'bottom': '0vh',
            'left': '50%',
            'transform': 'translate(-50%)',
            'visibility': 'hidden',
        }
    }
    submit_clicked = function(){
        console.log('submit clicked !')
        var user = document.getElementsByClassName('input_panel')
        var pass = document.getElementsByClassName('pass_panel')
        var data = 'Data Revealed<br>User-Name = '+user[0].value+'<br>Pass-Word = '+pass[0].value
        var reveal = document.getElementsByClassName('reveal_panel')
        reveal[0].innerHTML = data
        reveal[0].style.visibility = 'visible'
        reveal[0].style.top = '46vh'
    }
    render(){
        return(
            <>
            <div className='main_panel' style={this.main_panel_style}>
                User-Name
                <input placeholder='Enter User-Name' type='text' className='input_panel' style={this.input_panel_style}></input>
                <div style={this.pass_word_style} >Pass-Word</div>
                <input type='password' className='pass_panel' style={this.pass_panel_style} ></input>
                <input onClick={this.submit_clicked} type='button' value='submit' style={this.button_style}></input>
                <div className='reveal_panel' style={this.reveal_panel_style}>
                </div>
            </div>
            </>
        )
    }
}