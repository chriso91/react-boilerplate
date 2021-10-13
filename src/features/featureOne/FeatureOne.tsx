import * as React from 'react';
import {useState} from 'react';
import {FC} from "react";

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
  change,
  selectFeatureOne
} from './featureOneSlice'

const FeatureOne:FC = () => {
  const featureOne = useAppSelector(selectFeatureOne);
  const dispatch = useAppDispatch();

  const [oneAmount, setOneAmount] = useState(featureOne);

  return (
    <div>
      <h1>{featureOne}</h1>
      <input
        value={oneAmount}
        onChange={(e) => setOneAmount(e.target.value)}
      />
      <button
        onClick={() => dispatch(change(oneAmount))}
      >
          Change Feature One
      </button>
    </div>
  )
}

export default FeatureOne;
