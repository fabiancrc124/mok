import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component {
    state = {
        form:{}
    }
    handleChange = e => {
        this.setState({
            form:{
                [e.target.name]: e.target.value
            }
            
        })
    }


    render(){
        return (
            <ExerciseForm
                oneChange={this.handleChange}
            />
        )
    }
}

export default ExerciseNew