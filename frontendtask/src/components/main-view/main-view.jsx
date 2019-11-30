import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Navigation } from '../navigation/navigation';
import { Header } from '../header/header';
import { OverlayOne } from '../overlay/overlayone/overlayone';
import { SectionOne } from '../sectionone/sectionone';
import { SectionTwo } from '../sectiontwo/sectiontwo';
import { SectionCards } from '../sectioncards/sectioncards';
import { Footer } from '../footer/footer';

import './main-view.css';

export class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeText: 'HELLO FRONTEND TASK :-)',
      employees: [
        {
          name: 'Terêze',
          picUrl: 'https://i.pravatar.cc/150'
        },
        {
          name: 'Willy',
          picUrl: 'https://i.pravatar.cc/150'
        },
        {
          name: 'Anuthida',
          picUrl: 'https://i.pravatar.cc/150'
        },
        {
          name: 'Thisisjanewayne',
          picUrl: 'https://i.pravatar.cc/150'
        }
      ],
      cardData: [
        {
          id: 1,
          headline: 'LOREM IPSUM',
          contentText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
          picUrl: 'https://picsum.photos/200/200'
        },
        {
          id: 2,
          headline: 'DOLOR SIT AMET',
          contentText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
          picUrl: 'https://picsum.photos/200/200'
        },
        {
          id: 3,
          headline: 'LOREM IPSUM DOLOR SIT AMET',
          contentText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
          picUrl: 'https://picsum.photos/200/200'
        },
        {
          id: 4,
          headline: 'LOREM IPSUM',
          contentText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
          picUrl: 'https://picsum.photos/200/200'
        }
      ],
      showOverlay: false
    };
    this.toggleOverlay = this.toggleOverlay.bind(this)
  }

  componentDidMount() {

  }

  // all necessary functions below
  toggleOverlay() {
    if(!this.state.showOverlay) {
      this.setState({
        showOverlay: true
      })
    } else {
      this.setState({
        showOverlay: false
      })
    }
  }

  // render
  render() {
    return (
      <Router>
        <div className="frontendTaskWrapper">
          <Navigation />
          <Header employees={this.state.employees} toggleOverlay={this.toggleOverlay} />
          <OverlayOne showOverlay={this.state.showOverlay} toggleOverlay={this.toggleOverlay} />
          <SectionOne />
          <SectionTwo />
          <SectionCards cardData={this.state.cardData} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default ( MainView );
