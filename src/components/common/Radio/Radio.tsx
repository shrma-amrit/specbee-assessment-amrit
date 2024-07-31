import React from "react";
import "./Radio.scss";

interface RadioProps {
  name: string;
  labels: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({
  name,
  labels,
  selectedValue,
  setSelectedValue,
}) => {
  return (
    <div className="radio-group">
      {labels.map((label) => (
        <div className="radio" key={label}>
          <input
            type="radio"
            id={label}
            name={name}
            value={label}
            checked={selectedValue === label}
            onChange={() => setSelectedValue(label)}
          />
          <label htmlFor={label}>{label}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
