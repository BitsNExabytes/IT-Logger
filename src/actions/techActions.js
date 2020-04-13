import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types';

//Get techs from sever

export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    // fetch the technicians from the data base
    const res = await fetch('/techs');

    // turn response to javascript object
    const data = await res.json();

    //dispatch data to reducer

    dispatch({ type: GET_TECHS, payload: data });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

//add tech server
export const addTech = (tech) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //POST Logs
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //convert logs to json
    const data = await res.json();

    dispatch({ type: ADD_TECH, payload: data });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

//delete tech
export const deleteTech = (id) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //POST Logs
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({ type: DELETE_TECH, payload: id });
  } catch (error) {
    dispatch({ type: TECHS_ERROR, payload: error.response.statusText });
  }
};

//set loading to true

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};