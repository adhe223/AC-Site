import React, { Component } from 'react';
import './App.css';
import NavBar from './component-library/components/NavBar';

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

    return (
      <div className="App">
          <header>
              <h1>A&C Consulting</h1>
          </header>
          <NavBar options={navOptions} />

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
