
// function for hover effect on event card

function event_hover(event_box,event_desc){
    event_box = document.getElementById(event_box)
    event_desc = document.getElementById(event_desc)

    event_box.style.width = '55vh'

    window.setTimeout(function(){event_desc.style.visibility = 'visible'},300)
}
function event_hover_out(event_box,event_desc){
    event_box = document.getElementById(event_box)
    event_desc = document.getElementById(event_desc)

    event_desc.style.visibility = 'hidden'
    event_box.style.width = '30vh'
}

// function for hover effect on v event card

function event_hover_v(event_box,event_desc){
    event_box = document.getElementById(event_box)
    event_desc = document.getElementById(event_desc)

    event_box.style.height = '62vh'
    window.setTimeout(function(){event_desc.style.visibility = 'visible'},300)
}
function event_hover_out_v(event_box,event_desc){
    event_box = document.getElementById(event_box)
    event_desc = document.getElementById(event_desc)

    event_box.style.height = '32vh'
    event_desc.style.visibility = 'hidden'
}