import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from './types';

// export const getLogs = () => {

//     return async  (dispatch)=>{

//         //set loading to true
//         setLoading();

//         //make fetch request to back end for the logs
//         const res = await fetch('/logs');

//         // convert the responce to a json object
//         const data = await res.json();

//         dispatch({type: GET_LOGS, PAYLOAD: DATA});

//     }

// };

// get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //fetch logs
    const res = await fetch('/logs');

    //convert logs to json
    const data = await res.json();

    dispatch({ type: GET_LOGS, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

// add logs from server
export const addLog = (log) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //POST Logs
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    //convert logs to json
    const data = await res.json();

    console.log(data);

    dispatch({ type: ADD_LOG, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

// delete logs from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //POST Logs
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

//UPDATE LOG ON SERVER
export const updateLog = (log) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //POST Logs
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({ type: UPDATE_LOG, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

// Search logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    //set loading to true
    setLoading();

    //fetch logs
    const res = await fetch(`/logs?q=${text}`);

    //convert logs to json
    const data = await res.json();

    dispatch({ type: SEARCH_LOGS, payload: data });
  } catch (error) {
    dispatch({ type: LOGS_ERROR, payload: error.response.statusText });
  }
};

//set current log

export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
