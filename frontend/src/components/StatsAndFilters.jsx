import { FilterType } from "@/lib/data";
import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const StatsAndFilters = ({
  completedTaskCount = 0,
  activeTaskCount = 0,
  filter = "all",
  setFilter,
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="text-accent-foreground border-info/20"
        >
          {activeTaskCount} {FilterType.active}
        </Badge>

        <Badge variant="secondary" className="text-success border-success/20">
          {completedTaskCount} {FilterType.completed}
        </Badge>
      </div>

      <div className="flex flex-row w-full gap-2 sm:w-auto">
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "default" : "ghost"}
            size="lg"
            className="capitalize cursor-pointer flex-1 justify-center sm:flex-initial"
            onClick={() => setFilter(type)}
          >
            <Filter className="size-4 hidden sm:block" />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFilters;
