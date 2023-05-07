import React from 'react';
import { Select } from 'antd';

const options = [
   {
      value: 'Cryptocurrency',
      label: 'Cryptocurrency',
   },
   {
      value: 'Bitcoin',
      label: 'Bitcoin',
   },
   {
      value: 'Ethereum',
      label: 'Ethereum',
   },
   {
      value: 'Tether USD',
      label: 'Tether USD',
   },
   {
      value: 'BNB',
      label: 'BNB',
   },
   {
      value: 'USDC',
      label: 'USDC',
   },
   {
      value: 'Cardano',
      label: 'Cardano',
   },
];

function SearchComponent({ event }) {
   const onChange = (value) => {
      event(value);
   };
   const onSearch = (value) => {
      console.log('search:', value);
   };

   return (
      <div>
         <Select
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
               (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={options}
         />
      </div>
   );
}

export default SearchComponent;
