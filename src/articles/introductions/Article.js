// Import ss from './assets/ss.png';
import js from './assets/js.png';
import react from './assets/react.png';
import github from './assets/github.png';
import sql from './assets/sql.png';
import {
  Box,
  makeStyles,
} from '@material-ui/core';
import {
  Text,
  Hr,
  To,
  TechCard,
  ty,
} from '../../parts';
import Bass from '../Bass.js';

const useStyles = makeStyles(() => (
  {
    slightlySmaller: {
      width: '98%',
      marginLeft: '1%',
    }
  }
));

const Introductions = () => {

  const c = useStyles();

  return <Bass>
    <ty.Title smaller serif>Introductions</ty.Title>
    <ty.ArticleText gutter slightlySmaller>
      Hi, I&apos;m Joseph, I&apos;m a programmer that specializes in front-end web development, design, and QA (user experience, automation testing, et cetera). On this website, you&apos;ll find a selection of articles that explain the way in which I approach life, design, and programming. You will also find some descriptions of my past work experience, and the technologies that I&apos;m most familiar with. And just so you know, if you plan on reading the articles, they can get a bit esoteric at times, (which is expected when discussing philosophy). But anyways, whatever you&apos;re looking for on this website, I hope you find it, and enjoy the reading.

      <br/>
      <br/>

      Hi, I'm Joseph, I'm a computer programmer that specializes in front-end developement (React + Redux + Material-UI), and QA (automated testing, API testing). On this website
    </ty.ArticleText>

    <ty.Title smaller serif>Industry Experience</ty.Title>
    <Box>
      <ty.ArticleSection>CI/CD Pipeline Developer at IBM</ty.ArticleSection>
      <ty.SmallBodyText gutter className={c.slightlySmaller}>
        <b>May 2019 - August 2020</b>
      </ty.SmallBodyText>
    </Box>
    <ty.ArticleText gutter slightlySmaller>
      During my time at IBM, I was part of the Customer Experience Analysis (CEA) team, which was one of the teams that worked on IBM&apos;s hybrid-cloud machine learning platform (CPD). The purpose of the CEA team was actually not very clear me for a long time, as I&apos;ve never heard of such a team before I joined one. But eventually I figured out that the purpose of our team was to use our influence to try and get the other teams to co-operate on isses that affected the quality of the platform overall, that none of them wanted to address individually. I basically just worked on software that generated reports that the management on our team used to make their cases.
    </ty.ArticleText>

    <Box>
      <ty.ArticleSection>Automated Test Developer at Caseware</ty.ArticleSection>
      <ty.SmallBodyText gutter className={c.slightlySmaller}>
        <b>January 2018 - August 2018</b>
      </ty.SmallBodyText>
    </Box>

    <ty.ArticleText gutter slightlySmaller>

      When I was Caseware, I was on the QA team for their cloud-based auditing platform (Smart Engagement), and as you may imagine, the purpose of this team was a lot more clear than that of the CEA team. And being a smaller project in scope as well, it seemed that we could elicit inter-team co-operation by simply shoving all 20 or so people involved on the project into a single room, and just talking it out. Being the QA team, we were responsible for ensuring the quality of the platform, which in our case, meant that we had to ensure that the functions of the platform worked as intended, and we did this with a combination of manual and automated tests, which I worked on both.
    </ty.ArticleText>

    <ty.Title smaller serif>Tech Stuff I Work With</ty.Title>

    <ty.ArticleSection gutter>Software Collaboration Tools (Git, GitHub, BitBucket)</ty.ArticleSection>
    <ty.ArticleText gutter title="Software Collaboration Tools" style={{borderRadius: '15px'}} src={github}>

      Version Control Software or VCS is the base tool that allows programmers to effectively collaborate on code, examples of this would be Git, or SVN. Services like Github, or BitBucket are platorms that host VCS servers, and integrate many of the VCS features into a GUI that allows idiots like myself to use them more effectively. In my time, since I&apos;ve often had to collaborate on code with others, I&apos;ve become quite familiar with the standard VCS usage, (code reviews, pull requests, branching, merging, et cetera).

    </ty.ArticleText>

    <ty.ArticleSection gutter>
      The Web Stack (HTML, CSS, Javascript)
    </ty.ArticleSection>

    <ty.ArticleText gutter title="The Web Stack (HTML, CSS, Javascript)" src={js}>

      In our modern times, the web platform consists of HTML, CSS, and JavaScript. The HTML is the core, and the primary information carrying component of the bunch, CSS, which in my opinion is not really necessary, styles the web, and makes branding over the internet possible, JavaScript, which I believe is the real travestry essentially turns the web into a platform emulator, which would have been completely unnecessary if the OS producers could have just agreed on a common application API.

    </ty.ArticleText>

    <ty.ArticleSection gutter>
      Various Web Frameworks (React, Flask, Material UI)
    </ty.ArticleSection>

    <ty.ArticleText gutter title="Various Web Frameworks" src={react}>

      But since the web is already a platform emulator, and there really seems to be no going back, (which by the way to make my point more clear, look at ChromeOS and tell me that Google doesn&apos;t already think that the web should be used as the base platform of personal computing,) web frameworks are what makes the prospect of developing on the platform tolerable, as base JavaScript was not intended to be used to make these complicated web applications.

    </ty.ArticleText>

    <ty.ArticleSection gutter>
      Database Technologies
    </ty.ArticleSection>

    <ty.ArticleText gutter title="Database Technologies" src={sql}>

      The entire space of databases is essentially concerned with the issue of reading and writing permanant records efficiently. Now the technical details of these systems have more or less been worked out long before my time, so it seems that our generation of programmers only need to be concerned with learning to program with the APIs of these systems. Which in the context of the basic applications that we develop nowadays, that means implementing systems of user information storage, inventory management, and the like.

    </ty.ArticleText>
  </Bass>;
};

export default Introductions;
