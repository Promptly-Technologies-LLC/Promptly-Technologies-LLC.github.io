import SocialProfiles from "./socialprofiles";
  
type TeamMember = {
    name: string;
    role: string;
    portrait: string;
    socialProfiles: SocialProfiles;
};

type Team = {
    header: string;
    subheader: string;
    teamMembers: TeamMember[];
};

export default Team;