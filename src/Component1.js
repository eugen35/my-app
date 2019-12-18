import React from 'react';

export default function Component1(props) {
  return (
    <div onClick={props.startTimer}>
      А, я компонент 1. Нажми меня.
    </div>
  );
}
