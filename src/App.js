import React, { Component } from 'react';
import './App.css';
import baby from './imgs/grumpybaby.jpg';
import marshmallows from './imgs/marshmallows.jpg';
import pattern from './imgs/pattern.jpg';

const list = [
  {image: baby,
  title: 'Ut sit quod aliquip rationibus.',
  description: 'Pri ea wisi accumsan complectitur, qui ea omnis contentiones? Eros harum corpora nec no, vis.',
  url: 'http://www.url.com',
  },
  {
  image: marshmallows,
  title: 'Ut sit quod aliquip rationibus.',
  description: 'Pri ea wisi accumsan complectitur, qui ea omnis contentiones? Eros harum corpora nec no, vis.',
  url: 'http://www.myfavoritewebsite.org',
  },
  {
  image: pattern,
  title: 'Ut sit quod aliquip rationibus.',
  description: 'Pri ea wisi accumsan complectitur, qui ea omnis contentiones? Eros harum corpora nec no, vis.',
  url: 'http://www.secondfavorite.com',
  },
]


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list,
    }

    this.findSite = this.findSite.bind(this);
  }

  findSite(url){
    return url.match(/[a-z]+\.[a-z]+$/)[0] || '';
  }

  render() {
    var list = this.state.list;

    return (
      list.map(item => {
        return (
          <div className='card'>
            <img src={item.image} 
              className="preview"/>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="url">
                {this.findSite(item.url)}
              </p>
          </div>
        )
      })
    );
  }
}

export default App;
