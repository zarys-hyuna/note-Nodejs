const fs = require('fs')
const chalk = require('chalk')
const getNotes = function(){
    return 'your notes....'
}
const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    }
    else{
        console.log('Duplicate found')
    }
    saveNotes(notes)
}

const saveNotes = function (notes){

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('./jsonfile.json', dataJSON)


}
const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('./jsonfile.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
        
    }

    catch(e){
        return []
    }


}

const listNotes = () =>{

    console.log(chalk.blue.inverse('Your Notes'))

    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.title)
    })

}

const removeNote = function(title){
    const msg = title
    console.log(msg)
   
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title

    })

        if (notes.length > notesToKeep.length){
            console.log(chalk.green.inverse('NOTE REMOVED'))
            saveNotes(notesToKeep)
        }
        else{
            console.log(chalk.red.inverse('NO NOTE FOUND'))
        }
       
   
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}