import React, { memo, useState, useCallback } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { makeStyles } from '@material-ui/styles';

const data = [
  {
    name: 'Jan',
    Empreendedorismo: 1000,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 4000,
    AutoAjuda: 5000,
    amt: 2400
  },
  {
    name: 'Fev',
    Empreendedorismo: 3000,
    Emagrecimento: 2000,
    Coaching: 4000,
    Yoga: 5000,
    AutoAjuda: 2500,
    amt: 2400
  },
  {
    name: 'Mar',
    Empreendedorismo: 3000,
    Emagrecimento: 4000,
    Coaching: 5000,
    Yoga: 8000,
    AutoAjuda: 3000,
    amt: 2400
  },
  {
    name: 'Abr',
    Empreendedorismo: 4500,
    Emagrecimento: 4000,
    Coaching: 3000,
    Yoga: 9000,
    AutoAjuda: 3000,
    amt: 2400
  },
  {
    name: 'Maio',
    Empreendedorismo: 6500,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 7000,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Jun',
    Empreendedorismo: 4500,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 6000,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Jul',
    Empreendedorismo: 4700,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 6500,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Ago',
    Empreendedorismo: 6500,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 8000,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Set',
    Empreendedorismo: 7000,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 7500,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Out',
    Empreendedorismo: 8000,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 7600,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Nov',
    Empreendedorismo: 6000,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 7900,
    AutoAjuda: 7000,
    amt: 2400
  },
  {
    name: 'Dez',
    Empreendedorismo: 6000,
    Emagrecimento: 2000,
    Coaching: 3000,
    Yoga: 8200,
    AutoAjuda: 7000,
    amt: 2400
  }
];

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Charts = memo(() => {
  const classes = useStyles({});

  const [opacity, setOpacity] = useState({
    Empreendedorismo: 1,
    Emagrecimento: 1,
    Coaching: 1,
    Yoga: 1,
    AutoAjuda: 1,
    amt: 1
  });

  const handleMouseEnter = useCallback(
    (o: any) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 0.5 });
    },
    [opacity]
  );

  const handleMouseLeave = useCallback(
    (o: any) => {
      const { dataKey } = o;
      setOpacity({ ...opacity, [dataKey]: 1 });
    },
    [opacity]
  );

  return (
    <div className={classes.root}>
      <LineChart
        width={1000}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        <Line
          type='monotone'
          dataKey='Empreendedorismo'
          strokeOpacity={opacity.Empreendedorismo}
          stroke='#8884d8'
          activeDot={{ r: 5 }}
        />
        <Line
          type='monotone'
          dataKey='Emagrecimento'
          strokeOpacity={opacity.Emagrecimento}
          stroke='#D4AF37'
          activeDot={{ r: 5 }}
        />
        <Line
          type='monotone'
          dataKey='Coaching'
          strokeOpacity={opacity.Coaching}
          stroke='#1c86ee'
          activeDot={{ r: 5 }}
        />
        <Line type='monotone' dataKey='Yoga' strokeOpacity={opacity.Yoga} stroke='#fd837b' activeDot={{ r: 5 }} />
        <Line
          type='monotone'
          dataKey='AutoAjuda'
          strokeOpacity={opacity.AutoAjuda}
          stroke='#7dfe3f'
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </div>
  );
});

export default Charts;
