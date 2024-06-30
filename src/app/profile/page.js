"use client";

import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div className="grid  place-items-center ">
      <div className="w-11/12 p-5 my-8  bg-white sm:w-8/12 md:w-1/2 lg:w-5/12 border rounded-md">
        <h1 className="text-xl font-semibold">Create a User Profile</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-3">
            <span className="w-1/2">
              <label
                for="firstname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Firstname
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                placeholder="Abhishek"
                className="block w-full p-3 mt-2 text-gray-700 border rounded-lg appearance-none focus:outline-none  focus:shadow-inner"
              />
            </span>
            <span className="w-1/2">
              <label
                for="lastname"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Lastname
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                placeholder="Panchal"
                className="block w-full p-3 mt-2 text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-inner"
              />
            </span>
          </div>
          <div className="flex justify-between gap-3 mt-5">
            <span className="w-1/3">
              <label
                for="age"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Age
              </label>
              <input
                id="age"
                type="number"
                name="firstname"
                placeholder="25"
                className="block w-full p-3 mt-2 text-gray-700 border rounded-lg appearance-none focus:outline-none  focus:shadow-inner"
              />
            </span>
            <span className="w-1/3">
              <label
                for="gender"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Gender
              </label>
              <input
                id="gender"
                type="text"
                placeholder="male"
                className="block w-full p-3 mt-2 text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-inner"
              />
            </span>
            <span className="w-1/3">
              <label
                for="hobbies"
                className="block text-xs font-semibold text-gray-600 uppercase"
              >
                Hobbies
              </label>
              <input
                id="hobbies"
                type="text"
                placeholder="sports,painting"
                className="block w-full p-3 mt-2 text-gray-700 border rounded-lg appearance-none focus:outline-none focus:shadow-inner"
              />
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-6 font-extrabold rounded-lg tracking-widest text-white uppercase bg-emerald-700 shadow-lg focus:outline-none hover:bg-emerald-600 hover:shadow-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
