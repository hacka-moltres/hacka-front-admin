import React, { memo } from 'react';
import uuid from 'uuid';
import { IInsights } from 'interfaces/IInsights';
import Timeline from './Timeline';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import WhatsApp from '@material-ui/icons/WhatsApp';
import { makeStyles } from '@material-ui/styles';

const data: IInsights[] = [
  {
    id: uuid.v4(),
    type: 'event',
    title: 'Crie um evento na Blinket',
    descriptionTitle: '20% dos seus leads mais quentes estão em Florianópolis-SC',
    description: `Sua lista que adquiriu o produto MEU SUCESSO costumam frequentar eventos.
      Já pensou em criar um evento em Florianópolis`,
    value: 30,
    valueText: 'em seus ganhos',
    action: ['do-it', 'get-more'],
    button: 'Crie seu evento agora mesmo!'
  },
  {
    id: uuid.v4(),
    type: 'upsell',
    title: 'Venda mais com o UPSELL',
    description: 'Crie um upsell em sua página de vendas para o produto A GRANDE SACADA agora mesmo!',
    descriptionTitle: 'Os seus clientes comprando o produto MEU SUCESSO se interessam pelo seu produto A GRANDE SACADA',
    value: 18,
    valueText: 'em ganhos',
    action: ['do-it'],
    button: 'Altere a sua página de obrigado'
  },
  {
    id: uuid.v4(),
    type: 'checkout',
    title: 'Já pensou em mudar de visual?',
    value: 2,
    valueText: 'em conversão',
    descriptionTitle: 'Os seus abandonos costumam comprar mais produtos que tem estimulos visuais',
    description: 'Vimos que você vende bastante produto que seria bom em um evento',
    button: 'Customize o seu checkout'
  }
];

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 40
  },
  paper: {
    height: 60,
    marginRight: 40,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase'
  },
  align: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  button: {
    height: 60,
    color: '#fff',
    backgroundColor: '#02A86A'
  },
  icon: {
    marginRight: 6
  }
}));

const Insights = memo(() => {
  const classes = useStyles({});

  return (
    <div className='content'>
      <Grid container justify='center' alignItems='center' className={classes.root}>
        <Grid item sm={2}>
          <Paper className={classes.paper}>
            <Typography align='center' style={{ fontSize: '0.8rem' }}>
              Meus Insights
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={10}>
          <div className={classes.align}>
            <Button variant='contained' className={classes.button}>
              <WhatsApp className={classes.icon} />
              Fale com seu gerente
            </Button>
          </div>
        </Grid>
      </Grid>

      {data.map(item => (
        <Timeline key={item.id} data={item} />
      ))}
    </div>
  );
});

export default Insights;
