import React from 'react'
import ReactDOM from 'react-dom'
import level from 'level'
import { Value } from '..'

const db = window.db = level('/tmp/preact-level-value')

class Example extends React.Component {
  random () {
    db.put('key', Math.random())
  }
  render () {
    return (
      <div>
        Push this button:<br />
        <button onClick={ this.random }>Random!</button><br /><br />
        Or execute this snippet in the console:<br />
        <pre>db.put('key', Math.random())</pre><br />
        Live value: <strong><Value db={db} levelKey="key" /></strong>
      </div>
    )
  }
}

const container = document.createElement('div')
document.body.appendChild(container)
ReactDOM.render(<Example />, container)
