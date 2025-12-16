# 🏙️ CityPortal

## 🌟 Project Purpose

This project, **CityPortal**, was developed as an assessment to demonstrate our skills in building a full-stack, multi-role web application for public infrastructure issue reporting and management.

## 🔗 Live Application URL

You can access the live version of the application here:

[https://public-infrastructure-issue-reporti.vercel.app/](https://public-infrastructure-issue-reporti.vercel.app/)

## ✨ Key Features

CityPortal is designed to streamline the process of reporting and resolving public infrastructure issues by utilizing a robust **three-role system**: Citizen, Staff, and Admin.

- **👥 Multi-Role System:**
  - **Citizen:** Can create an account and submit issue reports. Users can submit up to **3 issues** if they are not subscribed to a premium plan.
  - **Staff:** Can review issues submitted by citizens and update the status of these issues (e.g., _Pending_, _In Progress_, _Resolved_).
  - **Admin:** Has the highest level of access, including the ability to assign reported issues to specific staff members and create new staff profiles.

- **📝 Issue Submission & Tracking:** Citizens can easily log issues, which are then routed through the system for staff review and eventual resolution.
- **⬆️ Status Updates:** Staff can efficiently manage the reported issues by updating their status, providing transparency to citizens and administrators.
- **🧑‍💻 User Management:** Admins can manage staff profiles and ensure issues are appropriately distributed.

## 📦 Tech Stack & Packages

The following essential npm packages were used in this project to enhance functionality, performance, and user experience.

### Dependencies

| Package Name                    | Purpose / Functionality                                                           |
| :------------------------------ | :-------------------------------------------------------------------------------- |
| **@tanstack/react-query**       | Data fetching, caching, and state management.                                     |
| **axios**                       | Promise-based HTTP client for making API requests.                                |
| **date-fns**                    | Utility library for manipulating and formatting dates.                            |
| **firebase**                    | Backend services for authentication, database, and hosting.                       |
| **jspdf** / **jspdf-autotable** | Used for client-side generation and downloading of PDF reports/tables.            |
| **kitzo**                       | Used for toast messages                                                           |
| **lucide-react**                | A set of beautiful and consistent open-source icons for React.                    |
| **motion**                      | Advanced animation library (likely Framer Motion) for smooth UI transitions.      |
| **react** / **react-dom**       | Core libraries for building the user interface.                                   |
| **react-hook-form**             | High-performance, flexible form validation with easy-to-use hooks.                |
| **react-icons**                 | A collection of popular icon sets for React.                                      |
| **react-responsive-carousel**   | A responsive, touch-friendly carousel component.                                  |
| **react-router**                | Declarative routing for React applications.                                       |
| **recharts**                    | Composable charting library built with React and D3.                              |
| **sweetalert2**                 | Beautiful, customizable, and responsive replacement for JavaScript's popup boxes. |
| **swiper**                      | Modern, mobile-first touch slider.                                                |
