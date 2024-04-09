interface CheckboxProps {
    id: string;
    required?: boolean;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, id, required, checked, label }) => {
    return (
        <div className="relative flex w-full items-center gap-2 justify-center">
            <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
                required={required}
                className="cursor-pointer bg-[#224957] appearance-none rounded-md w-[18px] h-[18px] checked:bg-[#224957] checked:border-transparent focus:outline-none"
            />
            {checked && (
                <svg style={{left: '74px', top: '0'}} className="cursor-pointer w-4 h-4 text-blue-500 m-auto absolute pointer-events-none">
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.25 12.5l3 3L18.75 6"
                    />
                </svg>
              )}
            <label className="cursor-pointer" htmlFor={id}>{label}</label>
        </div>
                    
    );
};
export default Checkbox;
