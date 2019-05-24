const notes=require('./notes.js')
const msg = notes.getNotes

const yargs = require('yargs')




yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})


yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list the notes',
   
    handler: function(){
       notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe: 'reading a note',
    handler: function(){
        console.log('Reading a Note')
    }
})


console.log(yargs.argv)
