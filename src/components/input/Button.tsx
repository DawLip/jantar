export default function Button({ label, onClick }: { label: string; onClick: () => void }) {
    return (
        <button onClick={onClick} className="self-stretch p-4 bg-OnCardWhite rounded-2xl outline outline-2 outline-offset-[-2px] outline-OnCardWhite inline-flex justify-center items-center gap-2.5 cursor-pointer">
            <div className="justify-start text-CardBgc text-2xl font-bold font-['Inter']">{label}</div>
        </button>
    );
}