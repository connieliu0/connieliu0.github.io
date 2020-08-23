import './App.css';
import Bottom from './functions/Bottom.js';
import Footer from './functions/Footer.js';
import ProjHead from "./functions/ProjHead.js";
import React from 'react';
import ReactPlayer from 'react-player';


function Twitter(props) {
  return(
    <div>
      <div className="bodytext">
        <hr/>
        <div className="projmargins">
          <ProjHead
            title="Finding your Own Flocks"
            description="A Twitter Case Study on Adding Groups"
            image="twitter/header.png"
            timeline="Spring 2020, 8 weeks"
            role="Focus"
            team="Product Design"
            tools="Figma"
          />
        <em>This has also been published on Medium! Give it a read <a href="https://uxdesign.cc/finding-your-own-nests-a-twitter-case-study-970d2aa4efd8">here</a>!</em>
        <h2>Overview</h2>
        <p>Unlike Instagram and Facebook, Twitter is a social media platform where interacting mostly means connecting and in many cases with strangers. There are so many different forms of connection on Twitter from designers networking to fandoms raving about the latest song.</p>
        <p>But a huge problem with the platform happens when your audience is a mix of these people with different interests. Who do you post to? Is it a good idea to post about the newest Harry Styles album if your audience is mostly professionals?</p>
        <h3>Instead of being afraid to tweet because of conflicting audiences, is there a better solution?
        </h3>
        <h4>User Research</h4>
        <h2>The Daily Life of a Tweeter</h2>
        <p>For my user interviews, I asked about how people browsed, found content, and interacted on Twitter. Here’s a summary of the insights I found:</p>
        <img src="twitter/affinity.png" img alt="affinity diagram"/>
        <p>The research revealed that users post on Twitter for multiple people — friends, network contacts, and fandoms. They’re constrained by factors like <strong>time</strong> and <strong>image</strong> in their usage.</p>
        <p>Because Twitter has a sprawling user base, I made different use cases.</p>
        <img src="twitter/usecase.png" img alt="usecases"/>
        <h2>The Problem Statement</h2>
        <p>When people use Twitter, they find it difficult to be able to tweet/reply what they want because:</p>
        <ol>
            <li>All their tweets/replies are public and they don’t want their entire audience to see them</li>
            <li>They don’t want to sound too unprofessional/uninformed</li>
            <li>They have niche interests where their tweets would only apply to a certain group of people</li>
        </ol>
        <p>Also, users already seem to want a space of their own. In many fandoms, there are “group chats” where users can interact with others interested in the same things in a private space.</p>
        <img src="twitter/twitterex.png" img alt="twitter examples"/>
        <p>Although it’s a great way to get content and to meet people with similar interests, my user research found that these group chats could get awkward and often dissolve quickly.</p>
        <h4>Final Product</h4>
        <h2>Introducing Twitter Groups (or perhaps… Flocks)</h2>
        <p>Users wanted a private space, one that they could define in terms of content and visibility. Introducing… Twitter Groups!</p>
        <ReactPlayer url= "https://www.youtube.com/watch?v=-hz8bhJ32pM" playing/>
        <h4>User Research</h4>
        <h2>How Did I Get There?</h2>
        <p>After brainstorming I landed on three solutions:</p>
        <img src="twitter/sketch1.jpeg" img alt="sketch1"/>
        <p><strong>Twitter shower thoughts</strong> would allow users to post whatever they wanted to a select number of people, almost like a private Twitter integrated into a public one. However, that would limit posts to be mostly about the user's life. What about a space for other topics?</p>
          <img src="twitter/sketch2.jpeg" img alt="sketch2"/>
          <p><strong>Twitter private conversations</strong> would allow replies to be only seen to the poster, but it lacked any feasibility for community engagement. After all, we tweet because we want to be <strong>heard</strong>.</p>
          <img src="twitter/sketch3.png" img alt="sketch2"/>
          <p><strong>Twitter groups</strong> would allow users to post whatever they wanted, but also provided the perfect degree of customizability as to who would see the post. The user could use groups to rant to their close friends but also post the latest fandom news with fellow internet users at the same time.</p>
        <h4>Prototyping</h4>
        <h2>Figuring Out Where the Pieces Fit</h2>
        <h3>Entry-points</h3>
        <img src="twitter/entrypoint.png" img alt="entrypoints"/>
        <p>Ultimately I decided on option D because user research indicated that users were less inclined to use features that were hidden in the sidebar (such as Lists). Also, options B and C were ruled out because that was how Twitter currently integrated Lists and Special News Features into the feed.</p>
        <h4>Browsing Groups and Group Details</h4>
        <h2>How do we view groups?</h2>
        <h3>Groups Central Page</h3>
        <img src="twitter/viewgroups.png" img alt="viewgroups"/>
        <p>I ultimately settled on option D. User feedback indicated that it was important to <strong>quickly</strong> and <strong>easily</strong> navigate between each group’s content. They didn’t want another cluttered feed like the home page.</p>
        <p>This posed another problem, how do we still ensure the user can view all the content in a single stream? Users indicated they still wanted an option to see an <strong>unfiltered view.</strong></p>
        <h3>Integrating an Unfiltered View</h3>
            <img src="twitter/unfilteredview.png" img alt="unfilitered"/>
            <p>Although option A was similar to how Twitter integrated Lists onto the homepage, I went with option B in the end because the interaction was more seamless while swiping would provide a break in the interaction.</p>
            <p>Also, since the default Twitter feed is organized by highlights, the user would implicitly understand that the Twitter groups feed is organized the same way.</p>
        <h3>What makes these groups so different anyways?</h3>
        <img src="twitter/groupsdifferent.png" img alt="groups different"/>
        <p>User testing showed that leaving the presentation of groups to be the same as a user profile proved to be very confusing, ruling out option A. Option C would make viewing the follower count difficult if the cover photo was a detailed photo.</p>
        <p>In the end, I chose option B, however there was still a major problem- <strong>users didn’t know the difference between following and joining at first glance.</strong></p>
        <h3>What’s the difference between joining and following?</h3>
        <p>The point of joining and following was to allow people the option of passively following a group and to also allow for more control over posting privileges. Only people who joined a group would be allowed to post and follow at the same time. This would allow more customization in the usage of groups.</p>
        <img src="twitter/joinvsfollow.png" img alt="join versus follow"/>
        <p>To explain the difference I took inspiration from how Twitter currently explains its features, through a bottom pop-up modal.</p>
        <h3>Final Interaction for Browsing</h3>
        <div class="special">
        <img src="twitter/browsegif.gif" img alt="browsing groups"/>
        </div>
        <h4>Searching Groups</h4>
        <h2>How do we find these groups?</h2>
        <h3>Iteration 1: Integrating Your Groups, Explore, and Create</h3>
            <img src="twitter/integration.png" img alt="integration"/>
        <p>Initially I had the idea of having <em>Your Groups, Explore and Create</em> all be accessed through the same tab system, indicating they had equal importance. However, through user research I learned that:</p>
        <ul>
            <li>Users will only use <em>Explore</em> on Twitter once or twice in the beginning when setting up the groups they wanted to follow.</li>
            <li>Users would use <em>Create</em> once, twice, or even never, meaning it didn’t need to be as accessible as viewing the feed.</li>
        </ul>
        <h3>Iteration 2: Integrating Explore and Search</h3>
          <img src="twitter/iteration2.png" img alt="iteration2"/>
          <p>For a while, I was stuck on trying to integrate both searching <strong>for all groups on Twitter</strong> (Explore) and searching <strong>within your own groups</strong> (Search). After user research, I learned that my explorations in my second iteration weren’t enough because:</p>
          <ul>
              <li>The difference in function between <em>Your Groups, Search,</em> and <em>Explore</em> was <strong>confusing</strong> from first glance</li>
              <li>If users really wanted to look for groups <strong>ALL</strong> over Twitter, they always went to the bottom bar when prompted</li>
              <li>Users wanted a way to access <strong>a list of groups they were currently in</strong> instead of solely relying on the carousel</li>
          </ul>
        <h3>Iteration 3: The Final Solution</h3>
        <img src="twitter/iteration3final.png" img alt="iteration3"/>
        <p>For my final solution I simplified <em>exploring</em> and <em>searching</em> into one action.</p>
        <ul>
            <li>Because users would only have one or two groups under a keyword, it allowed space for an option to explore groups from the search button on the bottom</li>
            <li>The empty state would make room for a list of all groups a user was in, which made sense because that was when a user would want to access a specific group anyways</li>
        </ul>
        <h3>Final Interaction for Searching</h3>
        <div class="special">
        <img src="twitter/searchgif.gif" img alt="searching groups"/>
        </div>
        <h4>Creating Groups</h4>
         <h2>Forming the Flocks… I Mean Groups</h2>
       <p>Although the content requirements for this feature were straight-forward, I went through several iterations to make it match Twitter’s design system and increase usability.</p>
       <img src="twitter/createprocess.png" img alt="create process"/>
       <p>In my original version, it was difficult for the user to know where to click to input their information. Also, the invite was a scroll within a scroll which would add poor usability.</p>
       <p>I then split it into three steps and provided context to each so the user felt more guided in the group creation process.</p>
       <h3>Final Interaction for Creating</h3>
        <div class="special">
        <img src="twitter/creategif.gif" img alt="creating groups"/>
        </div>
       <h2>Conclusion</h2>
         <p>I didn’t realize it at first, but users don’t need a lot of followers to experience this problem. Recently, I started tweeting more and I realized that I had professionals following me and underclassmen from high school and close friends. I didn’t know what to post and so I didn’t post at all.</p>
         <p>Ultimately, if there were more time I would look into how users interact with others within groups. Besides retweets and posts, what else would make Twitter Groups different from any old group chat or shared account? Would it be possible to integrate discussion boards, polls, or collaborations?</p>
        <p>In the end, Twitter Groups is a solution that at the very least makes <strong>Twitter a comfortable space for everyone.</strong></p>
        </div>
        <Bottom
      nextproject="Arcade: a gaming social app for seniors"
      next="https://connieliu0.github.io/#/arcade"
      />
        </div>

        <Footer
      />
    </div>
  )
}
export default Twitter;
