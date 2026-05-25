export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between mb-8">
      <div className="max-w-2xl">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            {eyebrow}
          </div>
        )}
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}
