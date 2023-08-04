import {
    Text,
    Hr,
    Img,
} from '../../parts';
import mtab from './assets/mtab.png';
import greyMatch from './assets/grey-match.jpg';
import redMatch from './assets/red-match.jpg';
import brownMatch from './assets/brown-match.jpg';
import blueblueSpruce from './assets/blueblue-spruce.jpg';
import greenYellow from './assets/green-yellow.jpg';
import underTheTree from './assets/under-the-tree.jpg';
import tyrianPurple from './assets/tyrian-purple.png';
import React from 'react';

import Bass from '../Bass.jsx';

/**
 * Why trees are actually blue
 * first do a color matching experiment, then start speculating on why stuff....
 * ambiguous categories
 * weird color theory
 * pre-disposed to believe that trees are green
 */

const MostTreesAreBlue = () => (
    <Bass>
        <Text variant="h1" id="most-trees-are-blue" serif>Most Trees Are Blue</Text>
        <Hr type={1}/>

        <Text>
            <Img src={mtab} type="full" caption="Screenshot of Jaden Smith's 'Most Trees Are Blue' tweet."></Img>
        </Text>

        <Text variant="h2" serif>Contents</Text>
        <Hr type={2}/>
        <Text>
            <ul>
                <a href="#most-trees-are-ablue"><Text><li>Most Trees Are Blue</li></Text></a>
                <a href="#article"><Text><li>Article
                    <ul>
                        <li>hi</li>
                    </ul>

                </li></Text></a>
            </ul>
        </Text>
        <Text variant="h2" id="article" serif>Article</Text>
        <Hr type={2}/>
        <br/>
        <Text variant="h4"><b>Do we See Color Properly?</b></Text>
        <br/>
        <Text>

                At first glance, the idea that <i><q>most trees are blue</q></i> is simply absurd, because just from our everyday experience, we know that most trees are green. But even so, I still wonder if we ought to look further into the issue, which is a fecking rhetorical question, because the existance of this article means that I already have. But anyways, for this investigation, my working theory will be that Jaden Smith is right about trees, that they&apos;re acutally blue, (credit goes to Sinix Designs for pointing this out, btw,) and the reason for why we don&apos;t see trees in this way, is that we have some sort of collective mental block that prevents us from doing so. So what I want to do in this investigation, is to figure out why we have this quirk in our color perception, and I hope that in the process we can improve our awareness of our own perception, and so, improve our ability to design.

            <Img src={underTheTree} type="full" caption="Underneath a tree, with some wild native plants."/>

                So regarding our perception of color, I&apos;ll be taking it for granted that people who share a culture also share a system of color perception, (to a certain extent that is,) in the sense that in general, we have the ability to intuitively recognize and agree with each other on what the color of an object is, and whenever we cannot come to an agreement, there is actually great distress in our society, as seen during the unfolding of the black-and-blue dress debacle. However, while it is true that we have the ability to perceive what colors look like, this does not necessarily mean that we really know what we are perceiving. Because although in some circumstances, the color of a thing is very clear, as red is just red, and blue is just blue, in others, the color of a thing gets a bit weird, for instance with darker, or less saturated colors, like what exactly is brown, grey, beige, or white?

            <Img src={redMatch} type="full" caption="You can easily tell by this object's red hue, that it is red."/>

            <Img src={greyMatch} type="full" caption="I know that this sounds like an excuse, but I don't think that my screen is even bright enough to match this grey on the wall."/>

        </Text>
        <Text variant="h4"><b>The Hue of Color</b></Text>
        <br/>
        <Text>

                If you pay attention to the way that people talk about color, you will soon realize that the word color actually has multiple meanings, and we have to infer the meaning of color based on the context in which it is used. For instance, we say that, <q>red (light) has a wavelength of 650nm</q>, and that <q>white is not a color, but a shade</q>. But if the definition of a color is light at a narrow band of wavelengths, (like how reds are at about 650nm,) then what is the wavelength of brown? And if brown doesn&apos;t have a narrow band of wavelengths to which it belongs, then is brown just like white, which also does not have a narrow band of wavelength to which it belongs? Then in that case is brown a color at all, is it instead a shade?

            <Img src={brownMatch} type="full" caption="Brown is just orange, but sometimes its red, or yellow. - Lao Tse"/>

                So for our purposes, I suggest that we break down the word color into three distinct categories, specific color, color, and hue. Now obviously, I&apos;m a fecking idiot, so I&apos;m not the one who came up with this distinction, as I&apos;m simply re-mixing ideas that I&apos;ve come accross over the years. But anyways, I&apos;m suggesting that we take the word specific color to mean the name that we give to a specific RGB color code (ie. red (as a specific color) is #FF0000, and cyan (as a specific color) is #00FFFF). However, as you&apos;ve probably already realized, this is not the only context in which we use the word red, as we also use it to mean a color, and what we mean by color is a range of RGB color codes that we group together, for instance in the family of reds, we also have dark red, and cherry red, and light red, et cetera. And finally, we also see the word red being used to describe a hue, and in this instance, hue basically means the color of the dominating wavelength of light in a color, for instance red, pink, and reddish-brown, all have a red hue.

            <Img type="full" src={tyrianPurple} caption="explain specific color vs color of tyrian purple(what is a color really) My guestimation for how tyrian purple is supposed to look. If you look up the hex code, it says that it should be a bit redder than this. But if you really think about it, that color you see if you look it up isn't necessarily 'the' tyrian purple, because tyrian purple was used to dye cloths back in the day, and different makers of the dye would have different colors of it, and the cloth would also be different colors in different lighting, so who really knows what tyrian purple is supposed to look like."/>

                So just to make these definitions clear, lets expand on the example of red. In the context of web design, red can refer to a single color code, for instance if you give a div background:red, you will actually give the div a background specific color of #ff0000 (aka HSV 0,100,100). But red a color is a much broader idea, as I can pretty much guarantee that 99.9 or more percent of people would agree that HSV 0,95,95 is also red, in face I would say that the range of red is about 345 to 8 degrees hue, 60 to 100 percent saturation, and 60 to 100 percent value, in the HSV color space.

        </Text>
        <br/>
        <Text variant="h4"><b>Colors of a Single Hue</b></Text>
        <br/>
        <Text>
                But now this begs the question, if a red color implies a red hue, but a red hue doesn&apos;t imply a red color, then doesn&apos;t that mean that there are non-red color that have a red hue? Which is also a fecking rhetorical question because we&apos;ve already seen that reddish-brown, and pink have red hues, yet we don&apos;t call those colors red. And I think this is really the issue that we have on the color of trees.

                So this is where I believe that the argument will be the most contentious, and the argument revolves around the specific color of cyan,

                So remember, we&apos;re still trying to answer the question of whether trees are blue or not, and spoiler alert, the solution to this issue really lies in the phenomena of boundaries of color

                Now there still a second complication with this definition of color, which is that color that exists on a computer, is fundamentally different than color that exists in the outside world. And what I mean by that is, if you look up the hex code to a color, for instance, ultramarine.

                Although we have made this distinction, there is invariably still this feeling that hue, and color are somehow interelated. And honestly this may just be an artifact of us previously referring to these now distinct salient phenomena as the same word color. And in practice, things that we call a distinct color, span hue, as well as saturation, and value, (in the HSV color space). For example red.
        </Text>

        <Text variant="h2">What about trees</Text>
        <Hr type={2}/>
        <Text>

                Given that some trees are <i>literally</i> blue, and that green, the color that we think trees are, is already pretty close to blue, I don&apos;t think its too much of a stretch to also start seeing most trees as blue. But obviously, I&apos;m not overtly delusional, and I am aware that trees, in many situations have almost no blueness, for instance in bright sunlight, the coolness of blue is gone, replaced with a warm yellow glow.

            <Img src={greenYellow} type="full" caption="hello"/>

                But is the yellow from these trees from the tree itself, or is it only yellow from the sunlight. Now I do know that the color of sunlight itself can be a bit of a pretentious topic, because people seem to have different definitions of what sunlight means, now it is the case, (or at least I&apos;ve been told that it&apos;s the case by the scientific types,) that sunlight, when it leaves the sun, is more or less white, but to our experience, this light is literally yellow, as we can see from the photo above, and I&apos;ve been told that that&apos;s due to <i>Reighleigh Scattering</i>, but for the my purposes, I will just go with our experience and say that sunlight is yellow.

            <br/><br/><br/>

                So I wonder, if we accept the premise that our perception is flawed, meaning that what we see is not reality, then do we open the doors to wonder if the green that we see from the trees, is really from the tree, and how much of the green that we see is all in our heads, having been told by our educators that trees are green. But that question aside, we may as well start with in my opinion, a quite obviously blue tree,the blue spruce.

            <Img src={blueblueSpruce} type="full" caption="A photo of 'blue' spruce. Not my car, btw, this is a just a wild blue spruce that I found in the local suburb biome."/>

                Here I have picked out a few hues in the tree

        </Text>
    </Bass>

);

export default MostTreesAreBlue;
