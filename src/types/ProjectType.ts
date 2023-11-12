import { Skill } from "./Skill";

export interface ProjectType {
  name: string;
  logo: string;
  url: string;
  description: string;
  skills: Skill[];
}
