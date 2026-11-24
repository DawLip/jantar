interface CardHeaderTabProps {
  label: string;
  isActive: boolean;
  onClick?: () => void;
  showSeparator?: boolean;
}

export default function CardHeaderTab({
  label,
  isActive,
  onClick,
  showSeparator = true,
}: CardHeaderTabProps) {
  return (
    <div className="relative flex items-center self-stretch">
      <button
        type="button"
        onClick={onClick}
        className={`
          px-8 py-4 text-2xl font-bold
          cursor-pointer transition-colors
          ${isActive
            ? "text-OnCardWhite"
            : "text-OnCardGray hover:text-OnCardWhite"
          }
        `}
      >
        {label}
      </button>

      {showSeparator && (
        <div className="absolute right-0 h-8 w-px bg-white/20" />
      )}
    </div>
  );
}