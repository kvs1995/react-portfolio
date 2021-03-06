//CSS Imports
import './portfolio.css';

//Image Imports
import fillin1 from '../../images/blackfiller.jpeg'
import shelfcare1 from '../../images/shelf-care/sc1.png'
import workdayscheduler from '../../images/work-day-scheduler/wds1.png'
import weatherdashboard from '../../images/weather-dashboard/wd1.png'
import teamGenerator from '../../images/team-generator/tg1.png'
import socialNetwork from '../../images/social-network-api/sna1.png'
import readMeGenerator from '../../images/readme-generator/rdm1.png'
import portfoliov3 from '../../images/portfolio-v3/p31.png'
import noteTaker from '../../images/note-taker/nt3.png'
import employeeTracker from '../../images/employee-tracker/et1.png'
import eCommerce from '../../images/e-commerce/ec1.png'
import dibs from '../../images/dibs/d1.png'
import codingQuiz from '../../images/coding-quiz/cq1.png'

//Icon Imports
import { GithubFilled, AlignCenterOutlined,RightSquareOutlined, RightSquareTwoTone, FileTwoTone, CodeTwoTone } from '@ant-design/icons';

//Layout Antd Imports
import { Card, Col, Row } from 'antd';
import { Carousel } from 'antd'
import { useState } from 'react'

//Variable Declaration
const { Meta } = Card;


//Link Variable 
const shelfCareWebsite = [<a href='https://shelf-care-uhs.herokuapp.com/'><FileTwoTone key='more-info'/></a>,<a href='https://github.com/unanswerable-hog-splatch'><CodeTwoTone key="code" /></a>]
const workDaySchedulerGithub =[<a href='https://github.com/kvs1995/well-planned-work-day-scheduler'><CodeTwoTone key="code" /></a>] 
const weatherDashboardGithub = [<a href='https://github.com/kvs1995/super-simple-weather-dashboard'><CodeTwoTone key="code" /></a>]
const teamGeneratorGithub =[<a href='https://github.com/kvs1995/rootin-tootin-team-generator'><CodeTwoTone key="code" /></a>]
const socialNetworkGithub = [<a href='https://github.com/kvs1995/sweet-socialistic-social-network-api'><CodeTwoTone key="code" /></a>]
const readMeGeneratorGithub = [<a href='https://github.com/kvs1995/HWK9-ReadMe_Generator'><CodeTwoTone key="code" /></a>]
const portfoliov3Github =[<a href='https://github.com/kvs1995/updated-portfolio-v3'><CodeTwoTone key="code" /></a>]
const noteTakerGithub = [<a href='https://github.com/kvs1995/neato-burrito-note-taker'><CodeTwoTone key="code" /></a>]
const employeeTrackerGithub = [<a href='https://github.com/kvs1995/HWK12_Employee-Tracker'><CodeTwoTone key="code" /></a>]
const eCommerceGithub = [<a href='https://github.com/kvs1995/easy-peasy-eCommerce'><CodeTwoTone key="code" /></a>]
const dibsWebsite = [<a href='https://tenant-buddy.herokuapp.com/dashboard'><FileTwoTone key='more-info'/></a>,<a href='https://github.com/Dog-with-two-Gs/tenant-buddy'><CodeTwoTone key="code" /></a>]
const codingQuizGithub = [<a href='https://github.com/kvs1995/quick-code-quiz'><CodeTwoTone key="code" /></a>]

export default function Portfolio() {
  return(
    <>
      <Row gutter={21} className="card-container">
        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='1' cover={ <img alt="fillin" src={shelfcare1} />} actions={shelfCareWebsite}>
            <Meta title="Shelf Care" description="A useful tool to assist with keeping track of when you last watered your plants."/>
            {/* <br></br> */}
            {/* <Meta description="Languages Utilized: NoSQL, Javascript, CSS"/> */}
          </Card>
        </Col>
        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='2' cover={ <img alt="fillin" src={dibs}/> }actions={dibsWebsite}>
            
            <Meta title="Dibs" description="Call dibs on your apartment building laundry machines before your neighbors can."/>
          </Card>
        </Col>
        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='3' cover={ <img alt="fillin" src={codingQuiz}/> } actions={codingQuizGithub}>
            <Meta title="Coding Quiz" description="Test your knowledge and beat your last high score with this quick coding quiz." />
          </Card>
        </Col>
      </Row>
      <Row gutter={21} className="card-container">
        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='4' cover={ <img alt="fillin" src={portfoliov3} />  }actions={portfoliov3Github}>
            <Meta title="Portfolio Version 2" description="Take a peek at what my portfolio looked like before using React"/>
          </Card>
        </Col>

        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='5' cover={ <img alt="fillin" src={employeeTracker}/> }actions={employeeTrackerGithub}>
            
            <Meta title="Employee Tracker" description="It's hard to keep track of all your employees at your successful startup - this can help you with that!"/>
          </Card>
        </Col>

        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='6' cover={ <img alt="fillin" src={eCommerce}/> } actions={eCommerceGithub}>
            <Meta title="E-Commerce" description="" />
          </Card>
        </Col>
      </Row>
      <Row gutter={21} className="card-container">
        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='7' cover={ <img alt="fillin" src={teamGenerator} />  }actions={teamGeneratorGithub}>
            <Meta title="Team Generator" description="Build the perfect engineering team with this team roster generator."/>
          </Card>
        </Col>

        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='8' cover={ <img alt="fillin" src={readMeGenerator}/> }actions={readMeGeneratorGithub}>
            <Meta title="ReadMe Generator" description="Cut some time down on creating a Read Me with this simple ReadMe Generator!"/>
          </Card>
        </Col>

        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='9' cover={ <img alt="fillin" src={weatherdashboard}/> } actions={weatherDashboardGithub}>
            <Meta title="Weather Dashboard" description="Watch out for the conditions in your next destination with this weather tracker." />
          </Card>
        </Col>
      </Row>
      <Row gutter={21} className="card-container">
        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='10' cover={ <img alt="fillin" src={workdayscheduler} />  }actions={workDaySchedulerGithub}>
            <Meta title="Work Day Scheduler" description="The simplest work day scheduler for the day to day minimalist." />
          </Card>
        </Col>

        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='11' cover={ <img alt="fillin" src={socialNetwork}/> }actions={socialNetworkGithub}>
            <Meta title="Social Network API" description="Add some friends and share some thoughts!"/>
          </Card>
        </Col>

        <Col span={7} className="card-col">
          <Card hoverable className='individual-cards' id='12' cover={ <img alt="fillin" src={noteTaker}/> } actions={noteTakerGithub}>
            <Meta title="Note Take" description="Jot down your thoughts!" />
          </Card>
        </Col>
      </Row>
    </>
  )
}


        {/* <Row gutter={18} className="portfolio-container">
        </Row> */}


