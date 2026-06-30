import { Card } from "./ui/card";
import { Info } from "lucide-react";

const TaskEmtyState = ({ filter }) => {
  return (
    <Card className="p-8 text-center border-0">
      <div className="space-y-3">
        <Info className="size-12 mx-auto text-muted-foreground" />
        <div>
          <h3 className="font-medium text-foreground">
            {filter === "active"
              ? "No active tasks."
              : filter === "completed"
                ? "No completed tasks."
                : "No tasks yet."}
          </h3>

          <p className="text-sm text-muted-foreground">
            {filter === "all"
              ? "Add your first task to get started!"
              : 'Switch to "All" to view all tasks.'}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TaskEmtyState;
