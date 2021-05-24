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
      projects:[
        {
        projectName:'NeoDVC',
        desc:'This is the website of HO CHI MINH CITY DEPARTMENT OF INDUSTRY AND TRADE',
        teamSize:'4',
        position:'Developer',
        responsibilities:'Design, code and bug fix',
        tech:': Liferay portal 6.1, Java, jQuery, AlloyUI , Primefaces,JSP, Postgresql, Apache Solr, Apache Tomcat'
      },
      {
        projectName:'NeoRating',
        desc:'This is the site to assess peoples satisfaction.',
        teamSize:'3',
        position:'Developer',
        responsibilities:'Design, code',
        tech:':Liferay portal 6.2, Java, jQuery, AlloyUI , Primefaces,JSP, Postgresql, Apache Tomcat'
      },
      {
        projectName:'NeoECM',
        desc:'This is the website for management of the text of BinhDuong Province',
        teamSize:'3',
        position:'Developer',
        responsibilities:'Design, code and bug fix',
        tech:':Liferay portal 7.0, Java, jQuery, AlloyUI , Primefaces,JSP, Postgresql, Apache Tomcat'
      },
    ]
    },
    {
      title: 'FPT Infomation System',
      date: '06/2018 – 10/2019',
      place: '',
      desc:
        'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
      link: '',
      linkText: '',
      projects:[
        {
        projectName:'Icet',
        desc:'Ricoh Dynamic Cloud Database',
        teamSize:'6',
        position:'Developer',
        responsibilities:'Design, code and bug fix',
        tech:'Spring boot, mongodb, angularjs'
      },
      {
        projectName:' Dich Vu Cong Quoc Gia',
        desc:'Dich Vu Cong Quoc Gia',
        teamSize:'8',
        position:'Team leader',
        responsibilities:'Design analysis, code and bug fixing, assignment task for menber in team',
        tech:'Spring boot, reactjs, Postgresql'
      },
      ]
    },
    {
      title: 'K&G Technology',
      date: '10/2019 – Present',
      place: '',
      desc:
        '',
      link: '',
      linkText: '',
      projects:[
        {
        projectName:'TimeValue',
        desc:'Working time calculation system',
        teamSize:'6',
        position:'Team leader',
        responsibilities:'Design analysis, code and bug fixing, assignment task for menber in team',
        tech:'Spring MVC, MySQL...'
      },
      {
        projectName:'PayslipPro',
        desc:'Salary calculation system',
        teamSize:'6',
        position:'Team leader',
        responsibilities:'Design analysis, code and bug fixing, assignment task for menber in team',
        tech:'Stuct 2, MySQL...'
      },
      {
        projectName:'025810.com',
        desc:'Job placement system',
        teamSize:'6',
        position:'Team leader',
        responsibilities:'Design analysis, code and bug fixing, assignment task for menber in team',
        tech:'Stuct 1, Postgresql...'
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
