const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


// User Interaction

/* 
    EventHandlers - event is something that the user does
    - event might be clicking a button or hovering over a paragraph 
    or scrolling on the screen

    -all of those events you can attach event listeners to and 
    event listener is nothing more than a function


    -addEventListener - is how we attach an event listener and 
    it takes two argument
        1. String - that's where you put the event name like 
            click or mouse up or change
        2. Function - to run when that even happens

        (e) commonly called event or shorthand E
    
    -target - is actually a representation of that Dom element
     just like we can get the element back from querySelector, 
     we can get the element that the event was fired on right 
     here from e.target

     e.target - this give me the element how do we change the 
     text of an element
     we use  content  .textContent

     E event argument is useful when you want to do something
     with the element that the event actually fired on.
*/

document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'The button was click'
})