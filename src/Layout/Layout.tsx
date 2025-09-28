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
      <div className="flex flex-col w-full h-screen justify-start ">
        <BrowserRouter>

          <div className="fixed top-0 left-0 w-full z-50">
            <Header isSidebar={expandSidebar} toggleSidebar={toggleSidebar} toggleNotifications={toggleShowNotification} />
          </div>

          <div className="flex flex-1 flex-row w-full overflow-visible ">

            <div className={`flex flex-col flex-grow overflow-y-auto mx-2 w-full mt-24 mb-10 rounded-lg h-[calc(100vh-4rem)] ${isDark ? "dark-mode" : "light-mode"} ${expandSidebar ? 'mr-60' : 'mr-20'}`}>
              
              <div className="rounded-lg" >  
                <Routes>
                  <Route path="/stepwise/" element={<Display />}></Route>
                  <Route path="/stepwise/about" element={<About />}></Route>

                  <Route path="/stepwise/privacy-policy" element={<PrivacyPolicy />}></Route>
                  <Route path="/stepwise/terms-of-use" element={<TermsOfUse />}></Route>

                  <Route path="/stepwise/*" element={<NotFound />}></Route>
                </Routes>
              </div>

              <div className="mb-12 py-1 ">
                <Footer />
              </div>
            </div>
            
            <div className={`fixed top-20 right-2 h-[calc(100vh-4rem)] ${expandSidebar ? 'w-56' : 'w-16'} z-50`}>
              <Sidebar isDark={isDark} toggleMode={toggleDisplayMode} expandSidebar={expandSidebar} />
            </div>

          </div>
        </BrowserRouter>
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
