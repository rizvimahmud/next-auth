import { useSession } from "next-auth/client";
import { useState } from "react";

import { updateInformation } from "@lib/data";

function UpdateProfile({ setShowModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [session] = useSession();

  const onModalClose = (e) => {
    if (e.target.classList.contains("modal")) {
      setShowModal(false);
    }
  };

  const onAddInfo = (e) => {
    e.preventDefault();
    const info = {
      name: name || session?.user?.name,
      email: email || session?.user?.email,
    };
    const id = session?.user?.id;

    updateInformation(info, id)
      .then(() => setShowModal(false))
      .catch((err) => setError(err.message));
  };

  const isDisbled = name.length < 1 && email.length < 1;

  return (
    <div
      className="absolute w-full h-full top-0 left-0 bg-black bg-opacity-50 flex justify-center items-center modal"
      onClick={onModalClose}
    >
      <div className="bg-gray-200 w-6/12  p-12 rounded-md">
        {error && <div className="text-red-600 text-center">{error}</div>}
        <form className="flex flex-col space-y-8 justify-center items-center">
          <div>
            <h3 className="text-gray-900 text-2xl font-bold">Update Profile</h3>
          </div>
          <div className="w-6/12 h-[1px] bg-gray-300"></div>
          <input
            type="text"
            className=" p-3 w-full rounded-md outline-none border border-gray-400 focus:outline-none focus:ring-2 ring-inset text-gray-700"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className=" p-3 w-full rounded-md outline-none border border-gray-400 focus:outline-none focus:ring-2 ring-inset text-gray-700"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="px-5 py-2 w-2/5 bg-gray-900 text-gray-100 rounded-md text-lg hover:bg-gray-700 disabled:bg-gray-400"
            type="submit"
            disabled={isDisbled}
            onClick={onAddInfo}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
