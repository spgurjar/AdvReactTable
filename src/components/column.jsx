import React,{useState} from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat'; // for parsing custom date formats
dayjs.extend(customParseFormat);

export const Columns = [
    {
        id: 'id',
        header: "Id",
        accessorKey: "id"
    },
    {
        id: 'name',
        header: "Name",
        accessorKey: "name"
    },

    {
        id: 'category',
        header: "Category",
        accessorKey: "category",
        filterVariant: "multi-select",
    },
    {
        id: 'subcategory',
        header: "Subcategory",
        accessorKey: "subcategory",
        filterVariant: "multi-select",
    },
    {
        id: 'createdAt',
        header: "CreatedAt",
        accessorKey: "createdAt",
        Cell: ({ cell }) => {
          const formattedDate = dayjs(cell.getValue()).format('MM/DD/YYYY hh:mm A');
          return <div>{formattedDate}</div>;
        },
        filterVariant: "datetime-range",
        filterFn: (row, id, filterValue) => {
        
          const rowDate = dayjs(row.original.createdAt, 'YYYY-MM-DD T HH:MM:SS.SSS'); // parse the date from row data/
          const startDate = dayjs(filterValue[0], 'MM/DD/YYYY hh:mm A'); // parse the start date of the filter
          const endDate = dayjs(filterValue[1], 'MM/DD/YYYY hh:mm A'); // parse the end date of the filter

          // console.log("Row Date: ", rowDate.toString());
          // console.log("Start Date: ", startDate.toString());
          // console.log("End Date: ", endDate.toString());

          const isBetween = rowDate.isBetween(startDate, endDate, null, '[]');
          return isBetween;
        }   
    },
    {
        id: 'updatedAt',
        header: "UpdatedAt",
        accessorKey: "updatedAt",
        Cell: ({ cell }) => {
          const formattedDate = dayjs(cell.getValue()).format('MM/DD/YYYY hh:mm A');
          return <div>{formattedDate}</div>;
        },
        filterVariant: "datetime-range", 
        filterFn: (row, id, filterValue) => {
        
          const rowDate = dayjs(row.original.createdAt, 'YYYY-MM-DD T HH:MM:SS.SSS'); 
          const startDate = dayjs(filterValue[0], 'MM/DD/YYYY hh:mm A'); 
          const endDate = dayjs(filterValue[1], 'MM/DD/YYYY hh:mm A'); 
          const isBetween = rowDate.isBetween(startDate, endDate, null, '[]');
          return isBetween;
        }   
    },
    {
        id: 'price',
        header: "Price",
        accessorKey: "price",
        filterVariant: 'range-slider',
        filterFn: 'betweenInclusive', 
        muiFilterSliderProps: {
          marks: true,
          max: 200, 
          min: 0, 
          step: 10,
          valueLabelFormat: (value) =>
            value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }),
        },
    },
    {
        id: 'sale_price',
        header: "Sale Price",
        accessorKey: "sale_price",
        filterVariant: 'range-slider',
        filterFn: 'betweenInclusive', 
        muiFilterSliderProps: {
          marks: true,
          max: 200, 
          min: 0,
          step: 10,
          valueLabelFormat: (value) =>
            value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            }),
        },
    },
]