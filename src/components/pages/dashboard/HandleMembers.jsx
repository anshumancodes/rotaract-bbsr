import React, { useState, useEffect } from "react";
import { db } from "../../../config/firebase";
import { collection, setDoc, deleteDoc, doc, getDocs } from "firebase/firestore";

function HandleMembers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [assignedId, setAssignedId] = useState("");
  const [removeId, setRemoveId] = useState("");
  const [members, setMembers] = useState([]);

  // Fetch members from Firestore
  const fetchMembers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "members"));
      const membersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMembers(membersData);
    } catch (error) {
      console.error("Error fetching members: ", error);
      alert("Error fetching members!");
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const addMember = async () => {
    try {
      const memberRef = doc(collection(db, "members"), assignedId);
      await setDoc(memberRef, { name, email });
      alert("Member added successfully!");
      setName("");
      setEmail("");
      setAssignedId("");
      fetchMembers(); // Refresh members list
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
      fetchMembers(); // Refresh members list
    } catch (error) {
      console.error("Error removing member: ", error);
      alert("Error removing member!");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-[820px]">
      <h1 className="text-4xl font-bold text-center mb-10">Manage Members</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Members Section */}
        <div className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add Member</h2>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter member's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter member's email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="id" className="block text-gray-600 mb-1">
                Assigned ID
              </label>
              <input
                id="id"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter ID (e.g., 2024-0001)"
                value={assignedId}
                onChange={(e) => setAssignedId(e.target.value)}
              />
              <p className="text-sm text-gray-400 mt-1">
                ID format: year-0xxx [e.g., 2024-0001]
              </p>
            </div>

            <button
              onClick={addMember}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Member
            </button>
          </div>
        </div>

        {/* Members List Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Members List</h2>
          <h2>Total Members: {members.length}</h2>

          <div className="h-[300px] overflow-y-auto space-y-4">
            {members.length > 0 ? (
              members.map((member) => (
                <div
                  key={member.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <div>
                    <p className="font-semibold text-gray-700">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.email}</p>
                  </div>
                  <p className="text-sm font-mono text-gray-500">{member.id}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No members found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Remove Member Section */}
      <div className="mt-12 bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Remove Member</h2>

        <form onSubmit={removeMember} className="space-y-6">
          <div>
            <label htmlFor="removeId" className="block text-gray-600 mb-1">
              Member ID
            </label>
            <input
              id="removeId"
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter member ID"
              required
              value={removeId}
              onChange={(e) => setRemoveId(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Remove Member
          </button>
        </form>
      </div>
    </div>
  );
}

export default HandleMembers;


