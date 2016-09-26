import React from 'react'
class PoemWriter extends React.Component {
  constructor() {
    super();
    this.showError = this.showError.bind(this)
    this.poemChange = this.poemChange.bind(this)
    this.state = {poem: ""};
  }

  poemChange(event){
    this.setState({
      poem: event.target.value
    })
  }

  showError(){
    const poem = this.state.poem
    const lines = poem.trim().split(/\n/)
    const lineWords = lines.reduce(function (initialValue, line, index){
      const wordCount = line.trim().split(" ").length
      initialValue[index] = wordCount
      return initialValue
    }, {})
    if (lines.length != 3 || lineWords[0] != 5 || lineWords[1] != 3 || lineWords[2] != 5 ){
      return <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.peom} onChange={this.poemChange} />
        {this.showError()}
      </div>
    );
  }
}

module.exports = PoemWriter;