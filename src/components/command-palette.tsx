import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { categories, allTools } from "@/data/tools";
import { Star, Clock } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { useRecentTools } from "@/hooks/use-recent-tools";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { favorites } = useFavorites();
  const { recent } = useRecentTools();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  const favItems = useMemo(
    () =>
      favorites
        .map((id) => {
          const [c, t] = id.split("/");
          return allTools.find((tool) => tool.category === c && tool.slug === t);
        })
        .filter(Boolean) as typeof allTools,
    [favorites]
  );

  const recentItems = useMemo(
    () =>
      recent
        .map((id) => {
          const [c, t] = id.split("/");
          return allTools.find((tool) => tool.category === c && tool.slug === t);
        })
        .filter(Boolean) as typeof allTools,
    [recent]
  );

  const go = (path: string) => {
    onOpenChange(false);
    navigate({ to: path });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search tools, categories, docs…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList className="max-h-[420px]">
        <CommandEmpty>No results found.</CommandEmpty>

        {favItems.length > 0 && (
          <>
            <CommandGroup heading="Favorites">
              {favItems.slice(0, 5).map((t) => (
                <CommandItem
                  key={`fav-${t.category}-${t.slug}`}
                  value={`fav ${t.name} ${t.categoryName}`}
                  onSelect={() => go(`/tools/${t.category}/${t.slug}`)}
                >
                  <Star className="h-4 w-4 text-primary" />
                  <span>{t.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{t.categoryName}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        {recentItems.length > 0 && (
          <>
            <CommandGroup heading="Recent">
              {recentItems.slice(0, 5).map((t) => (
                <CommandItem
                  key={`rec-${t.category}-${t.slug}`}
                  value={`recent ${t.name} ${t.categoryName}`}
                  onSelect={() => go(`/tools/${t.category}/${t.slug}`)}
                >
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{t.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{t.categoryName}</span>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        )}

        <CommandGroup heading="Tools">
          {allTools.slice(0, 40).map((t) => (
            <CommandItem
              key={`tool-${t.category}-${t.slug}`}
              value={`${t.name} ${t.categoryName} ${t.description}`}
              onSelect={() => go(`/tools/${t.category}/${t.slug}`)}
            >
              <span>{t.name}</span>
              <span className="ml-auto text-xs text-muted-foreground">{t.categoryName}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Categories">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <CommandItem
                key={`cat-${c.slug}`}
                value={`category ${c.name}`}
                onSelect={() => go(`/tools/${c.slug}`)}
              >
                <Icon className={`h-4 w-4 ${c.accent}`} />
                <span>{c.name}</span>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
