export interface Resume {
  id: number;
  filename: string;
  file_path: string;
  user_id: number;
}

export interface ResumeAnalysis {
  resume_score: number;
  ats_score: number;

  section_scores: Record<string, number>;
  section_feedback: Record<string, string>;
  ai_rewrite: Record<string, string>;

  skills: string[];
  education: string[];
  experience: string[];
  missing_skills: string[];

  email?: string;
  phone?: string;

  suggestions: string[];

  strengths: string[];
  weaknesses: string[];
  improvement_suggestions: string[];

  ai_feedback: string;
}

export interface ResumeAnalysisResponse {
  resume: Resume;
  extracted_text: string;
  analysis: ResumeAnalysis;
}