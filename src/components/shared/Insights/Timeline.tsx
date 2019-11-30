import React, { memo } from 'react';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { IInsights } from 'interfaces/IInsights';
import { makeStyles } from '@material-ui/styles';

interface IProps {
  data: IInsights;
}

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 16
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DEE2E5',
    borderRadius: 5,
    height: 150,
    marginRight: 30,
    padding: 12
  },
  text: {
    fontSize: 15
  },
  title: {
    fontSize: 17,
    fontWeight: 500
  },
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  card: {
    height: 150,
    width: '100%'
  },
  tip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    width: 30,
    backgroundColor: '#DEE2E5',
    borderRadius: 4
  },
  conversion: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid #DEE2E5',
    width: 250
  },
  textConversion: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#333'
  },
  textValue: {
    fontSize: 32,
    color: '#333'
  },
  description: {
    padding: 12
  },
  cardContent: {
    display: 'flex'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 12
  },
  icon: {
    color: '#02A86A',
    fontSize: 32
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#FFD900',
    color: '#333'
  }
}));

const Timeline = memo(({ data }: IProps) => {
  const classes = useStyles({});

  return (
    <Grid container className={classes.root} justify='center' alignItems='center'>
      <Grid item sm={2}>
        <div className={classes.titleContainer}>
          <Typography align='center'>{data.title}</Typography>
        </div>
      </Grid>
      <Grid item sm={10}>
        <div className={classes.container}>
          <div className={classes.tip}>
            <Typography style={{ transform: 'rotate(-90deg)' }}>TIP</Typography>
          </div>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <div className={classes.conversion}>
                <Typography className={classes.textConversion}>Expectativa de crescimento</Typography>

                <div className={classes.iconContainer}>
                  <Typography className={classes.textValue}>{data.value}%</Typography>
                  <ArrowUpward className={classes.icon} />
                </div>

                <Typography className={classes.textConversion}>{data.valueText}</Typography>
              </div>
              <div className={classes.description}>
                <Typography className={classes.title}>{data.descriptionTitle}</Typography>

                <Typography className={classes.text}>{data.description}</Typography>

                <Button variant='contained' className={classes.button}>
                  Vamos lá
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
});

export default Timeline;
