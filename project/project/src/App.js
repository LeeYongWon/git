import React, { Component } from 'react';
import TOC from './component/TOC';
import ReadContent from './component/ReadContent'
import CreateContent from './component/CreateContent'
import UpdateContent from './component/UpdateContent'
import Subject from './component/Subject'
import Control from './component/Control'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: 'create',
      selected_content_id: 2,
      subject: { title: 'WEB', sub: 'World wide web' },
      welcome: { title: 'Welcome', desc: 'Hello React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'Javascript', desc: 'Javscript is for interative' }
      ]
    }

  }
  getReadContent() {
    for (var i = 0; i < this.state.contents.length; i++) {
      var data = this.state.contents[i];

      if (data.id === this.state.selected_content_id) {
        return data;
      }
    }

  }
  getContent() {
    console.log("app render");
    var _title, _desc, _article = null;

    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />

    } else if (this.state.mode === 'read') {
      var _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc} />
    } else if (this.state.mode === 'create') {
      _article = <CreateContent onSubmit={
        function (_title, _desc) {
          this.max_content_id = this.max_content_id + 1;
          var _contents = this.state.contents.concat(
            { id: this.max_content_id, title: _title, desc: _desc }
          )
          this.setState(
            { contents: _contents }
          )
        }.bind(this)} />
    } else if (this.state.mode === 'update') {
      _content= this.getReadContent();
      _article = <UpdateContent data={_content} onSubmit={
        function (_title, _desc) {
          this.max_content_id = this.max_content_id + 1;
          var _contents = this.state.contents.concat(
            { id: this.max_content_id, title: _title, desc: _desc }
          )
          this.setState(
            { contents: _contents }
          )
        }.bind(this)} />
    }
    return _article;
  }
  render() {

    console.log('render', this);

    return (
      <div className="App">

        <Subject
          title={this.state.subject.title} sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        />

        <TOC onChangePage={
          function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents} />

        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          })
        }.bind(this)}></Control>

        {this.getContent()}
      </div>
    );
  }
}

export default App;
