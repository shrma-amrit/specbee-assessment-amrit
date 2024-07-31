import React from "react";
import "./CheckBox.scss";

interface CheckBoxProps {
  labels: string[];
  selectedValues: string[];
  onSelectedValuesChange: (values: string[]) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  labels,
  selectedValues,
  onSelectedValuesChange,
}) => {
  const handleCheckboxChange = (label: string) => {
    const newSelectedValues = selectedValues.includes(label)
      ? selectedValues.filter((value) => value !== label)
      : [...selectedValues, label];

    onSelectedValuesChange(newSelectedValues);
  };

  return (
    <div className="checkbox-group">
      {labels.map((label) => (
        <div className="checkbox" key={label}>
          <input
            type="checkbox"
            id={label}
            checked={selectedValues.includes(label)}
            onChange={() => handleCheckboxChange(label)}
          />
          <label htmlFor={label}>{label}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
