import React, { Component } from 'react';
import Block from './Rebellion/Block';
import Header from './Header';

class Rebellion extends Component {

  render() {

    let b1 = `For quite some time before the beginning of the series, the Targaryens ruled the Seven
    Kingdoms. They were a long-time dynasty and the crown had been passed down their family
    line for 300 years. The last king before the war goes down is Aerys Targaryen.`;

    let b2 = `In case you missed it, Targaryens marry brother to sister to keep
    their bloodline pure (get used to incest). So, Aerys was married to his sister, Rhaella,
    and they had 2 children at the time: Rhaegar and Viserys. Aerys was known as the Mad King and
    for good reason - he had people killed left and right and many houses rebelled against him
    (Rebelled. Robert's Rebellion. See where this is going?)`;

    let b3 = `Rhaegar was married to Elia Martell but he had feelings for someone else - Robert's wife,
    Lyanna Stark. He went and abducted her but here's the catch: Lyanna felt the same way and
    they actually ran off. However, in the minds of the Starks and Baratheons, it was an abduction and
    they wanted answers.`;

    let b4 = `Brandon Stark (Lyanna's brother) showed up at King's Landing demanding that Rhaegar be
    arrested. Instead, it was him that got locked up for treason (he played himself). Aerys asked his
    father Rickon to come to court for a fair trial. Remember how I said Aerys was a
    madman? Well, he had Rickon burned alive when he showed up and Brandon was strangled.`;

    let b5 = `Thus formed the alliance between House Stark, Baratheon, Arryn, and Tully. Lyanna's brother,
    Eddard Stark, married Catelyn Tully and Jon Arryn married Lysa Tully. The 4 houses Rebelled
    against Aerys in what became known as the Battle of the Trident. It was at The Trident River
    that Robert killed Rhaegar and the Targaryen army was completely destroyed. Lyanna died
    during the war with Eddard by her side after he rescued her.`;

    let b6 = `With King's Landing now unprotected, it was a matter of time before the Rebels would
    take over the capital. However, the Lannisters, who were presumably allies with House
    Targaryen, arrived there first and instead turned on the Mad King. Jaime Lannister,
    who was part of the Kingsguard, murdered
    Aerys during this sack. Elia and her two children were murdered by Gregor Clegane.`;

    let b7 = `Before Aerys was killed, he had his pregnant wife Rhaella flee to
    Dragonstone with their son Viserys. While there, she gave birth to their third child,
    Daenerys. Rhaella passed away shortly after. The locals at Dragonstone had Viserys and
    Daenerys taken into exile in the Free Cities.`;

    let b8 = `Back at King's Landing, Eddard was not happy with the way House Lannister handled things and
    wanted them punished, but Robert was more forgiving with the Targaryen dynasty finally over.
    He claimed the Iron Throne, married Cersei Lannister and made Jon Arryn his Hand. `;

    let b9 = `Ah yes, so we reach episode 1. Daenerys is a lot older but
    still in the Free Cities with her brother; Robert and Cersei have a couple kids now; and Eddard
    is back in the North and has a few kids of his own with Catelyn. However, it's not all sunshine
    and roses as news breaks out that Jon Arryn has been killed.
    And so we begin - strap on tight.`;

    return (
      <div className="route-cont">
        <Header/>
        <div className="content">
          <div className="desc-cont" id="desc-cont-reb">
            <p className="subheading">Robert's Rebellion</p>
            <p>If you've read any of the previous sections, you probably saw mentions of
              Robert's Rebellion. Well - turns out - it is one of the biggest series of events in the Game of Thrones
              Universe and essential knowledge before you dive into the show. It occurs not long before beginning
              of the series and sets up the current state in Westeros. You could probably read into it a lot more
              elsewhere, but I will try to summarize the events the best I can.
            </p>
          </div>
          <section className="timeline">
            <ul>
              <Block title="Targaryen Dynasty" info={b1} divid="1"/>
              <Block title="The Absolute Madman" info={b2} divid="2"/>
              <Block title="Broken Marriage" info={b3} divid="1"/>
              <Block title="Trial by Fire?" info={b4} divid="2"/>
              <Block title="Battle of the Trident" info={b5} divid="1"/>
              <Block title="Sack of King's Landing" info={b6} divid="2"/>
              <Block title="Flee the Scene" info={b7} divid="1"/>
              <Block title="The Aftermath" info={b8} divid="2"/>
              <Block title="15 Years Later..." info={b9} divid="1"/>
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default Rebellion;
