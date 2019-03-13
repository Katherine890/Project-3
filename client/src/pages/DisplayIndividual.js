import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeNav from "../components/HomeNav";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import favoritesLogo from "../heartLogo.png";
import API from "../utils/API";

class DisplayIndividual extends Component {
  state = {
    project: {}
  };

  componentDidMount() {
    API.getProject(this.props.match.params.id)
      .then(res => this.setState({ project: res.data }))
      .catch(err => console.log(err));
  }

  handleBtnClick = () => {
    const { title, image, link, description, id} = this.state.project;
    console.log('clicked');
    API.addToFavorites({
      title: title,
      link: link,
      description: description,
      image: image,
      projectId: id
    })
    .then( res => console.log(res.data))
    .catch( err => console.log(err));
  }

  render() {
    const { title, image, link, description } = this.state.project
    return (
      <div>
        <HomeNav />
        <Wrapper>
          <div>
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">{ title }</h1>
              </div>
            </div>
            <button id="favorites-btn" onClick={this.handleBtnClick}><img src={ favoritesLogo } alt="favorite button"/></button>
            <img id="display-image" src={ image } className="img-fluid" alt={ title }/>
            <p>{ description }</p>
            <a href={ link }>See Project</a>
            <Link id="back-anchor" to="/all-projects">← Back</Link>
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default DisplayIndividual;
