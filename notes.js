const notes = [{
  title: 'my next trip',
  body: 'I would like to go to Spain'
}, {
  title: 'Habbits to work on',
  body: 'Exercise. Eating a bit better'
}, {
  title: 'Office modification',
  body: 'Get a new seat'
}]

// DOM - Document Object Model

// document.querySelector('p').remove()

const ps = document.querySelectorAll('p')

ps.forEach(function(p) {
  p.textContent = '*****'
  console.log(p.textContent)
  // p.remove()
})

// Add a new element
const newParagraph = document.createElement('p')

newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)

// const notes = [{
//   title: 'my next trip',
//   body: 'I would like to go to Spain'
// }, {
//   title: 'Habbits to work on',
//   body: 'Exercise. Eating a bit better'
// }, {
//   title: 'Office modification',
//   body: 'Get a new seat'
// }]

// const sortNotes = function(notes) {
//   notes.sort(function(a, b) {
//     if(a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1
//     } else if(b.title.toLowerCase() < a.title.toLowerCase()) {
//       return 1
//     } else {
//       return 0
//     }
//   })
// }

// const findNote = function(notes, noteTitle) {
//   return notes.find(function(note, index) {
//     return note.title.toLowerCase() === noteTitle.toLowerCase()    
//   })
// }

// const findNotes = function(notes, query) {
//   return notes.filter(function(note, index) {
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch 
//   })
// }

// // console.log(findNotes(notes, 'eating'))

// // const note = findNote(notes, 'office modification')
// // console.log(note)

// sortNotes(notes)
// console.log(notes)

