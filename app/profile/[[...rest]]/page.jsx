"use client"; 

import { UserProfile, useUser } from "@clerk/nextjs"; 
import Footer from "../../component/Footer"; 

const ProfilePage = () => {
  const { user, isLoaded, isSignedIn } = useUser(); 

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <section className="flex justify-center items-center min-h-screen">
        <p>You are not signed in. Please sign in to view your profile.</p>
      </section>
    );
  }

  return (
    <>
    
      <div className="flex justify-center items-center min-h-screen bg-teal-500 py-2 rounded-2xl">   
        <section className="bg-white rounded-2xl p-12 w-full max-w-5xl relative flex flex-col space-y-8 border-4 border-teal-500 shadow-lg">
          
          <section className="text-center mb-8">
            <h2 className="text-4xl font-semibold text-teal-600 mb-4">
              Welcome, {user.firstName} {user.lastName}!
            </h2>
            <p className="text-lg text-gray-500">Your pets are happy to have you!</p>
          </section>

          <section className="flex justify-center bg-gray-50 rounded-lg p-6 border-2 border-gray-300">
            <UserProfile />
          </section>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
