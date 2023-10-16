import './css/App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react"; //ここを追加
import ReactGA from "react-ga4";
import { useGlobalContext, GlobalContextProvider } from './contexts/globalContext'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from "./pages/Home";
import About from "./pages/machikane/About";
import Theme from './pages/machikane/Theme';
import Goods from './pages/machikane/Goods';
import Sponsor from './pages/machikane/Sponsor';
import Adresses from './pages/machikane/Adresses';

import Sections from './pages/project/Sections';
import Project from './pages/project/Project';
import Detail from './pages/project/Detail';
import Mogiten from './pages/project/Mogiten';
import Timetable from './pages/project/timetable/Timetable';
import Ralley from './pages/project/Ralley';
import OfficialProject from './pages/project/OfficialProject';
import TalentProject from './pages/project/TalentProject';
import LabOpen from './pages/project/LabOpen';

import Notes from './pages/visitor/Notes';
import Pamphlet from './pages/visitor/Pamphlet';
import FAQ from './pages/visitor/FAQ';
import Inquiry from './pages/visitor/Inquiry';
import Questionnaire from './pages/visitor/Questionnaire';

import Access from './pages/access-map/Access';
import Map from './pages/access-map/Map';

import HomeEn from './En-pages/HomeEn';
import AboutEn from './En-pages/machikane/AboutEn';
import ThemeEn from './En-pages/machikane/ThemeEn';
import GoodsEn from './En-pages/machikane/GoodsEn';
import SponsorEn from './En-pages/machikane/SponsorEn';
import AdressesEn from './En-pages/machikane/AdressesEn';

import SectionsEn from './En-pages/project/SectionsEn';
import ProjectEn from './En-pages/project/ProjectEn';
import DetailEn from './En-pages/project/DetailEn';
import MogitenEn from './En-pages/project/MogitenEn';
import TimetableEn from './En-pages/project/timetable/TimetableEn';
import RalleyEn from './En-pages/project/RalleyEn';
import OfficialProjectEn from './En-pages/project/OfficialProjectEn';
import TalentProjectEn from './En-pages/project/TalentProjectEn';
import LabOpenEn from './En-pages/project/LabOpenEn';

import NotesEn from './En-pages/visitor/NotesEn';
import PamphletEn from './En-pages/visitor/PamphletEn';
import FAQEn from './En-pages/visitor/FAQEn';
import InquiryEn from './En-pages/visitor/InquiryEn';

import AccessEn from './En-pages/access-map/AccessEn';
import MapEn from './En-pages/access-map/MapEn';


import Error404 from './pages/Error404';

function AppContents() {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 測定 ID を入力して設定
    ReactGA.initialize("G-JV6FFSP99P");
    ReactGA.send({
      hitType: "pageview",
      // アクセスしたパス (pathname) とクエリ文字列 (search) を送付する (必要に応じて編集する)
      page: location.pathname + location.search,
    });
  }, [location]);

  const { lang } = useGlobalContext()
  return (
      <div className="App">
        <Header />

          {lang === "en" &&
            <Routes>
              <Route path="/" element={<HomeEn />} />
              <Route path="/about/" element={<AboutEn />} />
              <Route path="/adresses/" element={<AdressesEn />} />
              <Route path="/theme/" element={<ThemeEn />} />
              <Route path="/goods/" element={<GoodsEn />} />
              <Route path="/sponsor/" element={<SponsorEn />} />

              <Route path="/sections/" element={<SectionsEn />} />
              <Route path="/project-search/" element={<ProjectEn />} />
              <Route path="/project-search/:id" element={<DetailEn />} />
              <Route path="/mogiten/" element={<MogitenEn />} />
              <Route path="/timetable/" element={<TimetableEn />} />
              <Route path="/ralley/" element={<RalleyEn />} />
              <Route path="/official-project/" element={<OfficialProjectEn />} />
              <Route path="/talent-project/" element={<TalentProjectEn />} />
              <Route path="/lab-open/" element={<LabOpenEn />} />

              <Route path="/notes/" element={<NotesEn />} />
              <Route path="/pamphlet/" element={<PamphletEn />} />
              <Route path="/FAQ/" element={<FAQEn />} />
              <Route path="/inquiry/" element={<InquiryEn />} />

              <Route path="/access/" element={<AccessEn />} />
              <Route path="/map/" element={<MapEn />} />

              <Route path="*" element={<Error404 />} />

            </Routes>
          }
          {
            lang === "ja" && (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/" element={<About />} />
                <Route path="/adresses/" element={<Adresses />} />
                <Route path="/theme/" element={<Theme />} />
                <Route path="/goods/" element={<Goods />} />
                <Route path="/sponsor/" element={<Sponsor />} />

                <Route path="/sections/" element={<Sections />} />
                <Route path="/project-search/" element={<Project />} />
                <Route path="/project-search/:id" element={<Detail />} />
                <Route path="/mogiten/" element={<Mogiten />} />
                <Route path="/timetable/" element={<Timetable />} />
                <Route path="/ralley/" element={<Ralley />} />
                <Route path="/official-project/" element={<OfficialProject />} />
                <Route path="/talent-project/" element={<TalentProject />} />
                <Route path="/lab-open/" element={<LabOpen />} />

                <Route path="/notes/" element={<Notes />} />
                <Route path="/pamphlet/" element={<Pamphlet />} />
                <Route path="/FAQ/" element={<FAQ />} />
                <Route path="/inquiry/" element={<Inquiry />} />

                <Route path="/access/" element={<Access />} />
                <Route path="/map/" element={<Map />} />

                <Route path="/questionnaire/mogiten/" element={<Questionnaire />} /> 
                <Route path="/questionnaire/stage/" element={<Questionnaire />} />
                <Route path="/questionnaire/" element={<Questionnaire />} />
                

                <Route path="*" element={<Error404 />} />

              </Routes>
            )
          }
          
        <Footer />
      </div>
  );
}

export default function App(){
  return(
    <GlobalContextProvider>
      <AppContents />
    </GlobalContextProvider>
  )
}