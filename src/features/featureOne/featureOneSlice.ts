import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
export interface FeatureOneSliceType {
  value: string
}

// Define the initial state using that type
const initialState: FeatureOneSliceType = {
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

export const selectFeatureOne = (state: RootState) => state.one.value;

export default featureOneSlice.reducer;
