import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/greetingsSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const {message} = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(getGreetings());
  }, [dispatch]);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
};

export default Greeting;