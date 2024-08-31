import React from "react";
import {Card, Container, CardGroup} from "react-bootstrap";
// Social Media Icon
import { BsTwitterX, BsGithub, BsLinkedin, BsLaptop } from "react-icons/bs";
// Team Data
import memberData from "./teamMemberData.json"

class OurTeamMembers extends React.Component {
    render() {
        function MemberCard(props: { member: any; }) {
            const member = props.member
            return (
                <Card className="col-md-3 text-center" border="light" style={{minWidth: 300, maxWidth: '30%'}}>
                    <Card.Img className="polaroid center-block" variant="top" src={member.imgName} />
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

        const cards = memberData.flatMap((member, index)=> {
            return <MemberCard member={member} key={member.name}/>
        });

        return (
            <Container fluid>
                <h3 className="text-center">Our Team</h3>
                <CardGroup className="gap-4 justify-content-center">
                    {cards}
                </CardGroup>
            </Container>
        );
    }
}

export default OurTeamMembers;