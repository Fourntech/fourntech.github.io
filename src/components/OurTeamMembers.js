import React from "react";
import {Card, Container, CardGroup} from "react-bootstrap";
// Social Media Icon
import { BsTwitterX, BsGithub, BsLinkedin, BsLaptop } from "react-icons/bs";
// Team Icons
import arunImg from '../assets/About/Arun.jpeg'
import praveenImg from '../assets/About/Praveen.jpg'
import ponneesImg from '../assets/About/Ponneeswaran.jpg'
import manjunathImg from '../assets/About/Manjunath.jpg'

class OurTeamMembers extends React.Component {
    render() {
        function MemberCard(props) {
            const member = props.member
            return (
                <Card className="col-md-3 text-center" border="light">
                    <Card.Img className="polaroid center-block" variant="top" src={member.img} />
                    <Card.Body>
                        <Card.Subtitle>{member.name}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        { member.webpage ? <Card.Link href={member.webpage}><BsLaptop/></Card.Link> : '' }
                        { member.twitter ? <Card.Link href={member.twitter}><BsTwitterX/></Card.Link> : '' }
                        { member.github ? <Card.Link href={member.github}><BsGithub/></Card.Link> : '' }
                        { member.linkedin ? <Card.Link href={member.linkedin}><BsLinkedin/></Card.Link> : '' }
                    </Card.Footer>
                </Card>
            );
        }

        const cards = TeamMembersData.flatMap((member, index)=> {
            return <MemberCard member={member} key={member.name}/>
        });

        return (
            <Container className="card-padding">
                <h3 className="text-center">Our Team</h3>
                <CardGroup className="card-padding gap-4">
                    {cards}
                </CardGroup>
            </Container>
        );
    }
}

// Const
const TeamMembersData = [
    {category: 'Admin', name: 'Arun Prasad Raghavendran',
        img: arunImg,
        webpage: "https://www.rarunprasad.com",
        linkedin: "https://www.linkedin.com/in/arunprasadraghavendran",
        github: 'https://github.com/rarunprasad-github'},
    {category: 'Admin', name: 'Manjunath Mohan',
        img: manjunathImg,
        linkedin: "https://in.linkedin.com/in/manjunath-n-m-56860544",
        github: 'https://github.com/nmmanjunath90'},
    {category: 'Admin', name: 'Ponneeswaran Natarajan',
        img: ponneesImg,
        twitter: "https://twitter.com/Ponneeswaran",
        linkedin: "https://www.linkedin.com/in/ponneeswaran-natarajan-253920105",
        github: 'https://github.com/ponneeswaran'},
    {category: 'Admin', name: 'Praveen Prabhakar',
        img: praveenImg,
        linkedin: "https://www.linkedin.com/in/ppraveentr",
        github: 'https://github.com/ppraveentr'},
];

export default OurTeamMembers;