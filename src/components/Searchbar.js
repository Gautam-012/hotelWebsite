import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={topHotels}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Hotels" 
      
      />}
    />
  );
}

const topHotels = [
  { label: 'The Luxury Collection Hotels & Resorts'},
  { label: 'Hotel Kuntzr'},
  { label: 'Grand Gross Hotel'},
  { label: 'Sweet Hotel' },
  { label: 'Chip Inn' },
  { label: "La Sky Boutique Hotel"},
  { label: 'Pulp Fiction'},
  
];