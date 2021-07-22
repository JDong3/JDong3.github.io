import {
    makeStyles,
} from '@material-ui/core'
import {Link} from 'react-router-dom'
import ss from './assets/ss.png'
import js from './assets/js.png'
import react from './assets/react.png'
import github from './assets/github.png'
import sql from './assets/sql.png'
import {
    Portal,
    Idea,
    Text,
    Hr,
    Img,
    To,
    TechCard
} from '../../colorful-text'
import Bass from '../Bass.js'


const useStyles = makeStyles(theme => (
    {
        spacingFromTop: {
            marginTop: '80px',
            marginBottom: '80px'
        },
    }
))

let Introductions = (props) => {
    let classes = useStyles()
    return (
        <Bass>
            <Text variant="h1" id="intro" serif>Introductions</Text>
            <Hr type={1}/>
            <Text>
                <Img type="right" src={ss} width={'30%'} rounded/>
                Hi, I'm Joseph, I'm a programmer that specializes in front-end web development, design, and quality control (user experience, automation testing, et cetera). On this website, you'll find a selection of articles that explain the way in which I approach life, design, and programming. You will also find some descriptions of my past work experience, and the technologies that I'm most familiar with. And just so you know, if you plan on reading the articles, they can get a bit esoteric at times, (which is expected when discussing philosophy). But anyways, whatever you're looking for on this website, I hope you find it, and enjoy the reading.
            </Text>
            <Text variant="h2" serif>Contents</Text>
            <Hr type={2}/>
            <Text>
                <ul>
                    <li><To href="#industry-experience"><b>Industry Experience</b></To></li>
                    <li><To href="#tech-stuff-i-work-with"><b>Tech Stuff I Work With</b></To></li>
                    <li><To href="#index-of-articles"><b>Index of Articles</b></To></li>
                </ul>
            </Text>

            <Text variant="h2" id="industry-experience" serif>Industry Experience</Text>
            <Hr type={2}/>
            <Text variant="h4"><b>Customer Experience Analysis (Internship) at IBM</b></Text>
            <Text>
                <b>May 2019 - August 2020</b>

                <br/>
                <br/>

                During my time at IBM, I was part of the Customer Experience Analysis (CEA) team, which was one of the teams that worked on IBM's hybrid-cloud machine learning platform (CPD). The purpose of the CEA team was actually not very clear me for a long time, as I've never heard of such a team before I joined one. But eventually I figured out that the purpose of our team was to use our influence to try and get the other teams to co-operate on isses that affected the quality of the platform overall, that none of them wanted to address individually. I basically just worked on software that generated reports that the management on our team used to make their cases.
            </Text>

            <br/>
            <br/>

            <Text variant="h4"><b>Automation Testing (Internship) at Caseware Intl.</b></Text>
            <Text>
                <b>January 2018 - August 2018</b>

                <br/>
                <br/>

                When I was Caseware, I was on the QA team for their cloud-based auditing platform (Smart Engagement), and as you may imagine, the purpose of this team was a lot more clear than that of the CEA team. And being a smaller project in scope as well, it seemed that we could elicit inter-team co-operation by simply shoving all 20 or so people involved on the project into a single room, and just talking it out. Being the QA team, we were responsible for ensuring the quality of the platform, which in our case, meant that we had to ensure that the functions of the platform worked as intended, and we did this with a combination of manual and automated tests, which I worked on both.
            </Text>

            <Text variant="h2" id="tech-stuff-i-work-with" serif>Tech Stuff I Work With</Text>
            <Hr type={2}/>
            <TechCard title="Software Collaboration Tools (Git, Github, Bitbucket)" style={{borderRadius: '15px'}} src={github}>

                Version Control Software or VCS is the base tool that allows programmers to effectively collaborate on code, examples of this would be Git, or SVN. Services like Github, or BitBucket are platorms that host VCS servers, and integrate many of the VCS features into a GUI that allows idiots like myself to use them more effectively. In my time, since I've often had to collaborate on code with others, I've become quite familiar with the standard VCS usage, (code reviews, pull requests, branching, merging, et cetera).

            </TechCard>

            <TechCard title="The Web Stack (HTML, CSS, Javascript)" src={js}>

                In our modern times, the web platform consists of HTML, CSS, and JavaScript. The HTML is the core, and the primary information carrying component of the bunch, CSS, which in my opinion is not really necessary, styles the web, and makes branding over the internet possible, JavaScript, which I believe is the real travestry essentially turns the web into a platform emulator, which would have been completely unnecessary if the OS producers could have just agreed on a common application API.

            </TechCard>

            <TechCard title="Various Web Frameworks (React, Flask, Material UI)" src={react}>

                But since the web is already a platform emulator, and there really seems to be no going back, (which by the way to make my point more clear, look at ChromeOS and tell me that Google doesn't already think that the web should be used as the base platform of personal computing,) web frameworks are what makes the prospect of developing on the platform tolerable, as base JavaScript was not intended to be used to make these complicated web applications.

            </TechCard>

            <TechCard title="Database Technologies (SQL, Relational Databases)" src={sql}>

                The entire space of databases is essentially concerned with the issue of reading and writing permanant records efficiently. Now the technical details of these systems have more or less been worked out long before my time, so it seems that our generation of programmers only need to be concerned with learning to program with the APIs of these systems. Which in the context of the basic applications that we develop nowadays, that means implementing systems of user information storage, inventory management, and the like.


            </TechCard>

            <Text variant="h2" id="index-of-articles" serif>Index of Articles</Text>
            <Hr type={2}/>
            <Text>
                <ul>
                    <li><To href="/the-evolutionary-origins-of-truth" link scroll><b>The Evolutionary Origins of Truth</b></To></li>
                    <li><To href="/the-virus-of-progress" link scroll><b>The Virus of Progress</b></To></li>
                    <li><To href="/speculation-on-paul-vanderklays-god-number-2" link scroll><b>Speculation On Paul Vanderklay's God Number 2</b></To></li>
                    <li><To href="/the-true-motivation-of-business" link scroll><b>The True Motivation of Business</b></To></li>
                    <li><To href="/scientific-theories-as-truth" link scroll><b>Scientific Theories as Truth</b></To></li>
                </ul>
            </Text>

        </Bass>
    )
}

export default Introductions
