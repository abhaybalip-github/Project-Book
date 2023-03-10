
// function for hover effect
function hover_event_card(card_no){
    event_blog = document.getElementsByClassName('event-blog')
    event_desc = document.getElementsByClassName('event-desc')
    event_poster = document.getElementsByClassName('event-poster')

    event_poster[card_no].style.visibility = 'visible'
    event_poster[card_no].style.zIndex = '2'
    event_desc[card_no].style.visibility = 'visible'
    event_blog[card_no].style.width = '60vh';
}
// function for de-hover effect
function dehover_event_card(card_no){
    event_blog = document.getElementsByClassName('event-blog')
    event_desc = document.getElementsByClassName('event-desc')
    event_poster = document.getElementsByClassName('event-poster')

    event_poster[card_no].style.visibility = 'hidden'
    event_poster[card_no].style.zIndex = '0'
    event_desc[card_no].style.visibility = 'hidden'
    event_blog[card_no].style.width = '30vh'
}

// function for hover effect on h card
function hover_event_card_h(card_no){
    event_blog = document.getElementsByClassName('event-blog-h')
    event_desc = document.getElementsByClassName('event-desc-h')
    event_poster = document.getElementsByClassName('event-poster-h')

    event_desc[card_no].style.visibility = 'visible'
    event_poster[card_no].style.zIndex = '2'
    event_poster[card_no].style.visibility = 'visible'
    event_blog[card_no].style.height = '60vh'
}

// function for de-hover effect on h card
function dehover_event_card_h(card_no){
    event_blog = document.getElementsByClassName('event-blog-h')
    event_desc = document.getElementsByClassName('event-desc-h')
    event_poster = document.getElementsByClassName('event-poster-h')

    event_poster[card_no].style.visibility = 'hidden'
    event_poster[card_no].style.zIndex = '0'
    event_desc[card_no].style.visibility = 'hidden'
    event_blog[card_no].style.height = '30vh'
}