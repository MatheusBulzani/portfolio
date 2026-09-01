interface TechBadgeProps {
  label: string;
  size?: "sm" | "md";
}

export function TechBadge({ label, size = "sm" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border bg-card font-medium text-muted ${
        size === "md" ? "px-3.5 py-1.5 text-sm" : "px-2.5 py-1 text-xs"
      }`}
    >
      {label}
    </span>
  );
}
