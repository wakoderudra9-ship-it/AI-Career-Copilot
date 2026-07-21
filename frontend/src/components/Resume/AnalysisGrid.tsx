import type { ReactNode } from "react";

interface AnalysisGridProps {
  children: ReactNode;
}

function AnalysisGrid({ children }: AnalysisGridProps) {
  return (
    <div className="mt-8 space-y-8">
      {children}
    </div>
  );
}

export default AnalysisGrid;