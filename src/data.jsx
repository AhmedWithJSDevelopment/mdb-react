import React from 'react';

import {
// import Testimonials from './Testimonals';
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
  FaFacebookMessenger,
} from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,

  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
   
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,

  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarAlt />,

  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,

  },
  {
    id: 6,
    url: '/Messenger',
    text: 'Messenger',
    icon: <FaFacebookMessenger />,

  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
  {
    id: 6,
    url: 'https://www.twitter.com',
    icon: <FaFacebookMessenger />,
  },
];



export const members = [
  {
    id: 1,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png',
    name:'Shirley Fultz' ,
    job:'Designer' ,
    say:" It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site" ,
  },
  {
    id: 2,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png',
    name:'Daniel Keystone' ,
    job:'Designer' ,
    say:" The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers." ,
  },
  {
    id: 3,
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--gRFMHqWs--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/1xwiaya5i7wweic3pz96.png',
    name:'Theo Sorel' ,
    job:'Designer' ,
    say:" I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!" ,
  },

];
 export const reviews = [{
         id: 1,
         name: "Paul Carse",
         job: " CTO and Co-founder of Life Moments ",
         // img: "pers.png",
         iframe: "https://www.youtube.com/embed/V0jW2k2840Q",
         //  iframe: "../../video/expertise_fintech_timelapse.mp4",
         text: "«We now have a core team of engineers at Relevant who work for us full-time and are supplemented by 4 or 5 engineers with different skillsets when and if required.»",
     }, {
         id: 2,
         name: "Cassian Harrison",
         job: " Co-founder of Splink Industries and My Theory Test App by James May ",
         // img: "https://cdn-cfdja.nitrocdn.com/uOxxxDWjcukgNxoRlWCAPnOZsfFUWQlA/assets/static/optimized/rev-6c1cefb/wp-content/uploads/1612272389607.jpeg",
         iframe: "https://www.youtube.com/embed/tUU7OMbWGp4",
         //  iframe: "../../video/expertise_retail_timelapse.mp4",

         text: "“Working with you guys has been fantastic. The level of expertise of your development team is as good as the people that we get in the UK. You’ve got a fantastic talent base of programmers. It’s more challenging to find people of that quality in the UK.”",
     }, {
         id: 3,
         name: "Ole Jørgen Næss and Christopher Krohn",
         job: "VP of Product and Engineering & Director of Strategic Partnerships and Integrations at Svenn (former 24onoff) ",
         // img: "https://cdn-cfdja.nitrocdn.com/uOxxxDWjcukgNxoRlWCAPnOZsfFUWQlA/assets/static/optimized/rev-6c1cefb/wp-content/uploads/1612272389607.jpeg",
         iframe: "https://www.youtube.com/embed/sBo_s3HMpmE",
         //  iframe: "../../video/open.mp4",

         text: "“We had the challenge to find a trustworthy software development company that we could rely on. We chose Relevant because we felt that they understood our business needs.”",
     },

 ];
