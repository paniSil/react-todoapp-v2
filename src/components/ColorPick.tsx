'use strict'

import React from 'react'
import reactCSS from 'reactcss'
import { CompactPicker } from 'react-color'
import { RiBrushAiLine } from 'react-icons/ri'
import Button from './Button'

class ColorPick extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#a665e2'
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange = (color: any) => {
    this.setState({ color: color.hex })
  }

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `${this.state.color}`
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'fixed',
          zIndex: '2',
          bottom: '160px'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        }
      }
    })

    const chosenColor = this.state.color
    console.log(chosenColor)
    document.documentElement.style.setProperty('--base-color', chosenColor)
    return (
      <div>
        <Button title="Pick color theme" onClick={this.handleClick} type="button" className="colorpick-btn">
          <RiBrushAiLine style={{ color: 'white', fontSize: '1.5rem' }} />
        </Button>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <CompactPicker color={this.state.color} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default ColorPick
