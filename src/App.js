import React, { Component } from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css"
import 'materialize-css'


class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      savedNotes: [ 
        {
          id:1,
          title: "a",
          content: "apple"
        },
        {
          id:2,
          title: "b",
          content: "bee"
        },
        {
          id:3,
          title: "c",
          content: "carrot"
        }
      ]
    }
  }

  handleSubmit = (userInputTitle, userInputContent) => {
    const savedNotes = this.state.savedNotes
    this.setState({
      savedNotes: [
        ...savedNotes,
        {
          id: savedNotes.length+1,
          title: userInputTitle,
          content: userInputContent
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <Writing submit={this.handleSubmit} />
        <div className="row">
          {this.state.savedNotes.map((note) => (
            <Note key={note.id} title={note.title} content={note.content} />
            ))}
        </div>
      </div>
      )
    }
  }
  
  

  class Writing extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInputTitle: "",
        userInputContent: "",
      }
    }
      

    handleSubmit = (e) => {
      console.log('submitted')
      this.props.submit(this.state.userInputTitle, this.state.userInputContent)
      this.setState({
        userInputTitle:"", userInputContent:""})
      console.log(e.target);
      e.preventDefault();
    }

    handleTitleChange = event => {
      this.setState({
        userInputTitle: event.target.value
      })
      console.log("userInputTitle is " + event.target.value)
    }
    handleContentChange = event => {
      this.setState({
        userInputContent: event.target.value
      })
      console.log("userInputContent is " + event.target.value)
    }


    render() { 
      return (
        <div>
          <form onSubmit={this.handleSubmit} style={{margin: 80}}>
            <div className="input-field" >
              <input 
              type="text"
              value={this.state.userInputTitle}
              onChange={this.handleTitleChange}
              placeholder="제목"
              />
              <textarea
                type="text"
                className="comment" cols="50" rows="5"
                value={this.state.userInputContent}
                onChange={this.handleContentChange}
                placeholder="Take a note"
              ></textarea>
              </div>
              <input style={{width: "100%"}} className="btn green" type="submit" value="저장하기"/>
          </form>
        </div>
      )
      }
    }
  

  class Note extends Component {
    render() {
      const title = this.props.title;
      const content = this.props.content;
      
      return (
        <div className='col s12 m6 l3'>
          <div className='card yellow lighten-4'>
            <div className='card-content black-text'>{title}</div>
            <div className='card-content black-text'>{content}</div>
          </div>
        </div>
        
        )
      }
    }

  export default App