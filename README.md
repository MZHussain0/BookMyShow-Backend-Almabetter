# Project Title

## BMS - Almabetter -[Fullstack Project]

## Demo Link

Access the live site at https://book-my-show-frontend-almabetter.vercel.app/

## GitHub Repositories

FrontEnd Repo: https://github.com/MZHussain0/BookMyShow-Frontend-Almabetter

Backend Repo: https://github.com/MZHussain0/BookMyShow-Backend-Almabetter


## About The App

BMS - almaBetter provides an easy and user-friendly way of booking movie tickets online. It allows users to select their preferred movie, showtime, and seat as per their choice, thereby providing them with a convenient way of booking tickets.

## Screenshots

 ![img1](https://github.com/Shankar2612/BookMyShow-Frontend/assets/37292226/2d00760e-6a6f-42a3-a4b5-f3b07c854f83)
 Normal State
 

 ![img2](https://github.com/Shankar2612/BookMyShow-Frontend/assets/37292226/508a5674-9a21-4a6c-94aa-e6af5bb0a138)
 Interactive State
 
 
 ![img3](https://github.com/Shankar2612/BookMyShow-Frontend/assets/37292226/cbb79785-8ef4-4771-aa89-609f3e6995a6)
 Client-side validation State
 
 
 ![img4](https://github.com/Shankar2612/BookMyShow-Frontend/assets/37292226/90161cc3-8040-4f9f-b5a5-87dd2e80894e)
 Success State
 
 
## Technologies

 - Frontend Techstack - `React`, `Typescript` `Tailwindcss`, `@tanstack/react-Query`, `Axios`, `Vite`, `Shadcn UI`.
   
 - Backend TechStack - `Node`, `Express`, `MongoDB`, `Mongoose`, `MVC Pattern`


## Approach
  - Planning Phase:
      - Wireframing the website's structure and layout.
        
      - Select a color scheme and design elements that align with the brand image.
        
      - Determine the technology stack and tools needed to build the website.

  - Development Phase:
      - Install the necessary dependencies and set up the local dev environment.
        
      - Backend Dev:
          - Designed a schema for the required use case.
            
          - Developed the controllers and routes for APIs : `POST` `/api/booking` & `GET` `/api/booking`.
            
          - Created the mongoDb instance and connected it to the application.
            
          - Deployed the backend on `render.com` and made it communicate with the frontend app.
            
      - Frontend Dev:
          - Set up the React app using `Vite`, `TailwindCss`, and `Typescript`. Integrated `Shadcn UI` for reusable components.
            
          - Set up the global persistent store with `Zustand`. Zustand store will persist the movies, slots, and seats in global states using Zustand middleware `PersistStorage` through refreshes.
            
          - Client-side validation and data fetching with the help of `@tanstack/react-query` and `Axios`. Integrating loading state, success state, and error state using `@tanstack/react-query`
            
          - After testing the application thoroughly, deployed it on Vercel.


  ## Installation and Setup

  Clone down this repository. You will need `node` and `npm` installed globally on your machine.

  Installation:
  
  `npm install`
  
  To Start Server:
  
  `npm run dev`
  
  To Visit App:
  
  `localhost:5173/`
