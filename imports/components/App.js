import React, { Component } from 'react'

// custom imports
import Navbar from './includes/navbar'

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='container'>
                    {this.props.children}                    
                </div>
            </div>
        )
    }
}



export default App
