const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

//---> Filtering Arrays
const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index) {
        return !todo.completed 
        // todo.completed === false
    })
}

console.log(getThingsToDo(todos))
 
// deleteTodo(todos, '!!buy food')
// console.log(todos)

