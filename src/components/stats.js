import React from 'react'
import styled from 'styled-components'

import {
  raceId,
  classArray,
  capitalizeFirstLetter,
  factionId
} from '../helpers'

import alliance from '../assets/alliance.png'
import horde from '../assets/horde.png'

const Stats = ({ char }) => {
  return (
    <StatsStyle>
      <figure>
        <img
          src={char.faction === 0 ? alliance : horde}
          alt={factionId[char.faction]}
        />
      </figure>
      <h1>{char.name}</h1>
      <h2>
        Level {char.level} {raceId[char.race]} {classArray[char.class]}
      </h2>
      <div className="row">
        <div className="column">
          <h3>Attributes</h3>
          <div className="stat-group">
            <div className="stat">Health</div>
            <div className="value"> {char.stats.health.toLocaleString()}</div>
          </div>
          <div className="stat-group">
            <div className="stat">
              {capitalizeFirstLetter(char.stats.powerType.toLocaleString())}
            </div>
            <div className="value">{char.stats.power}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Strength</div>
            <div className="value">{char.stats.str.toLocaleString()}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Agility</div>
            <div className="value">{char.stats.agi.toLocaleString()}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Intellect</div>
            <div className="value">{char.stats.int.toLocaleString()}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Stamina</div>
            <div className="value">{char.stats.sta.toLocaleString()}</div>
          </div>
        </div>
        <div className="column">
          <h3>Defense</h3>
          <div className="stat-group">
            <div className="stat">Armor</div>
            <div className="value">{char.stats.armor.toLocaleString()}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Dodge</div>
            <div className="value">{char.stats.dodge.toFixed(2)}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Parry</div>
            <div className="value">{char.stats.parry.toFixed(2)}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Block</div>
            <div className="value">{char.stats.block.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <h3>Attack</h3>
          <div className="stat-group">
            <div className="stat">Min-Max</div>
            <div className="value">
              {char.stats.mainHandDmgMin.toLocaleString()} -{' '}
              {char.stats.mainHandDmgMax.toFixed(2)}
            </div>
          </div>
          <div className="stat-group">
            <div className="stat">Speed</div>
            <div className="value">{char.stats.mainHandSpeed.toFixed(2)}</div>
          </div>
          <div className="stat-group">
            <div className="stat">DPS</div>
            <div className="value">{char.stats.mainHandDps.toFixed(2)}</div>
          </div>
        </div>
        <div className="column">
          <h3>Enhancements</h3>
          <div className="stat-group">
            <div className="stat">Haste</div>
            <div className="value">{char.stats.haste.toFixed(2)}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Crit</div>
            <div className="value">{char.stats.crit.toFixed(2)}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Mastery</div>
            <div className="value">{char.stats.mastery.toFixed(2)}</div>
          </div>
          <div className="stat-group">
            <div className="stat">Versatility</div>
            <div className="value">{char.stats.versatility.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </StatsStyle>
  )
}

export default Stats

const StatsStyle = styled.div`
  background-color: rgba(14, 22, 48, 0.9);
  padding: 2.5rem;

  @media (min-width: 700px) {
    width: 50%;
    margin-left: 5rem;
  }

  figure {
    width: 10rem;
    margin: 0 auto;

    img {
      width: 100%;
    }
  }

  h1,
  h2,
  h3 {
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3rem;
    color: #d7a12e;
    text-align: center;
  }

  h2 {
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  .row {
    display: grid;
    grid-template-columns: 47% 47%;
    grid-gap: 5%;
    margin-bottom: 1rem;
  }

  .stat {
    color: #d7a12e;
  }

  .stat-group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`
