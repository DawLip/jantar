import CardHeaderTab from "./CardHeaderTab";

export default function Card({
    title,
    className,
    tabs,
    onTabClick,
    children,
}: {
    title?: string;
    className?: string;
    tabs?: { label: string; isActive: boolean }[];
    onTabClick?: (index: number) => void;
    children: React.ReactNode;
}) {
    return (
        <div className={`${className || ''} bg-CardBgc rounded-2xl inline-flex flex-col justify-start items-start overflow-hidden`}>
            <div className="self-stretch bg-CardHeader inline-flex justify-start items-center">
                {title && <div className="justify-start text-OnCardWhite text-2xl font-bold font-['Inter']">{title}</div>}
                {tabs && (
                    <div className="self-stretch flex-1 flex flex-row justify-start items-center">
                        {tabs.map((tab, index) => (
                            <CardHeaderTab key={index} label={tab.label} isActive={tab.isActive} onClick={() => onTabClick?.(index)} />
                        ))}
                    </div>
                )}
            </div>
            <div className="self-stretch p-8 flex flex-col justify-start items-start gap-8">
                {children}
            </div>
        </div>
    );
}
