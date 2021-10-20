//Core
import React from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
// Redux
import { changeTag } from '../../redux/posts/actions';
import { getTag } from '../../redux/posts/selector';
// Instruments
import { findOption } from '../../utils/findOption';

const options = [
  { label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'React.js', value: 'react' },
];

export const TagFilter = () => {
  const dispatch = useDispatch()
  const tag = useSelector(state => getTag(state))

    return(
      <div style={{ width: 200 }}>
        <Select
          options={options}
          value={findOption(tag, options)}
          onChange={(e)=> dispatch(changeTag(e.value))}
        />
      </div>
    )
}