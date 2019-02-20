let notes = getSavedNotes()

const filters = {
  searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
  const id = uuidv4()
  
  notes.push({
    id: id,
    title: '',
    body: ''
  })
  saveNotes(notes)
  location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
  console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
  if(e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})

// Unix Epoch - January 1st 1970 00:00:00

const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth() + 1}`)
// console.log(`Day of the month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minute: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

const myBirth = new Date('June 8 1992 00:00:00')
const myBirthTimestamp = myBirth.getTime()

const birth = new Date('June 21 1997 00:00:00')
const birthTimestamp = birth.getTime()

console.log(myBirth, birth)

if(myBirthTimestamp > birthTimestamp) {
  console.log(birthTimestamp.toString())
} else {
  console.log(myBirthTimestamp.toString())
}