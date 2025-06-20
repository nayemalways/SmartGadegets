# 💼 <code style="color: cyan">Smart Gadeget</code> full-stack e-commerce application (ongoing)
  A full-stack, complete e-commerce project with a fully functional MERN  technology. This project showcases my skills and experience, demonstrating the expertise I possess. Its frontend mostly used raw **Tailwind** CSS and some of **DaisyUI**.

## Technology Used For:
- Frontend: 
  - Tailwind (CSS Framework)
  - React (JS Library)
  - GSAP (Animation Library)
- Backend: 
    - Node.js
    - Express.js
    - MongoDB
    - JWT (Authentication)
    - Mongoose (For better schema management)
  
 ## Developement Bugs:
 - ***Wrong state changes***: In small devices, I used a pop-up searchbar. Where user's click search icon and an pop-up will open and when click outside of the components the pop-up will close. But I changed the state simutenously false to true and false like **setToggle(prev => !prev)** on outside click instead of **setToggloe(false)**. That's why when I clicked anywhere of the UI, the searchbar was being opend and close also search icon. Set the state only false     
  ``` 
  setToggle(false);
  ```
 
  

