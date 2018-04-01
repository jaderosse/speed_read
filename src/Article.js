import React, { Component } from 'react';
import './App.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Article extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	items: ['hello', 'world', 'click', 'me', 'I', 'am', 'article', 'read', 'me', 'so', 'fast'],
    	interval: 1000
    };
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
  	let base = this;
  	setInterval(() => {
  		var newItems = base.state.items;
    	newItems.shift();	
  		base.setState({items: newItems});	
  	}, base.state.interval);
  }

  render() {
    const items = this.state.items
    .map((item, i) => (
      <div key={item}>
        {item}
      </div>
    ));

    return (
      <div>
      	<button onClick={this.handleRemove}>Start</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Article;