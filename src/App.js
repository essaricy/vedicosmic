import './App.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import SearchAppBar from "./components/SearchAppBar";
import TimelineNavigator from './components/TimelineNavigator';


function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Box sx={{ width: '100%' }}>
        <Stack spacing={1}>
          <Grid style={{ marginTop: "10px" }}>
            <Typography variant="h6" component="h6">Timeline Navigator</Typography>
          </Grid>
          <Grid>
            <TimelineNavigator />
          </Grid>
        </Stack>
      </Box>
    </div>
  );
}

export default App;
