Pet Lovers' Paradise Website:
Developing the Pet Lovers' Paradise website was an exciting journey that involved both challenges and valuable learning experiences. Our primary goal was to create a platform where pet lovers could easily adopt pets and access services like grooming, veterinary care, and caregiving, all while ensuring a user-friendly design and seamless user registration and sign-in authentication.

We chose Clerk for authentication, which simplified the implementation of secure sign-ups, sign-ins, and profile updates. We used Next.js for its performance and Tailwind CSS for its ability to create responsive, customizable designs. Initially, we faced challenges integrating the Clerk, particularly in determining the best way to use it for user registration and ensuring proper routing to protected pages. Through this process, we learned that in addition to email and password fields, we could also add first and last name fields to the registration process. This allowed us to display the user’s name in our welcome phrase. We also learned how to set up middleware to handle protected routes, ensuring that only authenticated users could access restricted pages. During this process, we encountered issues like 404 errors (Page Not Found) and routing issues but worked through them to ensure proper access control.

We also prioritized making the website responsive across devices, using Tailwind CSS to ensure that it looked great on mobile, tablet, and desktop.

Throughout development, the main challenges we encountered were integrating third-party tools and troubleshooting authentication issues. Additionally, we prepared the "Book Now" and "Submit" buttons for future functionality, though they are not a priority at this stage. Through continuous testing and refinement, we overcame these obstacles and ensured the site functioned smoothly.

Once the website was built, we conducted thorough testing to evaluate functionality, responsiveness, and user experience. Based on the test results we made adjustments to further improve both design and functionality.

Setup:
1. Clone the repository
    git clone https://github.com/Group2cprga/pet_lovers_paradise.git
2. Install dependencies
    npm install
3. Start the app with:
    npm run dev
4. Go to http://localhost:3000 in your browser to view the site.

To view the live website go to below link:
Live website link: https://pet-lovers-paradise.onrender.com/


Folder Structure: 
/pets-website
    /app
        /about
            page.jsx
        /component
            Footer.jsx
            header.jsx
            NavBar.jsx
        /contact
            page.jsx
        /dashboard
            page.jsx
        /profile
            [[...rest]]
                page.jsx
        /sign-in
            [[...sign-in]]
                page.jsx
        /sign-up
            [[...sign-up]]
                pages.jsx
    /public
        /assets
            cat.jpg
            cat2.jpg
            dog.jpg
            dog2.jpg
            grooming.jpg
            petcaregiver.jpg
            rabbit.jpg
            rabbit2.jpg
            veterinary.jpg
    globals.css
    layout.tsx
    page.tsx

Technologies Used:
Next.js (React framework)
Tailwind CSS (CSS framework)
Clerk (Authentication SDK)
JavaScript (Programming language)

Functionality:
1. The platform allows users to sign up with field validation and authentication.
2. Users can sign in and sign out with proper validation.
3. Users have the option to update their profile information.
4. Users can browse available pets for adoption, including details such as the pet's name and personality traits.
5. The platform provides information on pet services like Pet Grooming, Veterinary Care, and Pet Caregiving, complete with descriptions and images.
6. A "Book Now" button is available for services, although its functionality will be enhanced at a later stage.
7. There is an About page and a Contact page, which allows users to submit feedback, although the submit functionality is planned for future implementation.
8. All users including users who haven't signed up can access public pages like the main, about, and contact pages, while the profile and dashboard (Information of pets for adoption and services) are restricted to signed-in users.
9. The platform is designed to be mobile, tablet, and desktop-friendly for a seamless experience across devices.

Testing Instructions
1. Test the sign-up process by entering valid and invalid data in the required fields.
2. Ensure that proper validation occurs for required fields (First name, Last name, email, password) and that errors are shown for invalid input.
3. Verify that a new user is successfully created upon valid submission and verification as well as directed to dashboard page.
4. Test the sign-in process using valid credentials to ensure that the user is authenticated.
5. Test with invalid credentials to confirm that proper error messages are displayed.
6. Ensure that once signed in, the user can sign out successfully by clicking the profile image and choosing sign-out from the menu.
7. Test the profile update functionality by changing user information and verify that changes are saved correctly and that the updated data is displayed upon login.
8. Verify that users can browse the available pets for adoption and services with images and information.
9. Test to ensure that all users including users who haven't signed up can access public pages (main, about, contact).
10. Test to verify that only signed-in users can access the profile and dashboard (containing information about pets for adoption and services).
11. Test to ensure that users who are not signed in but attempt to access the dashboard (containing information about pets for adoption and services) will be prompted to sign in and redirected to the sign-in page.
12. Test the platform on various devices (mobile, tablet, and desktop) to ensure the layout and content adapt properly to different screen sizes.
