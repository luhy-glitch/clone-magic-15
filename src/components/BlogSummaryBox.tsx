import { ListChecks } from "lucide-react";

interface BlogSummaryBoxProps {
  points: string[];
}

const BlogSummaryBox = ({ points }: BlogSummaryBoxProps) => {
  if (!points.length) return null;

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 sm:p-8 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <ListChecks size={18} className="text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Sammanfattning</h2>
      </div>
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogSummaryBox;
