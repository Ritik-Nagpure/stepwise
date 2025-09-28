import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSun, faMoon, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

type SidebarProps = {
  isDark: boolean;
  toggleMode: () => void;
  expandSidebar: boolean;
};

const Sidebar = ({ isDark, toggleMode, expandSidebar }: SidebarProps) => {
  const menuItems = [
    { icon: faHome, label: 'Home' },
    { icon: faUser, label: 'Profile' },
    { icon: faCog, label: 'Settings' },
  ];

  return (
    <div
      className={`flex flex-col border-4 border-gray-400 bg-[#cecdcd] shadow-xl shadow-gray-950 rounded-xl h-full py-4 px-2 mx-0.5 shadow-2xl transition-all duration-300 ${expandSidebar ? 'w-56' : 'w-16'}`}    >

      <div className="flex flex-col gap-4">
        {/* Toggle + Notification */}
        <div className="flex items-center hover:bg-amber-600 p-2 rounded-lg cursor-pointer">

          <p className="" onClick={toggleMode}>
            <FontAwesomeIcon className="text-xl" icon={isDark ? faMoon : faSun} />
          </p>
          {expandSidebar && (<span className="ml-3 text-lg font-semibold">Toggle Mode</span>)}
        </div>

        <div className="flex items-center hover:bg-amber-600 p-2 rounded-lg cursor-pointer">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          {expandSidebar && (<span className="ml-3 text-lg font-semibold">Notifications</span>)}
        </div>

        {/* Menu Items */}

        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center hover:bg-amber-600 p-2 rounded-lg cursor-pointer"
          >
            <FontAwesomeIcon icon={item.icon} className="text-xl" />
            {expandSidebar && (
              <span className="ml-3 text-lg font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
