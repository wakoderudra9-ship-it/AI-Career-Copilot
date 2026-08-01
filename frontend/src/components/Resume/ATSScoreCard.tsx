import CircularScoreCard from "../Common/CircularScoreCard";

interface ATSScoreCardProps {
  score: number;
}

function ATSScoreCard({
  score,
}: ATSScoreCardProps) {
  return (
    <CircularScoreCard
      title="ATS Compatibility"
      score={score}
      description="Measures how well your resume can be parsed by Applicant Tracking Systems used by recruiters."
    />
  );
}

export default ATSScoreCard;