import React, { memo } from 'react';
import { Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import { IInsights } from 'interfaces/IInsights';
import { makeStyles } from '@material-ui/styles';
import { boxShadow } from '../../../assets/theme/index';

interface IProps {
  data: IInsights;
}

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 40
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    backgroundColor: '#DEE2E5',
    borderRadius: 5,
    height: 200,
    marginRight: 30,
    padding: 20,
    boxShadow
  },
  text: {
    fontSize: 17,
    marginBottom: 20
  },
  cardText: {
    fontSize: '1.4rem'
  },

  title: {
    fontSize: 20,
    fontWeight: 500
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 200,
    boxShadow
  },
  card: {
    height: '100%',
    width: '100%',
    boxShadow: 'none !important',
    display: 'flex',
    alignItems: 'center'
  },
  tip: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 30,
    backgroundColor: '#DEE2E5',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3
  },
  conversion: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRight: '1px solid #DEE2E5',
    width: 200,
    paddingLeft: 10,
    marginRight: 20
  },
  textConversion: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#333'
  },
  textValue: {
    fontSize: '2.5rem',
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
    fontSize: 32,
    position: 'relative',
    bottom: 10
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: '#FFD900',
    color: '#333',
    height: 50
  }
}));

const Timeline = memo(({ data }: IProps) => {
  const classes = useStyles({});

  return (
    <Grid container className={classes.root} justify='center' alignItems='center'>
      <Grid item sm={2}>
        <div className={classes.titleContainer}>
          <Typography className={classes.cardText}>{data.title}</Typography>
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

                <Button variant='contained' className={classes.button} style={{ fontWeight: 700 }}>
                  <svg
                    style={{
                      width: 20,
                      marginRight: 10
                    }}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path d='M437.019 74.98C388.667 26.629 324.38 0 256 0 187.619 0 123.331 26.629 74.98 74.98 26.628 123.332 0 187.62 0 256s26.628 132.667 74.98 181.019C123.332 485.371 187.619 512 256 512c68.38 0 132.667-26.629 181.019-74.981C485.371 388.667 512 324.38 512 256s-26.629-132.667-74.981-181.02zM256 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z' />
                    <path d='M378.305 173.859c-5.857-5.856-15.355-5.856-21.212.001L224.634 306.319l-69.727-69.727c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.857-5.858 15.355 0 21.213l80.333 80.333a14.953 14.953 0 0010.606 4.393c3.838 0 7.678-1.465 10.606-4.393l143.066-143.066c5.858-5.857 5.858-15.355 0-21.213z' />
                  </svg>
                  {data.button}
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
