"use client";
import Select from 'react-select'

export interface OptionsProp {
  label: string;
  value: string;
}

interface Props {
    options: OptionsProp[];
    onChange: (item:OptionsProp) => void;
    instanceId: string;
}

export default function Dropdown({options, onChange,instanceId }:Props) {
  return (
    <Select instanceId={instanceId} options={options} onChange={onChange} className='text-dark' />
  );
}