import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import UpperBanner from './components/UpperBanner';
import Banner from './components/Banner';
import Colaboration from './components/Colaboration';
import Features from './components/Features';
import Sisyphus from './components/Sisyphus';
import Freq from './components/Freq';
import Ques from './components/Ques';
import Blog from './components/Blog';
import React, { useState } from 'react';
import AllBlog from './components/AllBlog';
import Footer from './components/Footer';
import FooterDetails from './components/FooterDetails';
import Answer from './components/Answer'; 
import './components/style.css';
import Trial from './components/Trial';

function App()
{
  const Blogseries =[
    {
      id:1,
      link:"blog1.png",
      heading5:"Design",
      heading3:"UX review presentations ",
      para:"How do you create compelling presentations that wow your colleagues and impress your managers?",
      blogLower1link:"logo2.JPG",
      heading6:"Olivia Riya",
      heading7:"20 Jan 2024"

    },
    {
      id:2,
      link:"blog2.png",
      heading5:"Product",
      heading3:"Migrating to Linear 101 ",
      para:"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      blogLower1link:"logo21.JPG",
      heading6:"Phoenix Baker",
      heading7:"19 Jan 2024"

    },
    {
      id:3,
      link:"blog3.png",
      heading5:"Software Engineering",
      heading3:"Building your API stack ",
      para:"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      blogLower1link:"logo22.JPG",
      heading6:"Lana Steiner",
      heading7:"18 Jan 2024"

    }
  ]

  const footerDetailsData =[
    {
      id:1,
      footColName:"Product",
      footColVar:["Overview", "Features" , "Solutions", "Tutorials" ,"Pricing" , "Releases"],
    },
    {
      id:2,
      footColName:"Company",
      footColVar:["About us","Careers","Press","News","Media kit","Contact"],
    },
    {
      id:3,
      footColName:"Resources",
      footColVar:["Blog","Newsletter","Events","Help center","Tutorials","Support"],
    },
    {
      id:4,
      footColName:"Use Cases",
      footColVar:["Startups" , "Enterprise","Government","Saas centre" ,"Marketplaces","Ecommerece"],
    },
    {
      id:5,
      footColName:"Social",
      footColVar:["Twitter" , "Linkedin", "Facebook","Github","AngelList","Dribble"],
    },
    {
      id:6,
      footColName:"Legal",
      footColVar:["Terms", "Privacy" , "Cookies", "Licenses" ,"Settings" , "Contact"],
    }
  ]

  const questionsAndAnswers = [
    {
      id: 1,
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      id: 2,
      question: "Can I change my plan later?",
      answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      id: 3,
      question:"How does billing work?" ,
        answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    }
  ];

  // State to manage which question's answer is open
  const [openAnswerId, setOpenAnswerId] = useState(null);
  // Function to toggle the answer visibility
  const toggleAnswer = (id) => {
    if (openAnswerId === id) {
      setOpenAnswerId(null); // Close the answer if it's already open
    } else {
      setOpenAnswerId(id); // Open the clicked answer
    }
  };

 return <>
      <Navbar></Navbar>
      <UpperBanner></UpperBanner>
      <Banner></Banner>
      <Colaboration></Colaboration>
      <Features></Features>
      <Sisyphus></Sisyphus>


      <div className='freq'>
      <h1 className='pos size1'>Frequently Asked Questions</h1>
      <h3 className='pos size2'>Everything you need to know about the product and billing.</h3>
      { questionsAndAnswers.map((item) => (
        <Answer
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openAnswerId === item.id}
          toggleAnswer={() => toggleAnswer(item.id)}
        />
      ))}
    </div>
      

      <Ques></Ques>
      <AllBlog key={Blogseries.id} Blogseries={Blogseries}></AllBlog>
      <Trial></Trial>
      <FooterDetails FooterDetails={footerDetailsData} />
      <Footer />

  </>
}


export default App;