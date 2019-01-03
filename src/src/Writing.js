import React, { Component } from 'react';

class Writing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInputTitle: "",
            userInputContent: "",
            isWritingTitleCliked: false,
        }
    }


    handleSubmit = (e) => {
        console.log('submitted')
        this.props.submit(this.state.userInputTitle, this.state.userInputContent)
        this.setState({
            userInputTitle: "", userInputContent: ""
        })
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

    handleFocus = (event) => {
        if(!this.state.isWritingTitleClicked) {
        this.setState({
            isWritingTitleCliked: true
        })
    }}

    


    render() {

        const writingTitle = (
            <input
                type="text"
                name="userInputTitle"
                value={this.state.userInputTitle}
                onChange={this.handleTitleChange}
                onFocus={this.handleFocus}
                placeholder="제목"
            />
        )

        const writingContent = (
            <textarea
                type="text"
                name="userInputContent" cols="50" rows="5"
                value={this.state.userInputContent}
                onChange={this.handleContentChange}
                placeholder="Take a note"
            >
            </textarea>
        )

        return (
            <div>
                <form onSubmit={this.handleSubmit} style={{ margin: 80 }}>
                    <div className="input-field" >
                        {this.state.isWritingTitleCliked ? writingContent : ""}
                        {writingTitle}
                    </div>
                    <input style={{ width: "100%" }} className="btn green" type="submit" value="저장하기" />
                </form>
            </div>
        )
    }
}

export default Writing;