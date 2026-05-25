import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";

export function ContentPage({
  crumbs,
  title,
  description,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 lg:py-16">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
      {description && (
        <p className="mt-3 text-muted-foreground text-lg">{description}</p>
      )}
      <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
        {children ?? (
          <div className="rounded-2xl border border-dashed border-border bg-surface/30 p-8 text-center">
            <p className="text-sm">This page is coming soon. Check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}
