# image-proccessing-api ==> Udacity Project

simple weather app created with node.js and express.js

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Screenshots](#screenshots)
* [List Of Files](#List-of-files)
* [Lessons Learned](#Lessons-Learned)
* [Setup](#Setup)
* [Environment & Requirements](#Environment-&-Requirements)
* [Installation](#Installation)
* [Running the project](#Running-the-project)
* [Sources & Acknowledgements](#sources-&-Acknowledgements)
* [Contact & Authors](#contact-&-Authors)
* [Feedback](#Feedback)
* [Support](#Support)
* [License](#License)
* [Copyright](#Copyright)



## General Information
- This project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI.


## Technologies Used
**Client:**
- HTML   - HTML5
- CSS    - CSS3 

**Server:** 
- Node -v 16.13.1
- Npm -v 8.3.0
- Express -v 4.17.2
- Typescript -v 4.5.4
- sharp: -v 0.27.2
- dotenv -v 10.0.0
- nodemon -v 2.0.15

**Unit Testing & Formating
- jasmine -v 4.0.2
- supertest -v 6.2.2
- eslint": -v 8.6.0
- prettier": -v 2.5.1

**Middleware
- morgan: v 1.10.0


## Features

- Live previews
- Cross platform
- animated svg icon
- Local server running and producing feedback to the Command Line through a working callback function.


## Screenshots
![Example screenshot](/website/images/ScreenshotWeather.png)


## List of files

📦image processing api\
 ┣ 📂dist\
 ┃ ┣ 📂middleware\
 ┃ ┃ ┣ 📜logger.js\
 ┃ ┃ ┗ 📜urlvalid.js\
 ┃ ┣ 📂routes\
 ┃ ┃ ┗ 📜route.js\
 ┃ ┣ 📂tests\
 ┃ ┃ ┣ 📂helpers\
 ┃ ┃ ┃ ┗ 📜reporter.js\
 ┃ ┃ ┗ 📜index.Spec.js\
 ┃ ┣ 📂utils\
 ┃ ┃ ┣ 📜controller.js\
 ┃ ┃ ┣ 📜imgAvilablitiy.js\
 ┃ ┃ ┗ 📜resizeimg.js\
 ┃ ┗ 📜index.js\
 ┣ 📂images\
 ┃ ┣ 📂thumbnail\
 ┃ ┃ ┣ 📜encenadaport_200_200.jpg\
 ┃ ┃ ┣ 📜fjord_10_990.jpg\
 ┃ ┃ ┣ 📜fjord_1290_890.png\
 ┃ ┃ ┣ 📜fjord_200_200.jpg\
 ┃ ┃ ┣ 📜fjord_null_400.jpg\
 ┃ ┃ ┣ 📜fjord_null_990.jpg\
 ┃ ┃ ┣ 📜icelandwaterfall_200_200.jpg\
 ┃ ┃ ┣ 📜palmtunnel_200_200.jpg\
 ┃ ┃ ┗ 📜santamonica_200_200.jpg\
 ┃ ┣ 📜encenadaport.jpg\
 ┃ ┣ 📜fjord.jpg\
 ┃ ┣ 📜icelandwaterfall.jpg\
 ┃ ┣ 📜palmtunnel.jpg\
 ┃ ┗ 📜santamonica.jpg\
 ┣ 📂public\
 ┃ ┣ 📂css\
 ┃ ┃ ┣ 📜normalize.css\
 ┃ ┃ ┗ 📜style.css\
 ┃ ┣ 📂thumbimg\
 ┃ ┃ ┣ 📜encenadaport_250_250.jpg\
 ┃ ┃ ┣ 📜fjord_250_250.jpg\
 ┃ ┃ ┣ 📜icelandwaterfall_250_250.jpg\
 ┃ ┃ ┣ 📜palmtunnel_250_250.jpg\
 ┃ ┃ ┗ 📜santamonica_250_250.jpg\
 ┃ ┗ 📜index.html\
 ┣ 📂spec\
 ┃ ┗ 📂support\
 ┃ ┃ ┗ 📜jasmine.json\
 ┣ 📂src\
 ┃ ┣ 📂middleware\
 ┃ ┃ ┣ 📜logger.ts\
 ┃ ┃ ┗ 📜urlvalid.ts\
 ┃ ┣ 📂routes\
 ┃ ┃ ┗ 📜route.ts\
 ┃ ┣ 📂tests\
 ┃ ┃ ┣ 📂helpers\
 ┃ ┃ ┃ ┗ 📜reporter.ts\
 ┃ ┃ ┗ 📜index.Spec.ts
 ┃ ┣ 📂utils\
 ┃ ┃ ┣ 📜controller.ts\
 ┃ ┃ ┣ 📜imgAvilablitiy.ts\
 ┃ ┃ ┗ 📜resizeimg.ts\
 ┃ ┗ 📜index.ts\
 ┣ 📜LICENSE.txt\
 ┣ 📜README.md\
 ┣ 📜package-lock.json\
 ┣ 📜package.json\
 ┗ 📜tsconfig.json\


## Lessons Learned

- Create API credentials on OpenWeatherMap.com
- APIs and Routes
- asynchronous function
- setup a Node environment with Express and the necessary project dependencies
- setup a server with GET and POST routes
- use the Fetch API with my credentials 


## Setup
## Environment & Requirements

For development, you will only need Node.js and a node global package, and NPM

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


## Installation
Install my-project with npm
Run Locally

Go to the project directory and open your terminal there then write:

```bash
  cd image-processing-api/
```

1. Install dependencies

```bash
  npm install
```
2. Build

```
    npm run build
```

3. Start the server
## Running the project 
Start the server

```bash
  npm start
```
or 

```bash
  npm run start
```

> Note: Before starting the server from the dist folder using above command.The build command, in this project, only converts ts into js and put them in the dist folder.

## Running the project and other
4. Develop locally

```
    npm run dev
```

5. Run unit tests

```
    npm run test
```

6. Run ESlint and prettier to show linting issues and fix it

```
    npm run lint
```
Run ESlint to fix linting issues 
```
    npm run lintfix
```
Run prettier to formating document
```
    npm run prettier
```

After you successfully run the server, open this URL in your browser and you will see documntaion to use the  project

```
    http://localhost:3000
```

## Sources & Acknowledgements

- [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011?utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=12908932988_c&utm_term=124509202031&utm_keyword=%2Budacity%20%2Bfront%20%2Bend_b&gclid=Cj0KCQiA4b2MBhD2ARIsAIrcB-QbkAFWCf5ecF9ouzvrpuhtkh5Q5IsGm_uLQN6dq2bS5rjPeYz7-UsaApOoEALw_wcB)
 - [Sharp](https://www.npmjs.com/package/sharp)
 - [Sharp Constructor documentation](https://sharp.pixelplumbing.com/api-constructor)
 - [How to write a Good readme](https://bulldogjob.com/news/449-how-to-write-a-good-readme-for-your-github-project)
 - [Processing images with sharp in Node.js](https://blog.logrocket.com/processing-images-sharp-node-js/#setting-up-a-sharp-image-project)
 - [Jasmine-Matchers](https://githubhelp.com/JamieMason/Jasmine-Matchers)
 - [JavaScript Promises: an introduction](https://web.dev/promises/)
 - [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
 - [JavaScript Promises: an introduction](https://web.dev/promises/)
 - [JFetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 - [ Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
 - [Property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
 - [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
 - [Routing](https://expressjs.com/en/guide/routing.html)
 - [How to Easily Update Node.js to the Latest Version](https://www.whitesourcesoftware.com/free-developer-tools/blog/update-node-js/)
 - [Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction )
 - [Routing](https://expressjs.com/en/guide/routing.html)
 - [Node.js](https://nodejs.org/en/)
 - [NPM](https://www.npmjs.com/)
 - [Express](http://expressjs.com/)
 - [Cors](https://www.npmjs.com/package/cors)
 - [Font Awesome](https://fontawesome.com/)



## Contact & Authors
Created by [@Ahmed Sabry](mrsabry134@gmail.com) - feel free to contact me!
- Github [@AhmedSabry70](https://github.com/AhmedSabry70/)
- Linkedin [@Ahmed Sabry](https://www.linkedin.com/in/%D9%90ahmedsabry/)

# Feedback

If you have any feedback, please reach out to us at mrsabry134@gmail.com

## Support

For support, email mrsabry134@gmail.com 

## License

Distributed under the MIT License. See LICENSE for more information.[MIT](/LICENSE.txt)

## Copyright

&copy; http://ahmedsabry.tk, Inc. All rights reserved.
