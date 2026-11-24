export default function Promotions() {
    const promotions = [
        { name: "Promocja 1", start: "2024.01.01", end: "2024.01.31" },
        { name: "Promocja 2", start: "2024.02.01", end: "2024.02.28" },
        { name: "Promocja 3", start: "2024.03.01", end: "2024.03.31" },
        { name: "Promocja 2", start: "2024.02.01", end: "2024.02.28" },
        { name: "Promocja 3", start: "2024.03.01", end: "2024.03.31" },
        { name: "Promocja 2", start: "2024.02.01", end: "2024.02.28" },
    ];

    return (
        <>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-start items-center">
                    <div className="w-40 justify-start text-OnCardWhite text-2xl font-normal font-['Inter']">Status:</div>
                    <div className="size- px-4 py-1 rounded-lg outline outline-2 outline-offset-[-2px] outline-OnCardWhite flex justify-center items-center gap-2.5">
                        <div className="justify-start text-OnCardWhite text-base font-normal font-['Inter']">Wszystko</div>
                    </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-center">
                    <div className="w-40 justify-start text-OnCardWhite text-2xl font-normal font-['Inter']">Wyszukaj:</div>
                    <div className="w-72 px-4 py-1 rounded-lg outline outline-2 outline-offset-[-2px] outline-OnCardWhite flex justify-start items-center gap-2.5">
                        <div className="justify-start text-OnCardWhite text-base font-normal font-['Inter']">Szukaj...</div>
                    </div>
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
                <div className="self-stretch inline-flex justify-start items-start gap-8">
                    <div className="w-[512px] justify-start text-OnCardWhite text-2xl font-bold font-['Inter']">Nazwa</div>
                    <div className="w-32 justify-start text-OnCardWhite text-2xl font-bold font-['Inter']">Początek</div>
                    <div className="w-32 justify-start text-OnCardWhite text-2xl font-bold font-['Inter']">Koniec</div>
                </div>
                {promotions.map((promotion, index) => (
                    <TableRow key={index} name={promotion.name} start={promotion.start} end={promotion.end} even={index % 2 === 0} />
                ))}
            </div>
        </>
    );
}

function TableRow({ name, start, end, even, onClick }: { name: string; start: string; end: string; even: boolean; onClick?: () => void }) {
    return (
        <div
            onClick={onClick}
            className={`self-stretch inline-flex justify-start items-start gap-8 hover:bg-CardHeader cursor-pointer transition-colors ${even || 'bg-white/2'}`}
        >
            <div className="w-[512px] justify-start text-OnCardWhite text-2xl font-normal font-['Inter']">{name}</div>
            <div className="w-32 justify-start text-OnCardWhite text-2xl font-normal font-['Inter']">{start}</div>
            <div className="w-32 justify-start text-OnCardWhite text-2xl font-normal font-['Inter']">{end}</div>
        </div>
    );
}