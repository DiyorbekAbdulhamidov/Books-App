import React, { FunctionComponent, useEffect, useState } from 'react';
import PrimaherySearchAppBar from "./header";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import useAuthHeaders from '../../utils/sign';
import { alert } from '../../utils';
import { Grid, TextField } from '@mui/material';

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { authHeadersFirst } = useAuthHeaders();

  useEffect(() => {
    axios.get('https://0001.uz/books', {
      headers: authHeadersFirst
    })
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      })
      .catch((error: any) => {
        alert.error(error.response.data.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <PrimaherySearchAppBar />
      <Box padding='0 100px' mt='36px'>

        <Grid container spacing={2} justifyContent={'space-between'}>
          <Grid item xs={6}><Typography fontFamily='Mulish' fontWeight={700} fontSize='36px' color='white'>You`ve got <span style={{ color: '#6200EE' }}>8 book</span> </Typography></Grid>

          <Grid item alignItems='center' justifyContent='center'>
            <Box display='flex' gap={5}>
              <TextField variant="standard" placeholder='Enter book title ...' InputProps={{ disableUnderline: true }} style={{ background: 'white', width: '320px', height: '47px', padding: '10px 16px', border: '1px solid #EBEBEB', borderRadius: '6px', borderColor: 'none' }} />
              <Button sx={{ width: '240px', bgcolor: '#6200EE', fontSize: '16px', fontFamily: 'Mulish', color: '#FEFEFE', textTransform: 'none', "&:hover": { background: '#6200EE' } }}>+  Create a book</Button>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Typography fontFamily='Mulish' fontSize={'20px'} fontWeight={400} color={'#FEFEFE'}>Your task today</Typography>
          </Grid>
        </Grid>

        <Card sx={{ marginTop: '20px', width: '397px', height: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', borderRadius: '12px' }} variant="outlined">
            <Typography fontSize='16px' fontWeight={600} fontFamily={'Mulish'} color={'#151515'}>Raspberry Pi User Guide</Typography>
            <Typography fontFamily={'Mulish'} fontWeight={400} lineHeight='150%' fontSize='14px' color={'#333'} >Lorem ipsum dolor sit amet consectetur. Nulla adipiscing neque varius vestibulum magna in. Tortor quisque nisl congue ut tellus sem id.</Typography>
        </Card>
      </Box>
    </>
  );
}

export default Home;