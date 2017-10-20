import React from 'react'

export class Value extends React.Component {
  constructor ({ db, levelKey }) {
    super()
    this.state = { value: '' }
    this.onput = this.onput.bind(this)
    this.db = db
    this.levelKey = levelKey
  }

  onput (key, value) {
    if (key === this.levelKey) this.setState({ value })
  }

  componentDidMount () {
    this.db.get(this.levelKey, (_, value) => value && this.setState({ value }))
    this.db.on('put', this.onput)
  }

  componentWillUnmount () {
    this.db.removeListener('put', this.onput)
  }

  render () {
    return this.state.value
  }
}
