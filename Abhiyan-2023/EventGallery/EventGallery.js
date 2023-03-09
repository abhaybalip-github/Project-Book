
// function for hover effect
function hover_event_card(event_blog,event_poster,event_desc){
    event_blog = document.getElementById(event_blog)
    event_desc = document.getElementById(event_desc)
    event_poster = document.getElementById(event_poster)

    event_blog.style.width = '60vh';
    event_poster.style.visibility = 'visible'
    // event_poster.style.zIndex = '1'
    window.setTimeout(function(){event_desc.style.visibility = 'visible'},300)
}
// function for de-hover effect
function dehover_event_card(event_blog,event_poster,event_desc){
    event_blog = document.getElementById(event_blog)
    event_desc = document.getElementById(event_desc)
    event_poster = document.getElementById(event_poster)

    event_blog.style.width = '30vh'
    event_poster.style.visibility = 'hidden'
    // event_poster.style.zIndex = '-1'
    event_desc.style.visibility = 'hidden'
}

function hover_event_card_h(event_blog,event_poster,event_desc){
    event_blog = document.getElementById(event_blog)
    event_desc = document.getElementById(event_desc)
    event_poster = document.getElementById(event_poster)

    event_blog.style.height = '60vh'
    event_poster.style.visibility = 'visible'
    window.setTimeout(function(){event_desc.style.visibility = 'visible'},300)
}
function dehover_event_card_h(event_blog,event_poster,event_desc){
    event_blog = document.getElementById(event_blog)
    event_desc = document.getElementById(event_desc)
    event_poster = document.getElementById(event_poster)

    event_blog.style.height = '30vh'
    event_poster.style.visibility = 'hidden'
    event_desc.style.visibility = 'hidden'
}