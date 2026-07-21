import Card from "../Common/Card";
import ProgressBar from "../Common/ProgressBar";
import SectionTitle from "../Common/SectionTitle";
interface SectionScoresProps {
  scores: Record<string, number>;
}

function SectionScores({ scores }: SectionScoresProps) {
  return (
    <Card>
      <SectionTitle title="Section Scores" />

      <div className="space-y-5">
        {Object.entries(scores).map(([section, score]) => (
          <ProgressBar
            key={section}
            label={section.replace(/_/g, " ")}
            value={score}
          />
        ))}
      </div>
    </Card>
  );
}

export default SectionScores;