import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  //using helper functions from lodash
  return _.round(_.sum(data)/data.length);
}


export default (props) => {
  return (
    <div>
    <Sparklines data={props.data} width={200} svgHeight={80}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)} {props.unit}</div>
    </div>
  )
}
