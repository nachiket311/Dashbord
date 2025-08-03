import * as React from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Box } from '@mui/material';
import dayjs from 'dayjs';

export default function StaticDatePickerBasic() {
  const [value, setValue] = React.useState(dayjs());

  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, boxShadow: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          openTo="year"
          views={['year', 'month', 'day']} // 👈 Enables year ➝ month ➝ day
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
}
