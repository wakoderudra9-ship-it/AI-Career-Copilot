import CircularScoreCard from "../Common/CircularScoreCard";

interface ResumeScoreCardProps {
  score: number;
}

function ResumeScoreCard({ score }: ResumeScoreCardProps) {
  return (
    <CircularScoreCard
      title="Resume Score"
      score={score}
      description="Overall quality of your resume."
    />
  );
}

export default ResumeScoreCard;