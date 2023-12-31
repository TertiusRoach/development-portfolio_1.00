# [Development Portfolio](https://tertiusroach.github.io/development-portfolio_1.00/)

Outlined below is my development process, presenting essential details including crucial links, valuable resources, and necessary terminal commands for installing key packages pivotal to optimizing my workflow. These meticulously curated elements serve as the foundation of my development environment, guaranteeing a streamlined and efficient process throughout the entire lifecycle from conception to implementation.

---

<details>
  <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#project-installation">Project Installation</a>
            <ul>
                <li>
                    <a href="#go-to-front-end">Go to Front-end</a>
                </li>
                <li>
                    <a href="#go-to-back-end">Go to Back-end</a>
                </li>
            </ul>
        </li>
    </ol>
</details>

---

## Project Installation

To utilize the command terminals listed below, ensure you have [Node.js](https://nodejs.org/en) installed. I employ [Gulp](https://en.wikipedia.org/wiki/Gulp.js) for seamless task automation, optimizing repetitive processes. [Sass](<https://en.wikipedia.org/wiki/Sass_(style_sheet_language)>) serves as a styling tool, enhancing syntax readability, while [Bootstrap](<https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)>) elevates the visual appeal of the interface. [jQuery](https://en.wikipedia.org/wiki/JQuery) streamlines DOM manipulation, and [TypeScript](https://en.wikipedia.org/wiki/TypeScript) contributes to code scalability, readability, and maintainability. This approach ensures efficiency, flexibility, and a polished user experience in the applications I develop.

> 🠋 Executing this terminal command generates a [package.json](https://nodejs.org/en) file.

    npm init -y

> 🠋 These are the primary [front-end](https://github.com/TertiusRoach/development-portfolio_1.00/tree/main/src/front-end) packages used in this project.

    npm install gulp
    npm install sass
    npm install jquery
    npm install bootstrap
    npm install typescript

> 🠋 These packages constitute the core [back-end](https://github.com/TertiusRoach/development-portfolio_1.00/tree/main/src/back-end) components utilized in this project.

    npm install bcrypt
    npm install express
    npm install mongodb

> 🠋 The [gulpfile.js](https://marketplace.visualstudio.com/items?itemName=nickdodd79.gulptasks) document encodes and transfers development files from source to distribution.

    npm install --save-dev gulp
    npm install --save-dev gulp-sass
    npm install --save-dev gulp-clean
    npm install --save-dev gulp-concat
    npm install --save-dev gulp-uglify
    npm install --save-dev gulp-rename
    npm install --save-dev gulp-htmlmin
    npm install --save-dev gulp-uglifycss
    npm install --save-dev gulp-typescript
    npm install --save-dev gulp-sourcemaps
    npm install --save-dev gulp-delete-file
    npm install --save-dev gulp-append-prepend
    npm install --save-dev gulp-string-replace
    npm install --save-dev gulp-remove-html-comments

> 🠋 These packages are currently optional for development but add value to the process.

    npm install --save-dev nodemon
    npm install --save-dev @types/jquery
    npm install --save-dev @google/clasp

### [Go to Front-end](https://github.com/TertiusRoach/development-portfolio_1.00/tree/main/src/front-end)

Front-end development refers to the practice of creating and implementing the visual and interactive elements of a website or web application that users directly interact with. It involves the use of programming languages such as HTML, CSS, and JavaScript to build the user interface and enhance the overall user experience. Front-end developers focus on designing and developing the layout, structure, and styling of a website, ensuring that it is visually appealing, responsive, and functional across various devices and browsers. They collaborate closely with designers to bring visual concepts to life and with back-end developers to integrate front-end components with server-side logic. Front-end development plays a crucial role in shaping the look and feel of digital products, making them user-friendly and engaging.

### [Go to Back-end](https://github.com/TertiusRoach/development-portfolio_1.00/tree/main/src/back-end)

Back-end development refers to the process of building and maintaining the server-side of a website or web application. It involves designing, implementing, and managing the server, databases, and application logic that enable the functionality and data management of the system. Back-end developers work with server-side languages such as Python, Ruby, PHP, and Java, as well as frameworks like Django, Ruby on Rails, and Laravel. Their primary focus is on ensuring that data is securely stored, retrieved, and processed, and they are responsible for managing server infrastructure, databases, and server-side application code. Back-end development is integral to the overall functionality of a website, handling tasks such as database management, user authentication, and server-side processing, which contribute to the seamless functioning of the entire web application.
