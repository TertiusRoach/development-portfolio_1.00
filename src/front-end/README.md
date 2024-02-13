# [Front-end Documentation](https://github.com/TertiusRoach/development-portfolio_2.00)

This directory functions as the [User Interface](https://en.wikipedia.org/wiki/User_interface) component of the application. The purpose of this documentation is to offer a detailed insight into the organization of files and folders, with the goal of promoting clarity to support smooth scalability in projects. The structure is meticulously crafted to reduce the chances of introducing errors in the code. Files are arranged strategically to minimize unnecessary code and ensure a clear understanding of each document's role. The categorization of files is designed to be intuitive, making it easier for both novice and experienced developers to comprehend, particularly as the project's complexity grows.

---

<details>
  <summary>Table of Contents</summary>
    <ol>
        <li>
            <a href="#pages-directory">Pages Directory</a>
            <ul>
                <li>
                    <a href="#designing">Designing</a>
                </li>
                <li>
                    <a href="#content">Content</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#utilities-folder">Utilities Folder</a>
            <ul>
               <li>
                    <a href="#tools-folder">Tools Folder</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#vendors-folder">Vendors Folder</a>
        </li>
        <li>
            <a href="#subject-here">Subject Here</a>
        </li>
        <li>
            <a href="#my-checklist">My Checklist</a>
        </li>
    </ol>
</details>

---

## Pages Directory

This specifically concerns the [front-end](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end) structure. The [page directory](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages) is at the heart of front-end functionality, and the [index](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index) folder serves as the default testing location. Crafted with meticulous attention to detail, this document prioritizes clear navigation and delivers comprehensive references for each file format, contributing to heightened efficiency and quality in the front-end development process. The process starts with the [index.html](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/index/index.html) file situated in the pages folder which is linked to the [front-end.js](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/front-end.js) document. The **index.html** file you work on is duplicated using **Gulp** to make the [online page](https://tertiusroach.github.io/development-portfolio_2.00/) location look more professional by putting it in the root directory: Keep that in mind when linking the files. The **front-end.js** document uses [RequireJS](https://requirejs.org/) to load modules. I want to upgrade to [webpack](https://webpack.js.org/) but I'm honestly to lazy when it comes to figuring out how to restructure and use it, for now, will get to it if some sort of emergency makes the former module loader obsolete.

---

## Utilities Directory

[Main.ts](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/utilities/Main.ts) which calls the first page.

---

### Designing

Named [override-bootstrap.scss](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/override-bootstrap.scss), this Sass file serves as a comprehensive override mechanism within the Bootstrap framework, facilitating the customization of targeted designs. Leveraging an established foundational structure, it offers flexibility by allowing the modification of default values. The decision to employ Bootstrap is driven by its adept handling of text scaling for various resolutions, a challenge the framework has successfully tackled over the years. Utilizing Bootstrap eliminates the need to reinvent the wheel with another CSS framework, given its effective resolution-related problem-solving.

In addition, there's another [Sass file](https://github.com/TertiusRoach/development-portfolio_2.00/blob/main/src/front-end/pages/index/index.scss) tailored specifically for individual pages, applying styles exclusively to the page it occupies. This file encapsulates default values for a company's registered colors and logos, operating within a non-global scope. It also defines defaults for CSS margins and padding on HTML elements, typically initialized to zero. This meticulous initialization ensures that modifications adhere to the unique design requirements of each specific page without impacting the entire portfolio.

> 🠋 default-body.scss

Dedicated to grid placements for child elements. The rest is a combination of CSS flexbox and CSS Grid.

### Content

Within the [~content](https://github.com/TertiusRoach/development-portfolio_2.00/tree/main/src/front-end/pages/index/~content) directory is a repository designed to empower designers. The tilde (~) prefix at the beginning of the folder signifies its nature, expanding beyond front-end development into the field of graphics. This interdisciplinary approach requires additional proficiency, covering skills from image manipulation to visual effects and drawing. Displayed below are various graphical files, including ico, gif, svg, jpg, png, mp3, psd, and mp4, stored in this location. Each format contributes to a specific purpose, shaping the ultimate outcome of the final page.

> 🠋 ICO Files

Placeholder Resolution = **256x256**: Ideal for small graphical representations, typically used as website or application icons.

> 🠋 GIF Files

Placeholder Resolution = **500x500**: Suited for simple animations, logos, and images with limited colors, providing a lightweight solution.

> 🠋 SVG Files

Placeholder Resolution = **500x500**: Perfect for scalable graphics, such as logos and icons, as it maintains clarity at various sizes without loss of quality.

> 🠋 JPG Files

Placeholder Resolution = **1280x720 (720p)**: Well-suited for photographs and images with complex details, balancing quality and compression for efficient storage.

> 🠋 PNG Files

Placeholder Resolution = **3840x2160 (2160p)**: Well-suited for images requiring transparency and sharp details, commonly used for web graphics and logos.

> 🠋 MP4 Files

Placeholder Specifications = **1920x1080 (1080p)**: Excellent for video content, supporting high-quality compression with broad compatibility across platforms. I usually set my videos to 25 frames per second.

---

## Vendors Folder

Description Here

---

## Subject Here

Description Here

---

## My Checklist

- [x] Get Gulp to work
- [x] Copy HTML with Gulp
- [x] Compile SASS to CSS with Gulp
- [x] Combine Bootstrap with Stylesheet using Gulp
- [x] Compile TypeScript with Gulp
- [x] Implement RequireJS with Gulp
- [x] Re-organize Utilities to import everything in index.js
- [x] Create Scalable sections that are pixel perfect inside default-main
- [x] Animate "Tertius Roach" logo for loading screen
- [ ] Build [Résumé](https://www.youtube.com/watch?v=sQoiM7i5Nqc&list=PLejxfgwRYhwC0ffw3dtP-p-lKD2mYkD2r&index=1&t=128s): `<script>` = resume

- [ ] Place each element inside default-body.html
- [ ] Animate each element inside global-styling.scss

---

[Design Syntax](https://www.compart.com/en/unicode/block/U+25A0)
[🠉](https://www.compart.com/en/unicode/U+1F809)
[🠊](https://www.compart.com/en/unicode/U+1F80A)
[🠋](https://www.compart.com/en/unicode/U+1F80B)
[🠈](https://www.compart.com/en/unicode/U+1F808)

---
