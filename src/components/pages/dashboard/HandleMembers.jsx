import React, { useState } from "react";
import { db } from "../../../config/firebase";
import { collection, setDoc, deleteDoc, doc } from "firebase/firestore";

function HandleMembers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assignedId, setAssignedId] = useState("");
  const [removeId, setRemoveId] = useState("");

  const addMember = async () => {
    try {
      // Create a reference to the document with the specified ID
      const memberRef = doc(collection(db, "members"), assignedId);

      // Set the document data without creating an additional id field
      await setDoc(memberRef, {
        name,
        email,
      });

      alert("Member added successfully!");
      setName("");
      setEmail("");
      setAssignedId("");
    } catch (error) {
      console.error("Error adding member: ", error);
      alert("Error adding member!");
    }
  };

  const removeMember = async (e) => {
    e.preventDefault();
    try {
      const memberDoc = doc(db, "members", removeId);
      await deleteDoc(memberDoc);
      alert("Member removed successfully!");
      setRemoveId("");
    } catch (error) {
      console.error("Error removing member: ", error);
      alert("Error removing member!");
    }
  };

  return (
    <div className="mt-10 mb-10 lg:w-[800px] lg:ml-[700px]">
      <h1 className="text-3xl font-bold">Manage Members</h1>
      <div>
        <div className="sm:w-[38rem]  my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:max-w-lg">
          <div className="bg-green-500 px-10 py-10 text-center text-white">
            <h2 className="font-serif text-2xl font-semibold tracking-wider">
              Add Members
            </h2>
          </div>

          <div className="space-y-4 px-8 py-10">
            <label className="block" htmlFor="name">
              <p className="text-gray-600">Name</p>
              <input
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="block" htmlFor="email">
              <p className="text-gray-600">Email Address</p>
              <input
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="block" htmlFor="id">
              <p className="text-gray-600">Assigned ID</p>
              <input
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                type="text"
                placeholder="Enter id format: year-0xxx"
                value={assignedId}
                onChange={(e) => setAssignedId(e.target.value)}
              />
              <p className="text-gray-400 text-sm">
                ID format year-0xxx [x is a number] e.g., 2024-0001, 2024-0123
              </p>
            </label>
            <button
              className="mt-4 rounded-full bg-green-500 px-10 py-2 font-semibold text-white"
              onClick={addMember}
            >
              Add Member
            </button>
          </div>
        </div>
      </div>

      {/* Remove Member Section */}
      <div>
        <h2 className="text-2xl font-bold">Remove Member!</h2>
        <form onSubmit={removeMember} className="mt-5">
          <div className="group relative border border-gray-900 p-1 focus-within:ring-1 focus-within:ring-gray-900 sm:flex-row">
            <input
              type="text"
              name="removeId"
              placeholder="Enter Member ID"
              className="block w-full bg-transparent px-2 py-4 placeholder-gray-900 outline-none"
              required
              value={removeId}
              onChange={(e) => setRemoveId(e.target.value)}
            />
            <div className="flex border-gray-900 sm:absolute sm:inset-y-0 sm:right-0 sm:h-full sm:border-l">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center bg-red-500 px-6 py-3 text-lg font-bold text-white outline-none"
              >
                Remove Member
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HandleMembers;

