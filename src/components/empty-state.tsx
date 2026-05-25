import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta?: { label: string; to: string };
}) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface/30 px-6 py-16 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">{description}</p>
      {cta && (
        <Button asChild className="mt-6">
          <Link to={cta.to as any}>
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
