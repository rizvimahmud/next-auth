import Layout from "@components/Layout";
import Image from "next/image";
import { useSession } from "next-auth/client";
import UpdateProfile from "@components/UpdateProfile";
import { useState } from "react";

function UserProfile() {
  const [session] = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative h-screen">
      <Layout>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center space-y-6 w-2/5 mt-16 p-6 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex justify-center items-center p-2 rounded-full bg-white border-4 border-gray-300">
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              )}
            </div>
            <div>
              <p className="text-gray-600 text-xl font-semibold">
                {session?.user.name}
              </p>
            </div>
            <div>
              <p className="text-gray-500 ">{session?.user?.email}</p>
            </div>
            <div>
              <button
                className="px-3 py-2 bg-gray-900 text-gray-100 rounded-md text-xs hover:bg-gray-700"
                onClick={() => setShowModal(true)}
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </Layout>
      {showModal && <UpdateProfile setShowModal={setShowModal} />}
    </div>
  );
}

export default UserProfile;
