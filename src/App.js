import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyDcdCLekWC4Ju1gdRt-E65MLQ6fqhBvgfk",
    authDomain: "homeworkreact1.firebaseapp.com",
    databaseURL: "https://homeworkreact1.firebaseio.com",
    projectId: "homeworkreact1",
    storageBucket: "homeworkreact1.appspot.com",
    messagingSenderId: "364863789761"
  };
  firebase.initializeApp(config);
}
render() {
  return (
    <div className="container">
      <Header title="HomeworkReact #1" />
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;