import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	optionsStatus: 'loading',
	optionsLoaded: false,
}

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptionStatus(state, action) {},
    addOption(state, action) {},
    editOption(state, action) {},
    deleteOption(state, action) {}
  }
})

/* export const Types = {
	UPDATE: 'options/UPDATE',
	SET_OPTIONS_STATUS: 'options/SET_OPTIONS_STATUS',
	ADD_OPTION: 'options/ADD_OPTION',
	EDIT_OPTION: 'options/EDIT_OPTION',
	DELETE_OPTION: 'options/DELETE_OPTION',
} */