const  todo = ['workout', 'learn js', 'learn python', 'work', 'find new clients']

todo.splice(2, 1)
todo.push('New item to the end')
todo.shift()

console.log(`You have ${todo.length} todos on your list`)
console.log(todo)