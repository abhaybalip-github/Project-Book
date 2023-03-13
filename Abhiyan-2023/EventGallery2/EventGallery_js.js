function hover_event(card_no){
    event_card = document.getElementsByClassName('event-card')
    event_pic = document.getElementsByClassName('event-pic')
    event_poster = document.getElementsByClassName('event-poster')
    event_desc = document.getElementsByClassName('event-desc')

    event_card[card_no].style.transform = 'scale(1.2)'

    event_card[card_no].style.zIndex = '1'
    event_poster[card_no].style.visibility = 'visible'
    event_poster[card_no].style.zIndex = '2'
    event_desc[card_no].style.visibility = 'visible'
    event_card[card_no].style.width = '60vh'

    // change property of other class
    for(i in (event_card)){
        if(i != event_card[card_no]){
            event_card[i].zIndex = '0';
        }
    }
}

function dehover_event(card_no){
    event_card = document.getElementsByClassName('event-card')
    event_pic = document.getElementsByClassName('event-pic')
    event_poster = document.getElementsByClassName('event-poster')
    event_desc = document.getElementsByClassName('event-desc')

    event_card[card_no].style.transform = ''

    event_poster[card_no].style.visibility = 'hidden'
    event_poster[card_no].style.zIndex = ''
    event_desc[card_no].style.visibility = 'hidden'
    event_card[card_no].style.width = '30vh'

    // change property of other class
    for(i in (event_card)){
        if(i != event_card[card_no]){
            event_card[i].zIndex = '';
        }
    }
}