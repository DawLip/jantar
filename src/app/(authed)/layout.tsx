import Aside from "@/components/structure/Aside";
import Header from "@/components/structure/Header";

export default function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full h-full bg-BgcBlack inline-flex flex-col justify-center items-center overflow-hidden">
            <Header />
            <div className="self-stretch flex-1 p-4 gap-4 inline-flex justify-center items-center overflow-hidden">
                <Aside />
                {children}
            </div>
        </div>
    );
}