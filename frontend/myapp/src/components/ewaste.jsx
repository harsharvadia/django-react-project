import React from 'react';
import i1 from './LP.png'
import i2 from './LP1.png'
import i3 from './LP2.png'

const EwasteDisposal = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px',margin:'0px' }}>
      <br />
      <br />
      <div id="abc" className="container" style={{ textAlign: 'justify' }}>
        <h1 className="cormorant-fon">TechGroove | E-waste Disposal</h1>
        <br />
        <p>
          Electronic waste (e-waste) refers to unwanted, discarded or end-of-life electronic products. As we move
          towards a more technology-driven world, there is a steep rise in e-waste generated worldwide. Majority of
          this e-waste ends up in landfills or the informal sector where it is discarded improperly causing harm to
          the environment and human health. At TechGroove, we aim to address this problem by helping our consumers
          dispose their e-waste in a safe and responsible manner. For this, TechGroove has partnered with experts for
          e-waste recycling. To further make the planet green, TechGroove plants a tree in the name of every consumer
          who disposes their e-waste responsibly with TechGroove.
        </p>

        <div className="row">
          <div className="col-6">
            <img src={i1} alt="E-waste illustration" style={{ width: '100%' }} />
            <p>
              E-waste largely contains plastic, precious metals, and toxic chemicals. Disposing e-waste responsibly
              helps to recycle plastic, extract metals for reuse, and treat toxic chemicals, such as lead, in a safe
              facility. Recycling e-waste ensures that dangerous elements are treated properly and resources are
              conserved.
            </p>
            <p>
              In India, over 90% of e-waste ends up in landfills or the informal sector where it is burnt or melted
              with acid. When e-waste is burnt or dumped in landfills, it releases harmful chemicals, such as cadmium,
              which adversely impacts human health and surrounding lands. As our planet has limited resources, it is
              essential for us to conserve natural elements through recycling and reuse. Hence, e-waste needs to be
              managed in a safe environment by experts.
            </p>
          </div>

          <div className="col-6">
            <img src={i2} alt="E-waste management" style={{ width: '100%' }} />
            <p>
              TechGroove has tied up with e-waste disposal experts JustDispose and R Planet who help with safe e-waste
              management and disposal.
            </p>
            <p>
              JustDispose is a leading e-waste disposal agency, certified by Maharashtra Pollution Board, ISO9001:2008
              certified for Quality Management Standard & ISO14001:2004 certified to ensure Environmental Management
              Standard. All e-waste collected from consumers is safely disposed in JustDispose’s state-of-the-art
              facility.
            </p>
            <p>
              R Planet is an Extended Producer Responsibility Organisation (EPRO) for e-waste management and is an
              authorised recycler by the Central Pollution Control Board (CPCB) for recycling e-waste. R Planet helps
              TechGroove with its EPR requirements and recycling of e-waste.
            </p>
          </div>
        </div>

        <div className="row">
          <img src={i3} alt="E-waste recycling process" style={{ width: '100%' }} />
          <p>
            TechGroove has tied up with e-waste disposal experts JustDispose and R Planet who help with safe e-waste
            management and disposal.
          </p>
          <p>
            JustDispose is a leading e-waste disposal agency, certified by Maharashtra Pollution Board, ISO9001:2008
            certified for Quality Management Standard & ISO14001:2004 certified to ensure Environmental Management
            Standard. All e-waste collected from consumers is safely disposed in JustDispose’s state-of-the-art
            facility.
          </p>
          <p>
            R Planet is an Extended Producer Responsibility Organisation (EPRO) for e-waste management and is an
            authorised recycler by the Central Pollution Control Board (CPCB) for recycling e-waste. R Planet helps
            TechGroove with its EPR requirements and recycling of e-waste.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default EwasteDisposal;
