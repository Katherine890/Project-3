import React, { Component } from "react";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";

class Projects extends Component {

    state = {
        title: "",
        description: "",
        image: ""
    };

    handleSaveProject = event => {
        alert("Project Saved!");
        // handle saving project here
    }

    handleSubmit = event => {
        this.setState({title: event.target.value})
        this.setState({description: event.target.value})
        this.setState({image: event.target.value})
    }


    render() {
        return (
            <div>
                <HomeNav />
                <Wrapper>
                    <div>
                        <h1 className="subTitle">Projects</h1>
                    </div><br/>

                    <button id="addProject" type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                        + Add Project
                    </button>
                    <div id="projectContainer">
                    <div id="displayTitle">Title goes here</div><br/>
                    <div id="displayDescription">Description goes here</div><br/>
                    <div id="displayImage">Image goes here</div>
                    </div>
                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Add Project</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="form-group">
                                            <label for="inputTitle">Title</label>
                                            <input 
                                                // value={this.state.title}
                                                // onSubmit={this.handleSubmit.bind(this)}
                                                type="title" 
                                                className="form-control" 
                                                id="inputTitle" 
                                                placeholder="My Project" />
                                        </div>
                                        <div className="form-group">
                                            <label for="inputDescription">Description</label>
                                            <textarea 
                                                // value={this.state.description}
                                                // onSubmit={this.handleSubmit.bind(this)}
                                                className="form-control" 
                                                id="inputDescription" 
                                                rows="3" 
                                                placeholder="The My Project app is a simple and quick way to...">
                                            </textarea>
                                        </div>
                                        <div className="form-group">
                                            <label id="imgLabel" for="uploadImage">Upload Image</label>
                                            <input 
                                                // value={this.state.image}
                                                // onSubmit={this.handleSubmit.bind(this)}
                                                type="file" 
                                                className="form-control-file" 
                                                id="uploadImage"/>
                                        </div>
                                    </form>  
                                </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button onClick={this.handleSaveProject} id="saveProject" type="button" className="btn btn-primary">Save Project</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                    <Footer />
                </div>
                )
            }
        }
        
export default Projects;