import { useState } from "react";

const Input = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="mb-1 font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? "" : placeholder}
          className="border rounded p-2"
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? "" : placeholder}
          className="border rounded p-2"
        />
      )}
    </div>
  );
};

export default Input;
