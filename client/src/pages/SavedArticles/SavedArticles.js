import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import _ from "lodash";
import {connect} from "react-redux";
import {deleteArticle, getArticles} from "../../actions";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";

class SavedArticles extends React.Component {

  // When the component mounts, load all articles and save them to this.state.savedArticles
  componentDidMount() {
    this.props.getArticles();
  }

  // Loads all articles  and sets them to this.state.savedArticles
  loadArticles = () => {
    
    // API.getArticles()
    //   .then(res => {
    // articles = res.data.map(article => {
    //       return {
    //         _id: article._id,
    //         byline: article.byline,
    //         headline: article.headline,
    //         web_url : article.web_url,
    //         // get rid of seconds/milliseconds using the split  method
    //         date: article.date.split("T")[0],
    //         isSaved: false
    // }
    //     })
    //     this.setState({savedArticles: articles});
    //   }
    //   )
    //   .catch(err => console.log(err));
  };

  // Deletes a article from the database with a given id, then reloads articles from the db
  // deleteArticle = id => {
  //   API.deleteArticle(id)
  //     .then(res => this.loadArticles())
  //     .catch(err => console.log(err));
  // };

  renderArticles () {
      let {savedArticles} = this.props;
      console.log(savedArticles);
      return (
        <List title="Saved Articles">
          {_.map(savedArticles, article => {
            
            return (
              <ListItem key={article._id} headline={article.headline} url={article.web_url} byline={article.byline ? article.byline : ""}>
                <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
              </ListItem>
            );
          })}
        </List>
      )
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Nav articleType="saved" />
          <Col size="md-12 sm-12">
               {_.size(this.props.savedArticles) > 0 ?
                this.renderArticles() :  
                <h3>No Saved Articles Yet</h3>
               }
              
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps({savedArticles}){
  return {
      // this.props === ownProps
      savedArticles
  };
}

// deleteArticle, getArticles are destructured methods, now hooked up to redux and available as props
export default connect(mapStateToProps, {deleteArticle, getArticles})(SavedArticles);
