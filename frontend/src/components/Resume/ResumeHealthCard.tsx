import Card from "../Common/Card";
import SectionTitle from "../Common/SectionTitle";
import ProgressBar from "../Common/ProgressBar";

interface ResumeHealthCardProps {
  resumeScore: number;
  atsScore: number;
  sectionScores: Record<string, number>;
}

function ResumeHealthCard({
  resumeScore,
  atsScore,
  sectionScores,
}: ResumeHealthCardProps) {
  return (
    <Card>
      <SectionTitle title="📊 Resume Health" />

      <div className="space-y-6">
        <ProgressBar
          label="Overall Resume Score"
          value={resumeScore / 10}
        />

        <ProgressBar
          label="ATS Compatibility"
          value={atsScore / 10}
        />

        <div className="border-t border-slate-700 pt-6">
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">
            Section Performance
          </h3>

          <div className="space-y-4">
            {Object.entries(sectionScores).map(([section, score]) => (
              <ProgressBar
                key={section}
                label={section}
                value={score}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ResumeHealthCard;