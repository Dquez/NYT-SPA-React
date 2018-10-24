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
  // after you delete an article, the redux state changes so we call the componentWillReceiveProps lifecycle change to update the savedArticles component
  componentWillReceiveProps() {
    this.props.getArticles();
  }

  renderArticles () {
      const {savedArticles} = this.props;
      return (
        <List title="Saved Articles">
          {_.map(savedArticles, article => {
            return (
              <ListItem key={article._id} headline={article.headline} url={article.web_url} byline={article.byline}>
                <DeleteBtn onClick={() => this.props.deleteArticle(article._id)} />
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
  return {savedArticles};
}

// deleteArticle, getArticles are destructured methods, now hooked up to redux and available as props
export default connect(mapStateToProps, {deleteArticle, getArticles})(SavedArticles);
