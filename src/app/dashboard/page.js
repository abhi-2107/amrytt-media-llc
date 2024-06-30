import users from "@/assets/userProfilesData";
import femaleImg from "@/assets/woman.png";
import maleImg from "@/assets/man.png";
import Image from "next/image";
import Link from "next/link";

function Dashboard() {
  let userKeys = Object.keys(users[0]);
  const USER_KEYS = userKeys.splice(5);
  //   console.log(USER_KEYS);
  return (
    <div className="bg-gradient-to-r from-fuchsia-400/5 to-red-400/5 pb-3 mb-5">
      <div className="flex justify-center items-center m-4 p-2 ">
        <h1 className="font-bold text-2xl mx-auto">Profile Dashboard</h1>
        <Link href="/profile">
          <button className="bg-green-500 hover:bg-green-400 active:scale-95 p-2 rounded-lg m-2 font-medium  float-end ">
            Create Profile
          </button>
        </Link>
      </div>

      <div className="flex flex-col mb-10 ">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      S.No
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    {USER_KEYS.map((user, index) => (
                      <th
                        key={index}
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        {user}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr
                      className={`bg-gray-100 border-b ${
                        (index + 1) % 2 == 0 ? "bg-white" : ""
                      }`}
                      key={index}
                    >
                      <td
                        className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 `}
                      >
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src={
                                user.gender === "Female" ? femaleImg : maleImg
                              }
                              width={100}
                              height={100}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.firstName} {user.lastName}
                            </div>
                            <div className="text-sm text-gray-500">
                              Age: {user.age} | {user.gender}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.hobbies.join()}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.country}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.state}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.city}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
