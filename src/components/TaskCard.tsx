import React, { MouseEventHandler, ReactNode } from "react";
import { Button } from "./ui/button";

interface TaskProps {
  task?: string;
  emoji?: string;
  isCompleted?: boolean;
}

const TaskCard = ({ task, emoji, isCompleted }: TaskProps) => {
  return (
    <div className="w-full px-4 py-4 rounded-md text-white bg-orange-500">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-xl">
          {task} <span>{emoji}</span>
        </h1>

        <Button variant={"secondary"} className="text-black">
          {isCompleted ? "Completed" : "Complete"}
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
