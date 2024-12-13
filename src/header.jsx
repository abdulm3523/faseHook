import { Link } from "react-router-dom";
import HomeIcon from "./assets/icons/home.svg";
import NotificationIcon from "./assets/icons/notification.svg";
import Avatars from "./assets/images/avatars/avatar_1.png";
import Logo from "./assets/images/logo.svg";
import Logout from "./components/auth/logout";
import useAuth from "./hooks/useAuth";

const Header = () => {
  const { auth } = useAuth();
  return (
    <nav class="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
      <div class="container flex flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/">
          <img class="max-w-[100px] rounded-full lg:max-w-[130px]" src={Logo} />
        </Link>

        <div class="flex items-center space-x-4">
          <Link to="/" class="btn-primary">
            <img src={HomeIcon} alt="Home" />
            Home
          </Link>
          <button class="icon-btn">
            <img src={NotificationIcon} alt="Notification" />
          </button>
          <Logout />

          <Link to={"/me/abdul"} class="flex-center !ml-8 gap-3">
            <span class="text-lg font-medium lg:text-xl">
              {/* {console.log(auth)} */}
              {console.log(auth?.user?.firstName)}
            </span>
            <img
              class="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
              src={Avatars}
              alt=""
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
