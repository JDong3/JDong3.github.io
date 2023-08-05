// Import ss from './assets/ss.png';

import intelense from './assets/intelense.jpg';
import ibm from './assets/ibm.svg';
import caseware from './assets/caseware.png';

import bitbucket from './assets/bitbucket.jpg';
import github from './assets/github.png';
import git from './assets/git.svg';
import slack from './assets/slack.png';

import js from './assets/js.png';
import ts from './assets/ts.svg';
import kotlin from './assets/kotlin.png';
import java from './assets/java.png';

import react from './assets/react.png';
import android from './assets/android.png';
import njs from './assets/node.jpg';
import mysql from './assets/sql.png';

import {
    Box,
    makeStyles,
} from '@material-ui/core';
import {
    ty,
} from '../../parts';
import Bass from '../Bass.jsx';

const useStyles = makeStyles(() => (
    {
        slightlySmaller: {
            width: '98%',
            marginLeft: '1%',
        },
        centeredContent: {
            display: 'flex',
            justifyContent: 'center'
        }
    }
));

const Introductions = () => {
    const c = useStyles();

    return <Bass>
        <ty.Title smaller serif>About</ty.Title>
        <ty.ArticleText gutter slightlySmaller>
            Hi, I'm Joseph, I'm a computer programmer specializing in all things web, whether visual design, software architecture, front-end, or back-end, all of it. This website is designed using the Material UI component framework in conjuction with the Front-end framework React. In general, this website is a reflection of my design philosophy, but if you want specifics, the rest of this article will go into some of my past work experience, and some of the technologies that I have worked with.
        </ty.ArticleText>

        <ty.Title smaller serif>Industry Experience</ty.Title>

        <Box className={c.centeredContent} style={{marginBottom: '15px'}}>
            <Box>
                <img height="150" src={intelense}/>
                <img height="150" src={caseware}/>
                <img height="150" src={ibm}/>
            </Box>
        </Box>

        <Box>
            <ty.ArticleSection>Full-stack Developer @ Intelense Inc.</ty.ArticleSection>
            <ty.SmallBodyText gutter slightlySmaller>
                <b>Oct 2021 - Present | Bexa Sure Touch Exam | EMR Solutions Project</b>
            </ty.SmallBodyText>

            <ty.ArticleText gutter forListIndent>
                <li>Ported an existing breast cancer examination app to Android Kotlin and Android React Native in order to give a modern look and feel to the old app.</li>
                <li>Integrated the app with the exam device through a Bluetooth connection in order to display the live data feed as 3D graphics for the examiner to visualize the pressure array.</li>

            </ty.ArticleText>

            <ty.ArticleText gutter forListIndent>
                <li>Developing an Electronic Medical Records (EMR) solution with a Svelte front-end and Express back-end, to allow on demand records access, and querying from across different hospitals and institutions in Ontario.</li>
                <li>
                Designed and implemented a QR code based patient check-in and ID system, as well as a patient's dashboard for patients to view their own relevant medical records.</li>
            </ty.ArticleText>
        </Box>
        <Box>
            <ty.ArticleSection>Test Developer @ IBM</ty.ArticleSection>
            <ty.SmallBodyText gutter slightlySmaller >
                <b>May 2019 - August 2020 | Stress Testing Suite | Test Reporting Dashboard</b>
            </ty.SmallBodyText>
            <ty.ArticleText gutter forListIndent>
                <li>Developed a stress testing suite based on the Postman framework and Python scripting, in order to simulate multiple users working on the platform.</li>
                <li>
                In order to analyze the resource usage of the various components of the platform, to find the weak links, and discover possible pathways for platform failure.</li>

            </ty.ArticleText>
            <ty.ArticleText gutter forListIndent>
                <li>Developed a React App to automatically collect and display test results for the different components of the platform.</li>
                <li>
                    In order to visualize and keep record of the reliability of each component by their release versions, to help teams diagnose regression bugs, and help triage during the release cycle.
                </li>

            </ty.ArticleText>
        </Box>

        <Box>
            <ty.ArticleSection>Test Developer @ Caseware Intl.</ty.ArticleSection>
            <ty.SmallBodyText gutter className={c.slightlySmaller}>
                <b>January 2018 - August 2018 | Smart Engagement</b>
            </ty.SmallBodyText>

            <ty.ArticleText gutter forListIndent>
                <li>Maintained and developed a suite of over 400 automated test cases based on Selenium WebDriver technology, in order to automatically test the most common user workflows on the platform.</li>
                <li>In order to increase the efficiency of our testers, and drastically shorten the length of regression testing during the release cycle.</li>
            </ty.ArticleText>
        </Box>

        <ty.Title smaller serif>Skills, Technology</ty.Title>

        <Box style={{marginBottom: '15px'}} className={c.centeredContent}>
            <Box>
                <img height="150" src={react}/>
                <img height="150" src={android}/>
                <img height="150" src={ts}/>
                <img height="150" src={njs}/>
            </Box>
        </Box>

        {/* <Box style={{marginBottom: "15px"}} className={c.centeredContent}>
            <Box>
                <img height="150" src={bitbucket}/>
                <img height="150" src={github}/>
                <img height="150" src={git}/>
                <img height="150" src={slack}/>
            </Box>
        </Box> */}

        <ty.ArticleSection gutter>
            Software Collaboration Tooling
        </ty.ArticleSection>
        <ty.ArticleText gutter forListIndent>
            <li>Git, Github, BitBucket</li>
            <li>Jira, GitHub Issues, Trello, Asana, Slack</li>
        </ty.ArticleText>

        {/* <Box style={{marginBottom: "15px"}} className={c.centeredContent}>
            <Box>
                <img height="150" src={ts}/>
                <img height="150" src={java}/>
                <img height="150" src={kotlin}/>
                <img height="150" src={js}/>

            </Box>
        </Box> */}

        <ty.ArticleSection gutter>
            Languages
        </ty.ArticleSection>

        <ty.ArticleText gutter forListIndent>
            <li>Typescript, Javascript, Python, Kotlin, Java</li>
            <li>HTML, CSS, Markdown, Latex, RMarkdown, SQL</li>
            <li>English, Mandarin</li>
        </ty.ArticleText>

        {/* <Box style={{marginBottom: "15px"}} className={c.centeredContent}>
            <Box>
                <img height="150" src={react}/>
                <img height="150" src={mysql}/>
                <img height="150" src={android}/>
                <img height="150" src={njs}/>
            </Box>
        </Box> */}

        <ty.ArticleSection gutter>
            Frameworks
        </ty.ArticleSection>

        <ty.ArticleText gutter forListIndent>
            <li>React, Svelte, Android, React Native</li>
            <li>NodeJS, Express, Flask, Jasmine, Selenium</li>
            <li>SQL, AWS</li>
        </ty.ArticleText>
    </Bass>;
};

export default Introductions;

