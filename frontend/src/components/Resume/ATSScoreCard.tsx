import CircularScoreCard from "../Common/CircularScoreCard";

interface ATSScoreCardProps {
  score: number;
}

function ATSScoreCard({ score }: ATSScoreCardProps) {
  return (
    <CircularScoreCard
      title="ATS Score"
      score={score}
      description="Compatibility with Applicant Tracking Systems."
    />
  );
}

export default ATSScoreCard;