import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/client";

function Navbar() {
  const [session] = useSession();

  return (
    <header className="w-full border-t-4 border-fuschia-500">
      <div className="max-w-3xl mx-auto flex justify-between items-center py-6">
        <div>
          <h2 className="text-xl text-gray-600 font-bold">Next-Auth</h2>
        </div>

        <div className="flex justify-center items-center">
          <span className=" text-gray-500 font-semibold mr-7 hover:text-gray-600">
            <Link href="/">
              <a>Home</a>
            </Link>
          </span>
          <span className=" text-gray-500 font-semibold mr-7 hover:text-gray-600">
            <Link href="/feed">
              <a>Feed</a>
            </Link>
          </span>
          {!session && (
            <Link href="/auth/signin">
              <a>
                <button className="py-2 px-6 bg-gray-900 text-white font-semibold border rounded-md hover:bg-gray-700">
                  Sign In
                </button>
              </a>
            </Link>
          )}
          {session && (
            <Link href="/user/profile" passHref>
              <Image
                src={session?.user?.image}
                alt={session?.user?.name}
                width={32}
                height={32}
                className="rounded-full cursor-pointer"
              />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
