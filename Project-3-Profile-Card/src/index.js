import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const skills= [
    {
      "skill": "Python",
      "level": "Intermediate",
      "color": "yellow"
    },
    {
      "skill": "JavaScript",
      "level": "Advanced",
      "color": "#008000"
    },
    {
      "skill": "C++",
      "level": "Intermediate",
      "color": "red"
    },
    {
      "skill": "Java",
      "level": "Intermediate",
      "color": "blue"
    },
    {
      "skill": "React.js",
      "level": "Advanced",
      "color": "pink"
    },
    {
      "skill": "Node.js",
      "level": "Advanced",
      "color": "purple"
    },
    {
      "skill": "Express.js",
      "level": "Intermediate",
      "color": "violet"
    },
    {
      "skill": "Bootstrap",
      "level": "Intermediate",
      "color": "gold"
    },
    {
      "skill": "MongoDB",
      "level": "Advanced",
      "color": "grey"
    },
    {
      "skill": "SQL",
      "level": "Intermediate",
      "color": "silver"
    }
  ]


function App(){
  return(
    <div className='card'>
      <Avatar avatar="focaccia.jpg"/>
      <div className='data'>
        <Intro name="Sinega E" role="Full Stack Developer" intro="A passionate developer with a knack for creating seamless web applications using modern technologies."/>
        <SkillList/>
      </div>
    </div>
  )
}


function Avatar(props){
  return <img className='avatar' src={props.avatar} alt="avatar"/>
}
function Intro(props){
  return(
    <div className='intro'>
       <h2>{props.name}</h2>
       <p><i>{props.role}</i></p>
       <p>{props.intro}</p>
       </div>
 
  )
}
function SkillList(){
  return(
    <div className='skill-list'>
      {
      skills.map(data=><Skill skills={data.skill} level={data.level} color={data.color}/>)
      }
    </div>

  )
}
function Skill({skills,level,color}){
  return(
    <div className='skill' style={{backgroundColor:color}}>
      <span>{skills}</span>
      <span>
        {level === 'Beginner' && '-N'}
        {level === 'Intermediate' && "-G"}
        {level === 'Advanced' && "-B"}

      </span>
    </div>
  )


}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


