import React from 'react'
import styled from 'styled-components'

import { itemQuality } from '../helpers'

const Equipment = ({ char }) => {
  return (
    <EquipmentStyles>
      <h2>Equipment</h2>
      <div className="row">
        <div className="slot">Main Hand</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.mainHand.quality]}` }}
        >
          {char.items.mainHand.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Off Hand</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.offHand.quality]}` }}
        >
          {char.items.offHand.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Head</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.head.quality]}` }}
        >
          {char.items.head.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Neck</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.neck.quality]}` }}
        >
          {char.items.neck.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Shoulder</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.shoulder.quality]}` }}
        >
          {char.items.shoulder.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Back</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.back.quality]}` }}
        >
          {char.items.back.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Chest</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.chest.quality]}` }}
        >
          {char.items.chest.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Waist</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.waist.quality]}` }}
        >
          {char.items.waist.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Wrist</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.wrist.quality]}` }}
        >
          {char.items.wrist.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Hands</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.hands.quality]}` }}
        >
          {char.items.hands.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Legs</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.legs.quality]}` }}
        >
          {char.items.legs.name}
        </div>
        <div className="ilvl">{char.items.legs.itemLevel} iLvl</div>
      </div>
      <div className="row">
        <div className="slot">Feet</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.feet.quality]}` }}
        >
          {char.items.feet.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Finger</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.finger1.quality]}` }}
        >
          {char.items.finger2.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Finger</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.finger2.quality]}` }}
        >
          {char.items.finger2.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Trinket</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.trinket1.quality]}` }}
        >
          {char.items.trinket1.name}
        </div>
        <div className="cost">Cost</div>
      </div>
      <div className="row">
        <div className="slot">Trinket</div>
        <div
          className="item"
          style={{ color: `${itemQuality[char.items.trinket2.quality]}` }}
        >
          {char.items.trinket2.name}
        </div>
        <div className="cost">Cost</div>
      </div>
    </EquipmentStyles>
  )
}

const EquipmentStyles = styled.div`
  background-color: rgba(14, 22, 48, 0.9);
  padding: 2.5rem;

  h2 {
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .row {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    margin-bottom: 1rem;
  }

  .slot {
    color: #d7a12e;
  }
`

export default Equipment
