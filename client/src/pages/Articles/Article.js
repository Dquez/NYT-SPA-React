import React from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      topic: "",
      startYear: null,
      endYear: null
    };
  }

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadArticles();
  }

  // Loads all books  and sets them to this.state.books
  loadArticles = () => {
    API.getArticles()
      .then(res => {
        console.log(res)
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
    saveArticle = id => {
      const article = this.state.articles.filter(article=> article._id === id);
      console.log(article[0]);
      API.saveArticle(article[0])
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    const self = this;
    event.preventDefault();
    
      API.getArticlesFromNYT({
        topic: this.state.topic,
        startYear: this.state.startYear,
        endYear: this.state.endYear
      })
      .then(function (response) {
        // console.log(self);
        if (response) {
          const articles = response.data.map(article => {
            return {
              _id: article._id,
              byline: article.byline.original,
              headline: article.headline.main,
              web_url : article.web_url,
              date: article.pub_date.split("T")[0]
            }
          })
          self.setState({
            articles : articles
             })
        }
        else {
          alert("Sorry, no articles appeared from your search parameters. Please try again.");
        }
      })
        .catch(function (error) {
            console.log(error);
        });
  };

  render() {
    // const articlesInfo = this.state.articles.map(article => {

    // })
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            {/* <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
            <List title="Search">
            <form>
              <Input
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)"
              />
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="Start Year (YYYMMDD)"
              />
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="End Year  (YYYMMDD)"
              />
              {/* <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              <FormBtn
                disabled={!(this.state.topic && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSubmit}
              >
                Search for Article!
              </FormBtn>
            </form>
            </List>
          </Col>
          <Col size="md-12 sm-12">
            {/* <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron> */}
               {this.state.articles.length ? (
              <List title="Results">
                {this.state.articles.map(article => {
                  return (
                    <ListItem key={article._id} headline={article.headline} url={article.web_url} byline={article.byline ? article.byline : ""}>
                      {/* <DeleteBtn onClick={() => this.deleteBook(article._id)} /> */}
                      <SaveBtn onClick={() => this.saveArticle(article._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
