import { useState } from "react";
import editIcon from "../../assets/icons/edit.svg";
import checkIcon from "../../assets/icons/check.svg";
import { useProfile } from "../../hooks/useProfile";
import api from "../../api/api";
import { actions } from "../../actions";
export const Bio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  // Handel save bio
  console.log(state?.user?.id);
  const handelOnSave = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bioText }
      );

      // handel success status
      if (response.status === 200) {
        console.log(response.data);
        dispatch({ type: actions.profile.DATA_EDIT, date: response.data });
      }
      setEditMode(false);
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCHING_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          {editMode && (
            <textarea
              onChange={(e) => setBio(e.target.value)}
              name="bio"
              value={bio}
              id=""
              cols={60}
              rows={5}
              className="w-full border-blue-100 leading-[188%] bg-transparent p-4 text-gray-900 lg:text-lg rounded-md"
            ></textarea>
          )}
          {!editMode && (
            <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
          )}
        </div>

        {!editMode && (
          <button
            onClick={() => setEditMode(true)}
            className="flex-center h-7 w-7 rounded-full"
          >
            <img src={editIcon} alt="Edit" />
          </button>
        )}
        {editMode && (
          <button
            onClick={handelOnSave}
            className="flex-center h-7 w-7 rounded-full"
          >
            <img src={checkIcon} alt="Check" />
          </button>
        )}
      </div>
    </>
  );
};
