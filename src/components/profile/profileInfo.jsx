import { useProfile } from "../../hooks/useProfile";
import { ProfileImage } from "./profileImage";
import { Bio } from "./bio";

export const ProfileInfo = () => {
  const { state } = useProfile();
  return (
    <>
      <div className="flex flex-col items-center py-8 text-center">
        <ProfileImage />

        <div>
          <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
            {`${state?.user?.firstName} ${state?.user?.lastName}`}
            {console.log("user", state?.user)}
          </h3>
          <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
        </div>

        <Bio />
        <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
      </div>
    </>
  );
};
