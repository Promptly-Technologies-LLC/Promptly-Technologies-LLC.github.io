import React from 'react';
import './Team.css';
import Team from '../../types/team';
import teamJSON from '../../customizations/team.json';
import SocialIcon from '../../components/logos/SocialIcon';

const ourTeam: React.FC = () => {
    const team: Team = teamJSON

    return(
        <section id="team">
            <div className="sectioncontainer">
                <div className="headercontainer">
                    <h1>{team.header}</h1>
                    <h2>{team.subheader}</h2>
                </div> 
                <div className="teamcontainer">
                    {team.teamMembers.map((member, index) => {
                        let rotationDegree = index * 90;
                        
                        return(
                        <div className="text-center" key={index}>
                            <div className="teammatecontainer">
                                <svg className="z-0" style={{ transform: `rotate(${rotationDegree}deg)` }} fill="currentColor" stroke="currentColor" aria-hidden="true" viewBox="5 0 135 130">
                                    <path d="m 108.23507,66.307831 c -1.10821,9.062567 23.60263,3.816215 18.20309,21.717231 -5.39953,17.901018 -18.37583,-4.587914 -30.212804,7.668599 -11.836974,12.256509 5.170614,11.605489 -7.123066,22.204699 -12.293678,10.59921 -16.209517,-10.03269 -21.870951,-10.03269 -11.322868,0 -31.909117,7.17051 -41.184315,-4.04514 -4.6376,-5.607829 12.954188,-19.782145 9.956775,-31.772571 C 33.006386,60.057532 9.4197722,50.250995 16.992533,43.035443 32.138056,28.60434 45.407495,48.598277 53.150424,38.722844 60.893352,28.847411 57.199323,15.33022 64.645518,14.406712 79.537909,12.559697 79.147974,28.279045 93.904529,25.799399 108.66108,23.319753 103.98473,4.1355722 116.70297,16.999118 c 12.71824,12.863546 -7.61975,4.082936 -8.36555,21.311632 -0.3729,8.614348 9.85244,4.482305 10.05858,14.105615 0.20615,9.62331 -9.60686,9.360183 -10.16096,13.891466 z"
                                        fillRule="evenodd"
                                        clipRule="evenodd" />
                                </svg>
                                <img className="teammateimage" src={member.portrait} alt={member.name} />
                            </div>
                            <h3>
                                {member.name}
                            </h3>
                            <p className="text-light-nav-hover dark:text-dark-nav-hover">{member.role}</p>
                            <div className="flex justify-center mt-4 space-x-4">
                                {Object.entries(member.socialProfiles).map(([key, value]) => {
                                    return (
                                        <SocialIcon iconName={key} url={value} className="svgicons" key={key}/>
                                    );
                                })}
                            </div>
                        </div>
                        )
                    })}
                </div>  
            </div>
        </section>
    )
}

export default ourTeam;