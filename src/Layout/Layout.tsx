import Header from "./Header"
import Footer from "./Footer"
import Display from "./Display"
import Sidebar from "./Sidebar"

import About from "../Pages/About";
import NotFound from "../Pages/NotFound";

import PrivacyPolicy from '../Pages/PrivacyPolicy'
import TermsOfUse from '../Pages/TermsOfUse'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Notifications from "../Utils/Notifications/Notificartions"

function Layout() {
  const [isDark, setIsDark] = useState(true);

  const toggleDisplayMode = () => {
    setIsDark(!isDark);
  }

  const [expandSidebar, setExpandSidebar] = useState(false)

  const toggleSidebar = () => {
    setExpandSidebar(!expandSidebar);
  }

  const [showNotification, setShowNotification] = useState(false)

  const toggleShowNotification = () => {
    setShowNotification(!showNotification);
  }

  const mainDisplayLayout = () => {
    return (
      // Main div with device height and width containing App and Side bar
      <div className="flex flex-row w-screen h-screen">

        <div className={"flex flex-col justify-between w-full object-contain bg-red-600 " + (isDark ? "dark-mode" : "light-mode")}>
          <BrowserRouter>
            <div className="top-0 z-50 shadow object-contain">
              <Header isSidebar={expandSidebar} toggleSidebar={toggleSidebar} toggleNotifications={toggleShowNotification} />
            </div>

            <div className="flex flex-roww-full">
              <div className="flex flex-col justify-between object-contain h-full w-full z-0" >
                <Routes>
                  <Route path="/stepwise/" element={<Display />}></Route>
                  <Route path="/stepwise/about" element={<About />}></Route>

                  <Route path="/stepwise/privacy-policy" element={<PrivacyPolicy />}></Route>
                  <Route path="/stepwise/terms-of-use" element={<TermsOfUse />}></Route>

                  <Route path="/stepwise/*" element={<NotFound />}></Route>
                </Routes>
              </div>
            </div>

            <div className="">
              <Footer />
            </div>
          </BrowserRouter>
        </div>

        <div className="flex flex-col ">
          <div className="right-0" >
            {showNotification ? <Notifications /> : ''}
          </div>
          <div className="right-0 fixed">
            {expandSidebar ? <Sidebar isDark={isDark} toggleMode={toggleDisplayMode} /> : ''}
          </div>
        </div>
      </div>
    )
  }


  return (
    <div className="">
      {false ? <NotFound /> : mainDisplayLayout()}
    </div>
  );
}

export default Layout;
