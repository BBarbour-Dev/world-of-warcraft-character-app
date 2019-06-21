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
          style={{
            color: `${
              char.items.mainHand
                ? itemQuality[char.items.mainHand.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.mainHand ? char.items.mainHand.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.mainHand ? char.items.mainHand.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Off Hand</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.offHand
                ? itemQuality[char.items.offHand.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.offHand ? char.items.offHand.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.offHand ? char.items.offHand.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Head</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.head ? itemQuality[char.items.head.quality] : '#fafafa'
            }`
          }}
        >
          {char.items.head ? char.items.head.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.head ? char.items.head.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Neck</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.neck ? itemQuality[char.items.neck.quality] : '#fafafa'
            }`
          }}
        >
          {char.items.neck ? char.items.neck.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.neck ? char.items.neck.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Shoulder</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.shoulder
                ? itemQuality[char.items.shoulder.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.shoulder ? char.items.shoulder.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.shoulder ? char.items.shoulder.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Back</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.back ? itemQuality[char.items.back.quality] : '#fafafa'
            }`
          }}
        >
          {char.items.back ? char.items.back.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.back ? char.items.back.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Chest</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.chest
                ? itemQuality[char.items.chest.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.chest ? char.items.chest.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.chest ? char.items.chest.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Waist</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.waist
                ? itemQuality[char.items.waist.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.waist ? char.items.waist.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.waist ? char.items.waist.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Wrist</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.wrist
                ? itemQuality[char.items.wrist.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.wrist ? char.items.wrist.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.wrists ? char.items.wrist.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Hands</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.hands
                ? itemQuality[char.items.hands.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.hands ? char.items.hands.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.hands ? char.items.hands.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Legs</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.legs ? itemQuality[char.items.legs.quality] : '#fafafa'
            }`
          }}
        >
          {char.items.legs ? char.items.legs.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.legs ? char.items.legs.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Feet</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.feet ? itemQuality[char.items.feet.quality] : '#fafafa'
            }`
          }}
        >
          {char.items.feet ? char.items.feet.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.feet ? char.items.feet.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Finger</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.finger1
                ? itemQuality[char.items.finger1.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.finger1 ? char.items.finger1.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.finger1 ? char.items.finger1.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Finger</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.finger2
                ? itemQuality[char.items.finger2.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.finger2 ? char.items.finger2.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.finger2 ? char.items.finger2.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Trinket</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.trinket1
                ? itemQuality[char.items.trinket1.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.trinket1 ? char.items.trinket1.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.trinket1 ? char.items.trinket1.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <div className="row">
        <div className="slot">Trinket</div>
        <div
          className="item"
          style={{
            color: `${
              char.items.feet
                ? itemQuality[char.items.trinket2.quality]
                : '#fafafa'
            }`
          }}
        >
          {char.items.trinket2 ? char.items.trinket2.name : '-'}
        </div>
        <div className="ilvl">
          {char.items.trinket2 ? char.items.trinket2.itemLevel + ' iLvl' : '-'}
        </div>
      </div>
      <h3>Averge iLvl: {char.items.averageItemLevelEquipped}</h3>
    </EquipmentStyles>
  )
}

const EquipmentStyles = styled.div`
  background-color: rgba(14, 22, 48, 0.9);
  padding: 2.5rem;

  @media (min-width: 700px) {
    width: 40%;
  }

  h2 {
    letter-spacing: 1px;
    text-align: center;
    margin-bottom: 2rem;
  }

  h3 {
    text-align: center;
    margin-top: 2rem;
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
