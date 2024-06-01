import React from 'react';

export default function ShowTeamInfo(props) {
  return (
    <>
    <div className='container'>
      <p><span className='main'>Название:</span> {props.name}</p>
      <p><span className='main'>Дата основания:</span> {props.date}</p>
      <p><span className='main'>Город:</span> {props.city}</p>
      <p><span className='main'>Тренер:</span> {props.trainer}</p>
      <p><span className='main'>Герб:</span></p>
      <img
        src={props.imageUrl}
        alt={'Фото ' + props.name}
        style={{
          width: props.imageW,
          height: props.imageH
        }}
      />
      <p><span className='team'>Состав команды:</span> {props.people} человек</p>
    </div>
    </>
  );
}