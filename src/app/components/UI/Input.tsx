import React from "react";

interface InputProps {
    label: string;
    type?: string;
    name: string;
    placeholder?: string;
    value?: string; // Now optional
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textarea?: boolean;
    className?: string; // Allow custom class names
}

const Input: React.FC<InputProps> = ({
    label,
    type = "text",
    name,
    placeholder = "",
    value,
    onChange,
    textarea = false,
    className = "",
}) => {
    return (
        <div className={`w-full ${className}`}>
            <label htmlFor={name} className="block text-black mb-1">
                {label}
            </label>
            {textarea ? (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full border border-gray-600 bg-transparent p-3 text-black rounded-sm focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none h-32 resize-none"
                />
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full border border-gray-600 bg-transparent p-3 rounded-sm text-black focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 outline-none"
                />
            )}
        </div>
    );
};

export default Input;
