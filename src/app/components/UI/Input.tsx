import React from "react";

interface InputProps {
    label: string;
    type?: string;
    name: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    textarea?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type = "text", name, placeholder, value, onChange, textarea }) => {
    return (
        <div className="w-full">
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
