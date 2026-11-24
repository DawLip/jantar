export default function TextInput({
    label,
    placeholder,
    value,
    onChange,
}: {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="self-stretch inline-flex flex-col justify-center items-start gap-2">
            <div className="size- inline-flex justify-center items-center gap-2.5">
                <div className="justify-start text-OnCardWhite text-2xl font-normal font-['Inter']">{label}</div>
            </div>
            <input 
                className="self-stretch px-4 py-2 rounded-2xl outline outline-2 outline-offset-[-2px] outline-OnCardWhite inline-flex justify-start items-center gap-2.5 justify-start text-OnCardWhite text-2xl font-normal font-['Inter']"
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    );
}