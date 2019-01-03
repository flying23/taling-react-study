import React, { Component } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css"
import 'materialize-css'
import Note from "./Note.js"
import Writing from "./Writing.js"


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      savedNotes: [ 
        {id:"1",title: "a",content: "apple"},
        {id:"2",title: "b",content: "bee"},
        {id:"3",title: "c",content: "carrot"}
      ]
    }
  }

  handleSubmit = (userInputTitle, userInputContent) => {
    const savedNotes = this.state.savedNotes
    let lastNoteId = savedNotes[savedNotes.length-1].id

    this.setState({
      savedNotes: [
        ...savedNotes,
        { id: ++lastNoteId,
          title: userInputTitle,
          content: userInputContent
        }
      ]
    })
  }

  delete = (id) => {
    console.log(`${id} will be deleted`)
    const savedNote = this.state.savedNotes
    const deletedNote = savedNote.splice(id, 1)
    this.setState({
      savedNote: deletedNote
    })
  }

  render() {
    return (
      <div>
        <Writing submit={this.handleSubmit} />
        <div className="row">
          {this.state.savedNotes.map((note, index) => (
            <Note delete={this.delete} key={note.id} title={note.title} content={note.content} id={index} />
            ))}
        </div>
      </div>
      )
    }
  }
  
  
  export default App