import React from "react";

function HandleMembers() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-3xl font-bold">Manage Members</h1>
      <div>
        
        <div class="sm:w-[38rem] mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
          <div class="bg-green-500 px-10 py-10 text-center text-white">
            <p class="font-serif text-2xl font-semibold tracking-wider">
            <h2>add Members</h2>
            </p>
          </div>

          <div class="space-y-4 px-8 py-10">
            <label class="block" for="name">
              <p class="text-gray-600">Name</p>
              <input
                class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Enter your name"
              />
            </label>
            <label class="block" for="name">
              <p class="text-gray-600">Email Address</p>
              <input
                class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="email"
                placeholder="Enter your email"
              />
            </label>
            <label class="block" for="name">
              <p class="text-gray-600">assigned-id</p>
              <input
                class="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="email"
                placeholder="Enter id format : year-0xxx "
              />
              
            </label>
            <button class="mt-4 rounded-full bg-green-500 px-10 py-2 font-semibold text-white">
              add member
            </button>
          </div>
        </div>
      </div>

      {/* remove */}
      <div>
        <h2 className="text-2xl font-bold">remove Member!</h2>
        <form action="#" method="POST" class="mt-5">
          <div class="group relative border border-gray-900 p-1 focus-within:ring-1 focus-within:ring-gray-900 sm:flex-row">
            <input
              type="email"
              name=""
              placeholder="Enter Member-id"
              class="block  w-full bg-transparent px-2 py-4 placeholder-gray-900 outline-none"
              required=""
            />
            <div class="flex border-gray-900 sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:border-l">
              <button
                type="submit"
                class="inline-flex w-full items-center justify-center bg-red-500 px-6 py-3 text-lg font-bold text-white outline-none"
              >remove Member
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HandleMembers;
