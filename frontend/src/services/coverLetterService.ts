import api from "../api/axios";

export interface CoverLetterResponse {
  cover_letter: string;
}

export const generateCoverLetter = async (
  jobDescription: string
): Promise<CoverLetterResponse> => {
  const token = localStorage.getItem("token");

  const response = await api.post<CoverLetterResponse>(
    "/cover-letter/",
    {
      job_description: jobDescription,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};