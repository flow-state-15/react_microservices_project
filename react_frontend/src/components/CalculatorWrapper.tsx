import { Box, Grid, Button } from '@mui/material'

export default function CalculatorWrapper() {
  const calcHistory = {
    addHistory: () => {},
    clearHistory: () => {}
  }
  return (
    <Box>
      <Calculator history={calcHistory} />
    </Box>
  )
}