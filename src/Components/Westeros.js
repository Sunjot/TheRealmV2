import React, { Component } from 'react';
import KingsLanding from '../images/kl.jpg';
import TheWall from '../images/wall.jpg';
import Header from './Header';

class Westeros extends Component {

  render() {

    return (
      <div>
        <Header/>
        <div className="content">
          <div id="westeros-info-cont">
            <p className="subheading">Westeros</p>
            <p className="desc-cont">If you read the previous section, you know that I mentioned the importance
              of Westeros. Almost all the action in the show takes place here. I also made a point to mention
              that this continent is split into two areas - the Seven Kingdoms and the area Beyond the Wall.
              However, it isn't that simple. We must break it down even further! I mean, it's called the Seven
              Kingdoms for a reason - it's important we go into detail on what these kingdoms actually are.
              Not only that, but what exactly lies Beyond the Wall? Not to worry, everything will be addressed!
            </p>
          </div>
          <div id="westeros-cont">
            <div id="seven-kingdoms" className="westeros-subsec">
              <div className="info">
                <p className="miniheading">Seven Kingdoms</p>
                <p className="desc">
                  I'm guessing you've caught on by now that the Seven Kingdoms probably
                  has seven kingdoms. Well, there's a caveat. There were originally seven kingdoms, but then two
                  more were formed later after a war took place. So now, there are actually nine regions.
                  As to exactly why that happened - well, not something we really need to delve into.
                  Each of these regions have a capital and a potential ruler
                  (a house). These regions are: The North, The Vale of Arryn, The Riverlands,
                  Iron Islands, The Westernlands, The Crownlands, The Stormlands, The Reach, and Dorne.
                </p>
              </div>
              <img id="kl-pic" src={KingsLanding}></img>
            </div>
            <div id="beyond-wall" className="westeros-subsec">
              <img id="wall-pic" src={TheWall}></img>
              <div className="info">
                <p className="miniheading">Beyond the Wall</p>
                <p className="desc">
                  Essentially the arctic region of the Game of Thrones world that is seperated from the
                  Seven Kingdoms by a huge wall. This wall is guarded by a military order known as the Night's
                  Watch. Guarded from what you ask? Well, the area Beyond the Wall is actually inhabited
                  (believe it or not) by people known as the Free Folk, who those in the Seven Kingdoms call
                  wildlings. Not only that, but there are also dangerous ice creatures
                  from centuries ago that presumably roam Beyong the Wall. Very few who have seen them have
                  lived to tell the tale, and those who haven't refuse to believe they exist.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Westeros;
