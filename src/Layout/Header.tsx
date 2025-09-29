import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type headerProps = {
  isSidebar: Boolean;
  toggleSidebar: () => void;
  toggleNotifications: () => void;
}

const Header = ({ isSidebar, toggleSidebar }: headerProps) => {
  const nav = useNavigate()
  const load_app = (applink: string) => {
    nav(applink)
  }

  useEffect(() => { }, []);


  return (
    <div className={`${true ? 'block' : 'hidden'} border-4 border-gray-400 bg-[#cecdcd] px-4 py-2 w-full flex justify-between items-center shadow-2xl rounded-b-2xl transition-opacity duration-100`}>
      <div className={`flex justify-center items-center`} onClick={() => { load_app('/stepwise/') }}>
        <p className='text-5xl m-1 font-bold text-amber-600 text-stroke-gray'> Stepwise</p>
      </div>

      <div>
        <div className="block sm:hidden">
          Mobile Nav bar
        </div>

        <div className="sm:flex sm:flex-row">
          <button className='m-1 p-2 text-2xl hover:bg-amber-600 rounded-xl' onClick={() => { toggleSidebar() }}>
            {isSidebar ? <FontAwesomeIcon icon={faClose} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
