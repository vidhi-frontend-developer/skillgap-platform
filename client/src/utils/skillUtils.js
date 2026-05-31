import { JOB_SKILLS_DB } from "./mockData";

export const normalize = (s) =>
  s.toLowerCase().trim();

export const parseSkills = (input) =>
  [...new Set(
    input
      .split(",")
      .map(normalize)
      .filter(Boolean)
  )];

export const analyzeSkills = (
  userSkills,
  jobRole
) => {

  const jobKey = normalize(jobRole);

  const jobSkillsRaw =
    JOB_SKILLS_DB[jobKey] || null;

  if (!jobSkillsRaw) return null;

  const jobSkillsNorm =
    jobSkillsRaw.map(normalize);

  const matched = [];
  const missing = [];

  jobSkillsRaw.forEach((skill, i) => {

    if (
      userSkills.includes(jobSkillsNorm[i])
    ) {
      matched.push(skill);
    } else {
      missing.push(skill);
    }

  });

  const percentage = Math.round(
    (matched.length / jobSkillsRaw.length) * 100
  );

  return {
    matched,
    missing,
    total: jobSkillsRaw.length,
    percentage,
  };
};