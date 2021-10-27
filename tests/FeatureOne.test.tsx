import counterReducer, {
  FeatureOneSliceType,
  change,
  selectFeatureOne
} from '../src/features/featureOne/FeatureOneSlice';


import {RootState} from '../src/app/store';


describe('feature one', () => {
  const initialState: FeatureOneSliceType = {
    value: "initial",
  };

  it("should return feature one select", () => {
    const state: RootState = {
      one: {
        value: 'what'
      }
    };

    const value = selectFeatureOne(state);

    expect(value).toEqual(state.one.value);
  })

  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: "initial",
    });
  });

  it('should handle being changed', () => {
    const actual = counterReducer(initialState, change('new'));
    expect(actual.value).toEqual('new');
  });
});
