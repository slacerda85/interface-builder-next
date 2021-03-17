// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementAsync,
} from '../../../store/reducers/counterSlice'

// Material-ui
import { Button, ButtonBase, CircularProgress, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.success.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}))

const Home: React.FC = () => {
  const classes = useStyles()

  const [incrementAmmount, setIncrementAmmount] = useState('2')
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()
  const count = useSelector(selectCount)

  const handleClick = () => {
    setLoading(true)
    dispatch(incrementAsync(Number(incrementAmmount) || 0))
    setTimeout(() => {setLoading(false)}, 1000)
  }

  return (
    <Paper
      className={classes.root}
      style={{ paddingTop: 60, paddingLeft: 300 }}
    >
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(decrement())}
      >
        -
      </Button>
      <Typography component="span" color="primary">
        Valor atual é {count}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment())}
      >
        +
      </Button>
      <TextField
        id="qtd"
        variant="outlined"
        size="small"
        label="Qtd"
        value={incrementAmmount}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setIncrementAmmount(event.target.value)
        }
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          dispatch(incrementByAmount(Number(incrementAmmount) || 0))
        }
      >
        Adic. Qtd
      </Button>
      <ButtonBase className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={handleClick}
        >
          Adic. Async
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </ButtonBase>
    </Paper>
  )
}

export default Home
