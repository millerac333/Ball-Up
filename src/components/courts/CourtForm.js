import React, { Component } from "react"

export default class CourtForm extends Component {
    // Set initial state
    state = {
        name: "",
        address: "",
        hours: "",
        courtType: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = e => {
        const stateToChange = {}
        stateToChange[e.target.id] = e.target.value
        this.setState(stateToChange)
    }

    addNewCourt = e => {
        e.preventDefault()
            const courts = {
                name: this.state.courtlName,
                address: this.state.address,
                hours: this.state.hours,
                courtType: this.state.courtType
            }
            this.props.add(courts).then(() => this.props.history.push("/courts"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="courtsForm">
                    <div className="courts-form-group">
                        <label htmlFor="courtsName">Court Name:</label>
                        <input type="courtName" required="true" className="courts-form-control" onChange={this.handleFieldChange}
                               id="courtName" placeholder="Court Name" />
                    </div>
                    <div className="courts-form-group">
                        <label htmlFor="breed">Address:</label>
                        <input type="address" required="true" className="courts-form-control" onChange={this.handleFieldChange}
                               id="address" placeholder="Address" />
                    </div>
                    <div className="courts-form-group">
                        <label htmlFor="hours">Hours of Operation:</label>
                        {/* <select defaultValue="" name="hours" id="hours" onChange={this.handleFieldChange}>

                            
                            
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select> */}
                    </div>
                    <div className="courts-form-group">
                        <label htmlFor="courtType">Court Type::</label>
                        {/* <select defaultValue="" name="hours" id="hours" onChange={this.handleFieldChange}>

                            
                            
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select> */}
                    </div>
                    <button type="submit" onClick={this.constructNewAnimal} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
