import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  const sxperienceDatas = [
    {
      title: 'NewSaigonSoft Corporation (NSS)',
      date: '10/2016 – 04/2018',
      place: '',
      desc:
        'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
      link: '',
      linkText: '',
      projects:[{
        projectName:'NeoDVC',
        desc:'This is the website of HO CHI MINH CITY DEPARTMENT OF INDUSTRY AND TRADE',
        teamSize:'8',
        position:'Developer',
        responsibilities:'Design, code and bug fix',
        tech:': Liferay portal 6.1, Java, jQuery, AlloyUI , Primefaces,JSP, Postgresql, Apache Solr, Apache Tomcat'
      },]
    },
    {
      title: 'FPT Infomation System',
      date: '06/2018 – 10/2019',
      place: '',
      desc:
        'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
      link: '',
      linkText: '',
      projects:[{
        projectName:'',
        desc:'',
        teamSize:'',
        position:'',
        responsibilities:'',
        tech:''
      }
      ]
    },
  ];
  
  return (
    <>
      <Head>
        <title>Expereience :: HoangDh</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Java Developer</h3>
        {sxperienceDatas.map((el, index) => (
          <InternshipCard
            title={el.title}
            date={el.date}
            place={el.place}
            desc={el.desc}
            link={el.link}
            linkText={el.linkText}
            projects={el.projects}
          />
           ))}
        
      </Layout>
    </>
  );
}
