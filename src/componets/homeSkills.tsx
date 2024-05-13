import React from 'react'
import TopWave from '../assets/images/decorations/banner-wave-yellow-bottom.svg';
import BottomWave from '../assets/images/decorations/banner-wave-yellow.svg';
import HammerIcon from '../assets/images/icons/decor/hammer-solid.svg';
import SkillSet from '../Data/json/misc/skillSet.json'

function HomeSkills(){
  const CreateSkillItem = ({itemName}: {itemName: string}) => {
    return (
      <div className="skill-item">
        <h1>{itemName}</h1>
      </div>
    )
  }

  const BuildSkillSet = () => SkillSet.SkillSet.map(item => {
    return (
      <CreateSkillItem key={item.id} itemName={item.itemName}/>
    )
  })

  return(
    <div className='home-skills'>
      <img src={TopWave} draggable='false' alt="Page wave"></img>
      <div className='home-inner-content'>
        <div className='skills-txt'>
          <img src={HammerIcon} draggable='false' alt="Icon"></img>
          <h1>Skills</h1>
        </div>
        <hr></hr>
        <div className='skill-item-container'>
          <BuildSkillSet/>
        </div>
      </div>
      <img src={BottomWave} draggable='false' alt="Page wave"></img>
    </div>
  )
}

export default HomeSkills;