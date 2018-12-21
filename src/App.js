import React, { Component } from 'react';
import './App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);



const listWorkss = `query listWorkss {
  listWorkss {
    items {
      id
      name
    }
  }
}`

const createWorks = `mutation createWorks($name:String! $description: String! $url: String!) {
  createWorks(input:{
    name:$name
    description:$description
    url:$url
  }){
    id
    name
    description
    url
  }
}`



class App extends Component {


  worksMutation = async () => {
    const worksDetails = {
      name: 'Vivid Sydney',
      description: 'Reinventing the website for Australia’s most famous light show in its tenth year, we created the strategy, refined the UX, and built a lightning fast search for results light years ahead.',
      url: "http://www.google.com"
    };
    
    const newWork = await API.graphql(graphqlOperation(createWorks, worksDetails));
    alert(JSON.stringify(newWork));
  }

  listQuery = async () => {
    console.log('listing works');
    const allWorks = await API.graphql(graphqlOperation(listWorkss));
    alert(JSON.stringify(allWorks));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Nightjar Test Works
          </p>
        </header>
        <main className="App-main">
          <button onClick={this.listQuery}>View Works</button>
          <button onClick={this.worksMutation}>Add Work</button>
        </main>
      </div>
    );
  }
}

export default App;
