import React, { Component } from 'react';
import './App.css';
import NavBar from './component-library/components/NavBar';
import PhotoStream from './component-library/components/PhotoStream';

class App extends Component {
  render() {
    const navOptions = [
      {
          id: "one",
          text: "one text"
      },
      {
          id: "two",
          text: "two text"
      }
    ];

    const photos = [
        {
            src: "https://cdn.thinglink.me/api/image/703259784207400961/230/230/thumbnail",
            alt: "Puppy!"
        },
        {
            src: "http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg",
            alt: "Puppy!"
        },
        {
            src: "https://vetstreet-brightspot.s3.amazonaws.com/fa/19/73e1a8864e8a868b30d728f81431/most-popular-puppy-names-2016-thinkstockphotos-527135315.jpg",
            alt: "Puppy!"
        },
    ];

    return (
      <div className="App">
          <header>
              <h1>A&C Consulting</h1>
          </header>
          <NavBar options={navOptions} />

          <PhotoStream photos={photos} height="250px" />
          <section id="section1">
              <p>
                  Bacon ipsum dolor amet prosciutto spare ribs ground round, alcatra swine picanha fatback shankle pork flank beef ribs cupim. Shank corned beef shankle landjaeger flank pork chop brisket bacon alcatra short loin prosciutto salami ribeye pork loin fatback. Hamburger pork tongue pork loin. Tail andouille strip steak ham picanha burgdoggen. Sirloin pork chop hamburger, jowl pork belly burgdoggen beef ribs cow bacon ball tip capicola. Swine pork turducken ribeye tenderloin. Turducken ham cow fatback.
                  Prosciutto spare ribs rump pancetta kevin alcatra pig shoulder leberkas fatback beef ribs meatball venison pork belly. Picanha brisket jowl, capicola landjaeger turducken beef kielbasa pork loin filet mignon corned beef ground round ball tip turkey. Tri-tip chuck leberkas porchetta pork chop andouille. Picanha kevin pork chop salami shankle landjaeger swine pastrami chicken.
                  Bacon ipsum dolor amet prosciutto spare ribs ground round, alcatra swine picanha fatback shankle pork flank beef ribs cupim. Shank corned beef shankle landjaeger flank pork chop brisket bacon alcatra short loin prosciutto salami ribeye pork loin fatback. Hamburger pork tongue pork loin. Tail andouille strip steak ham picanha burgdoggen. Sirloin pork chop hamburger, jowl pork belly burgdoggen beef ribs cow bacon ball tip capicola. Swine pork turducken ribeye tenderloin. Turducken ham cow fatback.
                  Prosciutto spare ribs rump pancetta kevin alcatra pig shoulder leberkas fatback beef ribs meatball venison pork belly. Picanha brisket jowl, capicola landjaeger turducken beef kielbasa pork loin filet mignon corned beef ground round ball tip turkey. Tri-tip chuck leberkas porchetta pork chop andouille. Picanha kevin pork chop salami shankle landjaeger swine pastrami chicken.
              </p>
          </section>
          <section id="section2">
              <p>
                  Bacon ipsum dolor amet prosciutto spare ribs ground round, alcatra swine picanha fatback shankle pork flank beef ribs cupim. Shank corned beef shankle landjaeger flank pork chop brisket bacon alcatra short loin prosciutto salami ribeye pork loin fatback. Hamburger pork tongue pork loin. Tail andouille strip steak ham picanha burgdoggen. Sirloin pork chop hamburger, jowl pork belly burgdoggen beef ribs cow bacon ball tip capicola. Swine pork turducken ribeye tenderloin. Turducken ham cow fatback.
                  Prosciutto spare ribs rump pancetta kevin alcatra pig shoulder leberkas fatback beef ribs meatball venison pork belly. Picanha brisket jowl, capicola landjaeger turducken beef kielbasa pork loin filet mignon corned beef ground round ball tip turkey. Tri-tip chuck leberkas porchetta pork chop andouille. Picanha kevin pork chop salami shankle landjaeger swine pastrami chicken.
                  Bacon ipsum dolor amet prosciutto spare ribs ground round, alcatra swine picanha fatback shankle pork flank beef ribs cupim. Shank corned beef shankle landjaeger flank pork chop brisket bacon alcatra short loin prosciutto salami ribeye pork loin fatback. Hamburger pork tongue pork loin. Tail andouille strip steak ham picanha burgdoggen. Sirloin pork chop hamburger, jowl pork belly burgdoggen beef ribs cow bacon ball tip capicola. Swine pork turducken ribeye tenderloin. Turducken ham cow fatback.
                  Prosciutto spare ribs rump pancetta kevin alcatra pig shoulder leberkas fatback beef ribs meatball venison pork belly. Picanha brisket jowl, capicola landjaeger turducken beef kielbasa pork loin filet mignon corned beef ground round ball tip turkey. Tri-tip chuck leberkas porchetta pork chop andouille. Picanha kevin pork chop salami shankle landjaeger swine pastrami chicken.
              </p>
          </section>
          <section id="section3">
              <p>
                  Bacon ipsum dolor amet prosciutto spare ribs ground round, alcatra swine picanha fatback shankle pork flank beef ribs cupim. Shank corned beef shankle landjaeger flank pork chop brisket bacon alcatra short loin prosciutto salami ribeye pork loin fatback. Hamburger pork tongue pork loin. Tail andouille strip steak ham picanha burgdoggen. Sirloin pork chop hamburger, jowl pork belly burgdoggen beef ribs cow bacon ball tip capicola. Swine pork turducken ribeye tenderloin. Turducken ham cow fatback.
                  Prosciutto spare ribs rump pancetta kevin alcatra pig shoulder leberkas fatback beef ribs meatball venison pork belly. Picanha brisket jowl, capicola landjaeger turducken beef kielbasa pork loin filet mignon corned beef ground round ball tip turkey. Tri-tip chuck leberkas porchetta pork chop andouille. Picanha kevin pork chop salami shankle landjaeger swine pastrami chicken.
                  Bacon ipsum dolor amet prosciutto spare ribs ground round, alcatra swine picanha fatback shankle pork flank beef ribs cupim. Shank corned beef shankle landjaeger flank pork chop brisket bacon alcatra short loin prosciutto salami ribeye pork loin fatback. Hamburger pork tongue pork loin. Tail andouille strip steak ham picanha burgdoggen. Sirloin pork chop hamburger, jowl pork belly burgdoggen beef ribs cow bacon ball tip capicola. Swine pork turducken ribeye tenderloin. Turducken ham cow fatback.
                  Prosciutto spare ribs rump pancetta kevin alcatra pig shoulder leberkas fatback beef ribs meatball venison pork belly. Picanha brisket jowl, capicola landjaeger turducken beef kielbasa pork loin filet mignon corned beef ground round ball tip turkey. Tri-tip chuck leberkas porchetta pork chop andouille. Picanha kevin pork chop salami shankle landjaeger swine pastrami chicken.
              </p>
          </section>

          <footer>
              Contact information:&nbsp;
              <a href="mailto:alex.david.henry@gmail.com">alex.david.henry@gmail.com</a>
              &nbsp;and&nbsp;
              <a href="mailto:cindy.xn.han@gmail.com">cindy.xn.han@gmail.com</a>
          </footer>
      </div>
    );
  }
}

export default App;
