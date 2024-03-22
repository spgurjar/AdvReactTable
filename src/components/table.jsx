import React, {useMemo} from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import sampledata from "./sample_data.json"
import { Columns } from "./column";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

export const Table = () => {
    const columns = useMemo(() => Columns,[]);
    const data = useMemo(() => sampledata, []);
    const table = useMaterialReactTable({
        columns,
        data,
       
        enableGrouping: true,
        enableFacetedValues: true,
        initialState: { showColumnFilters: false },
        isMultiSortEvent: () => true,
    });

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
         <MaterialReactTable table={table} />
      </LocalizationProvider>     
      );
}