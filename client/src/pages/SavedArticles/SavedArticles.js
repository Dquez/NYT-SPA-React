import React from "react";
// import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, FormBtn } from "../../components/Form";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      savedArticles: [],
      // topic: "",
      // startYear: null,
      // endYear: null
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
       
        // this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

    // Deletes a book from the database with a given id, then reloads books from the db
    // saveArticle = id => {
    //   // const self = this;
    //   const newState = { ...this.state };
    //   const article = newState.articles.filter(article=> article._id === id);
    //   article[0].isSaved = true;
    //   this.setState({newState})
    //   API.saveArticle(article[0])
    //     .then(res => {
    //       this.loadArticles()
    //     })
    //     .catch(err => console.log(err));
    // };

  // Handles updating component state when the user types into the input field
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //     const self = this;
  //     API.getArticlesFromNYT({
  //       topic: this.state.topic,
  //       startYear: this.state.startYear,
  //       endYear: this.state.endYear
  //     })
  //     .then(function (response) {
  //       // console.log(self);
  //       if (response) {
  //         const articles = response.data.map(article => {
  //           return {
  //             _id: article._id,
  //             byline: article.byline.original,
  //             headline: article.headline.main,
  //             web_url : article.web_url,
  //             date: article.pub_date.split("T")[0],
  //             isSaved: false
  //           }
  //         })
  //         self.setState({articles});
  //       }
  //       else {
  //         alert("Sorry, no articles appeared from your search parameters. Please try again.");
  //       }
  //     })
  //       .catch(function (error) {
  //           console.log(error);
  //       });
  // };

  render() {
    // const {articles} = this.state;
    // const articlesNotSaved = this.state.articles.filter(article => !article.isSaved)
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
               {this.state.savedArticles.length ? (
              <List title="Saved Articles">
              {console.log(this.state.savedArticles)}
                {this.state.savedArticles.map(article => {
                  return (
                    <ListItem key={article._id} headline={article.headline} url={article.web_url} byline={article.byline ? article.byline : ""}>
                      <DeleteBtn onClick={() => this.deleteBook(article._id)} />
                      {/* <SaveBtn onClick={() => this.saveArticle(article._id)} /> */}
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
