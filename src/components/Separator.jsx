export default function Separator({ orientation = "horizontal", className = "" }) {
  const base = "bg-white opacity-30";
  const vertical = "w-[1px] h-full py-2";
  const horizontal = "h-[1px] w-full my-2";

  return (
    <div
      role="none"
      data-orientation={orientation}
      className={`${base} ${orientation === "vertical" ? vertical : horizontal} ${className}`}
    />
  );
}