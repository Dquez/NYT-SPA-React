import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedArticles: [],
    }
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadArticles();
  }

  // Loads all books  and sets them to this.state.books
  loadArticles = () => {
    API.getArticles()
      .then(res => {
        const articles = res.data.map(article => {
          return {
            _id: article._id,
            byline: article.byline,
            headline: article.headline,
            web_url : article.web_url,
            date: article.date.split("T")[0],
            isSaved: false
          }
        })
        console.log(articles);
        this.setState({savedArticles: articles});
      }
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Nav articleType="saved" />
          <Col size="md-12 sm-12">
               {this.state.savedArticles.length ? (
              <List title="Saved Articles">
              {console.log(this.state.savedArticles)}
                {this.state.savedArticles.map(article => {
                  return (
                    <ListItem key={article._id} headline={article.headline} url={article.web_url} byline={article.byline ? article.byline : ""}>
                      <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Saved Articles Yet</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
