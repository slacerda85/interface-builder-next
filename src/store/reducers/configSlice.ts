import { createSlice } from '@reduxjs/toolkit'

declare global {
  var ENVIRONMENT: {
    environmentName: string,
    environmentUri: string
  }

  var INSTANCE: {
    instanceName: string,
    instanceUri: string
  }
}

const initialState = {
  configLoaded: false,
  environment: {
    environmentName: process.env.NODE_ENV === 'development' ? 'Development' : window.ENVIRONMENT.environmentName,
    environmentUri: process.env.NODE_ENV === 'development' ? 'ambiente' : window.ENVIRONMENT.environmentUri
  },
  instance: {
    instanceName:
      process.env.NODE_ENV === 'development' ? 'NextWeb' : window.INSTANCE.instanceName,
    instanceUri:
      process.env.NODE_ENV === 'development' ? 'web' : window.INSTANCE.instanceUri
  }
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig(state, action) {
      state.environment = action.payload.environment
      state.instance = action.payload.instance
    }
  }
})

export default configSlice.reducer


/* 
export const Types = {
  SET_CONFIG: 'config/SET_CONFIG'
}



export default function configReducer(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Types.SET_CONFIG:
      return {
        ...state,
        environment: action.payload.environment,
        instance: action.payload.instance,
        user: action.payload.user
      }
    default:
      return state
  }
}

export const actionCreators = {
  login: (environment: string, instance: string, user: any, calendar: any) => ({
    type: Types.SET_CONFIG,
    payload: {
      environment,
      instance,
      user
    }
  })
}
export { actionCreators as configActions }
 */