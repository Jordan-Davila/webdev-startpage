<!-- PROJECT SHIELDS -->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Web-Dev Custom Start Page</h3>

  <p align="center">
    An awesome minimalist custom browser Start Page for Web Developers. Designed for Palenight Theme users.
    <br />
    <br />
    ·
    <a href="https://github.com/Jordan-Davila/webdev-startpage/issues">Report Bug</a>
    ·
    <a href="https://github.com/Jordan-Davila/webdev-startpage/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Roadmap](#roadmap)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

[![webdev-startpage][product-screenshot]](https://github.com/Jordan-Davila/webdev-startpage)

There are many great custom start pages available online, however, none of them or designed for web developers specifically.

Features:

-   List all .test or .dev sites from a defined directory [Eq. /Users/HomeFolder/Sites].
-   List all your github repos. Please visit Getting Started for more info.
-   Add a list of favorite sites for easy access.
-   Nice minimal calendar.

### Built With

Main frameworks. Add-ons/plugins are at the acknowledgements section.

-   [Vue](https://vuejs.org)
-   [Tailwind CSS](https://tailwindcss.com)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

We recommend an Ubuntu Server but feel free to use whatever linux distro you prefer. The following software are required in order to install webdev-startpage onto your server.

-   PHP >= 7.3
-   Apache or NGINX
-   [Node & NPM](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repo

```sh
git clone https://github.com/Jordan-Davila/webdev-startpage.git
```

2. Install NPM packages and build

```sh
npm install && npm run build
```

4. Rename config.sample.php to config.php and edit properties

```sh
mv config.sample.php config.php
```

5. Config your dir path, your tld and your list of favorite sites.
6. Config github usrename and oauth token. For more details visit: https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token

<!-- USAGE EXAMPLES -->

## Usage

Most browsers allow you to set your new tab page to your Homepage. After that you can set your homepage to a your new custom start page.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Jordan-Davila/webdev-startpage/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Jordan Davila - [@\_jordandavila](https://twitter.com/_jordandavila) - hi@jordandavila.com <br />
Project Link: [https://github.com/Jordan-Davila/webdev-startpage](https://github.com/Jordan-Davila/webdev-startpage)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

-   [Moment.js](https://momentjs.com/)
-   [v-calendar](https://vcalendar.io/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/Jordan-Davila/webdev-startpage
[forks-url]: https://github.com/Jordan-Davila/webdev-startpage/network/members
[stars-shield]: https://img.shields.io/github/stars/Jordan-Davila/webdev-startpage
[stars-url]: https://github.com/Jordan-Davila/webdev-startpage/stargazers
[issues-shield]: https://img.shields.io/github/issues/Jordan-Davila/webdev-startpage
[issues-url]: https://github.com/Jordan-Davila/webdev-startpage/issues
[license-shield]: https://img.shields.io/github/license/Jordan-Davila/webdev-startpage
[product-screenshot]: preview.png
