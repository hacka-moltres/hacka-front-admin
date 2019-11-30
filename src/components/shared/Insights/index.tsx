import React, { memo } from 'react';
import uuid from 'uuid';
import { IInsights } from 'interfaces/IInsights';
import Timeline from './Timeline';
import { Paper } from '@material-ui/core';

const data: IInsights[] = [
  {
    id: uuid.v4(),
    type: 'event',
    description: 'Vimos que você vende bastante produto que seria bom em um evento',
    action: ['do-it', 'get-more']
  },
  {
    id: uuid.v4(),
    type: 'upsell',
    description: 'Vimos que você vende bastante produto que seria bom em um evento',
    action: ['do-it']
  },
  {
    id: uuid.v4(),
    type: 'upsell',
    description: 'Vimos que você vende bastante produto que seria bom em um evento'
  }
];

const Insights = memo(() => {
  return (
    <Paper className='content'>
      <h1>Insights</h1>

      {data.map((item, index) => (
        <Timeline key={item.id} data={item} position={index + 1} />
      ))}
    </Paper>
  );
});

export default Insights;
