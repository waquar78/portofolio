import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="text-lg">
          Hello, I'm <span className="text-green-600 font-semibold">Waquar Ahmed</span>,
          a passionate and dedicated Full-Stack Web Developer specializing in the{" "}
          <span className="font-semibold">MERN Stack (MongoDB, Express.js, React.js, Node.js)</span>.
          With a solid foundation in Computer Science and a deep enthusiasm for building impactful, scalable, and user-friendly web applications,
          I strive to deliver high-quality solutions that solve real-world problems.
        </p>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          🎓 Education & Training
        </h1>
        <span className="block mt-2">
          B.Tech in Computer Science, [SherShah engineering college], [2025]
          <br />
          MERN Stack Specialization
          <br />
          React & Redux Toolkit Mastery
        </span>

        <br />
        <h1 className="text-green-600 font-semibold text-xl mt-5">
          💻 Skills & Expertise
        </h1>
        <span className="block mt-2">
          ✅ Proficient in: JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB
          <br />
          ✅ Frontend: React, Redux Toolkit, Tailwind CSS, Vite, Socket.IO (for real-time apps)
          <br />
          ✅ Backend: Node.js, Express.js, MongoDB, JWT Auth, Cloudinary (Image Upload), REST API Design
          <br />
          ✅ Dev Tools: Git, Postman, VS Code, Render/Netlify Hosting
          <br />
          ✅ Strong problem-solving, debugging and clean code practices
        </span>

        <br />
        <h1 className="text-green-600 font-semibold text-xl mt-5">
          🧑‍💻 Professional Projects
        </h1>
        <span className="block mt-2">
          📌 Full-Stack E-commerce Platform (MERN)
          <br />
          ➝ Complete user authentication (JWT), product management, seller dashboard, wishlist, cart & order management
          <br />
          📌 Real-time Chat Application (MERN + Socket.IO)
          <br />
          ➝ Live messaging, unread message badge, typing indicator, online status, notifications
          <br />
          📌 Learning Management System (LMS) (MERN)
          <br />
          ➝ User & Admin authentication, course upload, video streaming, protected routes, and progress tracking
          <br />
          📌 Portfolio Website (React + Tailwind)
          <br />
          ➝ Showcasing personal projects, skills & experience
        </span>


        <br />
        <h1 className="text-green-600 font-semibold text-xl mt-5">
          🏆 Achievements & Recognition
        </h1>
        <span className="block mt-2">
          ⭐ Completed multiple full-fledged MERN projects in under tight deadlines
          <br />
          ⭐ Consistently appreciated for clean, scalable and production-ready code
          <br />
          ⭐ Developed and deployed real-time chat & E-commerce platform from scratch independently
        </span>

        <br />
        <h1 className="text-green-600 font-semibold text-xl mt-5">
          🎯 Mission Statement
        </h1>
        <p className="mt-2">
          My mission is to leverage my technical skills and creativity to deliver
          innovative, user-friendly, and scalable digital solutions that empower
          businesses and improve user experience. I am committed to continuous learning,
          staying updated with the latest tech trends, and embracing new challenges to
          refine my craft and contribute meaningfully to the tech community.
        </p>
      </div>
    </div>
  );
}

export default About;
