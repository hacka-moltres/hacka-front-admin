import React, { memo, useMemo } from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import { IInsights } from 'interfaces/IInsights';
import { makeStyles } from '@material-ui/styles';

interface IProps {
  data: IInsights;
  position: number;
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  position: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#588aed',
    borderRadius: '50%',
    height: 100,
    width: 100,
    textAlign: 'center',
    margin: '0 30px',
    boxShadow: '0px 6px 6px -3px rgba(0,0,0,0.2), 0px 10px 14px 1px rgba(0,0,0,0.14), 0px 4px 18px 3px rgba(0,0,0,0.12)'
  },
  text: {
    fontSize: 21,
    color: '#fff'
  },
  card: {
    width: 400
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: 12
  },
  button: {
    margin: '0 4px'
  }
}));

const Timeline = memo(({ data, position }: IProps) => {
  const classes = useStyles({});
  const isOdd = !!(position % 2);

  const renderButtons = useMemo(() => {
    if (data.action && data.action.length) {
      return (
        <div className={classes.buttons}>
          {data.action.map((item, index) => (
            <div key={index}>
              <Button variant='contained' color={item === 'do-it' ? 'primary' : 'default'} className={classes.button}>
                {item === 'do-it' ? 'Vamos lá' : 'Saiba mais'}
              </Button>
            </div>
          ))}
        </div>
      );
    }

    return null;
  }, [data.action, classes.buttons, classes.button]);

  return (
    <div className={classes.root}>
      {isOdd && (
        <div className={classes.position}>
          <span className={classes.text}>{position}</span>
        </div>
      )}

      <Card className={classes.card} elevation={10}>
        <CardContent>{data.description}</CardContent>

        {renderButtons}
      </Card>

      {!isOdd && (
        <div className={classes.position}>
          <span className={classes.text}>{position}</span>
        </div>
      )}
    </div>
  );
});

export default Timeline;
