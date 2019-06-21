export const capitalizeFirstLetter = str => {
  const firstLetter = str[0].toUpperCase()
  const remainingLetters = str.slice(1, str.length)
  return firstLetter + remainingLetters
}

export const classArray = [
  'None',
  'Warrior',
  'Paladin',
  'Hunter',
  'Rogue',
  'Priest',
  'Death Knight',
  'Shaman',
  'Mage',
  'Warlock',
  'Monk',
  'Druid',
  'Demon Hunter'
]

export const raceId = {
  1: 'Human',
  2: 'Orc',
  3: 'Dwarf',
  4: 'Night Elf',
  5: 'Undead',
  6: 'Tauren',
  7: 'Gnome',
  8: 'Troll',
  9: 'Goblin',
  10: 'Blood Elf',
  11: 'Draenei',
  22: 'Worgen',
  24: 'Pandaren',
  25: 'Pandaren',
  26: 'Pandaren',
  27: 'Nightborne',
  28: 'Highmountain Tauren',
  29: 'Void Elf',
  30: 'Lightforged Draenei',
  31: 'Zandalari Troll',
  32: 'Kul Tiran',
  34: 'Dark Iron Dwarf',
  36: "Mag'har Orc"
}

export const factionId = ['alliance', 'horde']

export const itemQuality = [
  '#9d9d9d',
  '#ffffff',
  '#1eff00',
  '#0070dd',
  '#a335ee',
  '#ff8000',
  '#e6cc80',
  '#e6cc80',
  '#00ccff'
]
