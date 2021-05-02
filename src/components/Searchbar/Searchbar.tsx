import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  onInputChange(value: string): void;
}

export const Searchbar = ({ name, label, onInputChange, ...props }: Props) => {
  function handleChange(evt: React.ChangeEvent<HTMLInputElement> | undefined) {
    if (!evt) {
      return;
    }

    const val = evt.target.value;

    onInputChange(val);
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...props} onChange={(evt) => handleChange(evt)} />
    </>
  );
};
