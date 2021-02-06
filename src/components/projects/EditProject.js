import React, { Component } from 'react';
import axios from 'axios';
 
class EditProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.theProject.title,
            description: this.props.theProject.description
        }
    }
  
  handleFormSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title;
    const description = this.state.description;
 
    axios.put(`http://localhost:5000/api/projects/${this.props.theProject._id}`, { title, description })
    .then( () => {
        this.props.history.push('/projects');    
    }, error => {
        console.log(error)
    })
  }
 
  handleChangeTitle = (event) => {  
    this.setState({
      title:event.target.value
    })
  }
 
  handleChangeDesc = (event) => {  
    this.setState({
      description:event.target.value
    })
  }
 
  render(){
    return (
      <div>
        <hr />
        <h3>Edit this project:</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
          
          <label>Description:</label>
          <textarea name="description" value={this.state.description} onChange={e => this.handleChangeDesc(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
 
export default EditProject;