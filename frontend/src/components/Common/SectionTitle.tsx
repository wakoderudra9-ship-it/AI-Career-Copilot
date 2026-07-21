interface SectionTitleProps {
  title: string;
}

function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-2xl font-bold text-cyan-400 mb-6">
      {title}
    </h2>
  );
}

export default SectionTitle;