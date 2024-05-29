import React from 'react';
const team1 = {
    name: "Динамо Киев",
    city: "Киев",
    date: "1927г",
    trainer: 'Александр Шовковский',
    people: 21,
    imageUrl: 'assets/img/dinamo.jpg',
    imageW: 400,
    imageH: 250
};

export function ShowTeamInfo(props) {
    return (
        <>
            <p><span className='main'>Название:</span>  {team.name}</p>
            <p><span className='main'>Дата основания:</span> {team.date}</p>
            <p><span className='main'>Город:</span> {team.city}</p>
            <p><span className='main'>Тренер:</span> {team.trainer}</p>
            <p><span className='main'>Герб:</span></p>
            <img
                src={team.imageUrl}
                alt={'Фото ' + team.name}
                style={{
                width: team.imageW,
                height: team.imageH
            }}
            />
        </>
    );
}
export function Achievment() {
    return (
        <>
        <div className='achieve'>
            <p><span className='main'>Национальных чемпионатов:</span> 16</p>
            <p><span className='main'>Национальных кубков:</span> 13</p>
            <p><span className='main'>Суперкубков Украины:</span> 9</p>
        </div>
        </>
    );
}

export function AboutTeam() {
    return (
        <>
        <div className=''>
            <p><span className='team'>Состав команды:</span> {team.people} человек</p>
        </div>
        </>
    );
}

const ListItem = props => {
    const value = props.value;
    return 
    
  }
  
  export const List = ({ items }) => {
    return (
      <ul>{
        items.map(item => <ListItem key={item.toString()} value={item}/>)
      }</ul>
    );
  }