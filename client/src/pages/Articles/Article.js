import React from "react";
import Nav from "../../components/Nav";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Articles extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: [],
        topic: "",
        startYear: "2014-06-01",
        endYear: "2018-10-21"
      }
    }

    // Loads all articles  and sets them to this.state.articles
    loadArticles = () => {
      API.getArticles()
        .then(res => {
          const articles = res.data.map(article => {
            return {
              _id: article._id,
              byline: article.byline,
              headline: article.headline,
              web_url: article.web_url,
              // get rid of seconds/milliseconds using the split  method
              date: article.date.split("T")[0],
              isSaved: false
            }
          })
          this.setState({
            savedArticles: articles
          });
        })
        .catch(err => console.log(err));
    };
    //Saves an article to the database, then reloads articles from the db
    saveArticle = id => {
      // Makes a clone of the current state by using the spread method on this.state
      const newState = { ...this.state};
      const article = newState.articles.filter(article => article._id === id);
      article[0].isSaved = true;
      this.setState({
        newState
      })
      API.saveArticle(article[0])
        .then(res => {
          this.loadArticles()
        })
        .catch(err => console.log(err));
    };

    // Handles updating component state when the user types into the input field
    handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({ [name]: value });
    };

    // When the form is submitted, use the API.getArticlesFromNYT method to retrieve articles from the NYT
    // Then reload articles from the database
    handleFormSubmit = event => {
      event.preventDefault();
      const self = this;
      // keep a reference of this saved in a variable to use later on
      API.getArticlesFromNYT({
          topic: this.state.topic,
          startYear: this.state.startYear,
          endYear: this.state.endYear
        })
        .then(function (response) {
          // This checks to see if we get a response with data back from the API call
          if (Object.keys(response).length > 0 && response.constructor === Object) {
            const articles = response.data.map(article => {
              return {
                _id: article._id,
                byline: article.byline.original,
                headline: article.headline.main,
                web_url: article.web_url,
                date: article.pub_date.split("T")[0],
                isSaved: false
              }
            })
            self.setState({
              articles
            });
          } else {
            alert("Sorry, no articles appeared from your search parameters. Please try again.");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

  render() {
    const articlesNotSaved = this.state.articles.filter(article => !article.isSaved)
    return (
      <Container fluid>
        <Row>
        <Nav articleType="notSaved"/>
          <Col size="md-12 sm-12">
            <List title="Search">
            <form>
              <Input
                type="text"
                value={this.state.topic}
                onChange={this.handleInputChange}
                name="topic"
                placeholder="Topic (required)" 
              />
              <Input
                type="date"
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
              />
              <Input
                required pattern="[0-9]{4}/[0-9]{2}/[0-9]{2}"
                type="date"
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
              />
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
               {this.state.articles.length ? (
              <List title="Results">
                {articlesNotSaved.map(article => {
                  return (
                    <ListItem key={article._id} headline={article.headline} url={article.web_url} byline={article.byline ? article.byline : ""}>
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


