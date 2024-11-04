export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Wasif's App
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Wasif's App! This App was created by Wasif Ali Khan
              as an Assignment project .Wasif is a passionate developer who loves to write about
              technology, coding, and everything in between.
            </p>

            <p>
              On this App, you'll find 
              • Frontend:
Login Page: Authenticate against the backend and display error messages for
incorrect credentials.
Registration Page: Register new users, ensuring password confirmation.
Dashboard Page: Display a welcome message, last login time, an activity feed, and
a list of friends.
Profile Page: View/update profile details and upload a profile picture.
Notifications: Show notifications for specific events.
Theme System: Allow users to choose themes and implement a dark mode toggle.
</p>
<p>
. Backend:
 - Implemented routes for user registration, login, profile management, and more.
 - Implemented middleware for authentication.
 - Store user information, friend lists, chat messages, activity logs, etc., in the
database.
            </p>

            <p>
            Extended Features:
 - Activity Feed: Display latest user activities with a filtering option.
 - User Roles & Admin Panel: Different roles (e.g., user, admin) with an admin panel for 
site management.
 - Analytics: Display user engagement metrics on the dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}