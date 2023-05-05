import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetingFromServer } from '../Redux/greetings/greetings';

const HelloWorld = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector((state) => state.greetings);
  const [state, setState] = useState(false);

  const newGreeting = () => {
    setState(() => false);
    dispatch(getGreetingFromServer());
  };

  useEffect(() => {
    dispatch(getGreetingFromServer());
  }, [dispatch]);

  useEffect(() => {
    setState(() => greetings);
  }, [greetings]);

  return (
    <div className="container">
      <p>Hello world 😃</p>
      <button className="refresh-button" type="button" onClick={newGreeting}>
        Hello Microverse
      </button>
      <p>{state ? greetings.name : ''}</p>
    </div>
  );
};

export default HelloWorld;
