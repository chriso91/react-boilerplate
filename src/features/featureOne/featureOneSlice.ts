import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface FeatureOneSlice {
  value: string
}

// Define the initial state using that type
const initialState: FeatureOneSlice = {
  value: 'initial',
}

export const featureOneSlice = createSlice({
  name: 'featureOne',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { change } = featureOneSlice.actions;

type select = (state: RootState) => string;
export const selectFeatureOne:select = (state: RootState) => state.one.value;

export default featureOneSlice.reducer;
