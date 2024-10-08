<a id="readme-top"></a>


<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AustinWoolridge/StickerSmash">
    <img src="/public/StickerSmash-icon.jpeg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">StickerSmash</h3>

  <p align="center">
    A mobile app for adding stickers to your images.
    <br />
    <a href="https://github.com/AustinWoolridge/StickerSmash"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AustinWoolridge/StickerSmash">View Demo</a>
    ·
    <a href="https://github.com/AustinWoolridge/StickerSmash/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
    <a href="https://github.com/AustinWoolridge/StickerSmash/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="/public/StickerSmash-gif.gif" alt="StickerSmash-gif">

Here's a concise summary for my StickerSmash application that highlights its key features and technologies:

StickerSmash is a application I have created using expo's documentation for react native introduction. This applicaiton carries out my existing React knowledge and allow me to create mobile compatible application with cool components.

## What learned

<Pressable> component to handle touch interactions. Its part of core React Native library. I used it in Button.js to trigger onPress fuction and customized style prop.

```bash
props : onPressIn, onPressOut, onLongPress.
```

<Modal> component to handle emoji on top of existing image.

```bash
props : visible, animationType, transparent.
```

<View> component to handle styling.

#

And many other core react-native components..

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React-Native][React-Native.js]][React-Native-url]
* [![Expo][Expo.js]][Expo-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

It is simple to run this application on your device locally. Its only 300MB in size. Follow the instuctions below one by one.

### Prerequisites

You will need to clone the repository first. So install gitbash and go to folder location you would like app to be installed. I want to install the app in my Documents folder so :
* git bash
  ```sh
  cd Documents
  ```

### Installation

1. Now you are in Documents folder so you can install the app in this folder.
2. Clone the repo
   ```sh
   git clone https://github.com/AustinWoolridge/StickerSmash.git
   ```
After cloning the repository you will need to get the packages used in this app locally. You can see which packages are need to be installed in .gitignore. You should install "node_modules" since this app created with the tool "create-react-app" which relies on Node.js. If you want to contribute to this project it will give you cool features like hot reloading and efficient development. 

4. Now open your IDE and open the folder StickerSmash. Then you can open a terminal. Terminal should open in the StickerSmash folder.

5.  Install Node.js from the website : https://nodejs.org/en/download/prebuilt-installer. After Node.js is installed you can use npm command from bash.
   ```sh
   npm install
   ```
6. After this you will need to run below and web browser will open where you can use the application yourself and update the code.
    ```sh
   npm start
   ```
7. If you wish to contribute change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin AustinWoolridge/StickerSmash
   git remote -v # confirm the changes
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This app can be used in both Android and iOS devices to add stickers to your image before sending it out to social media.

_For more examples, please refer to the [Documentation](https://github.com/AustinWoolridge/StickerSmash)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Choose a photo from your device.
    - [ ] Make sure to give permissions to device to access your images.
- [ ] After choosing the image click on + icon and choose an emoji to add to your image.
    - [ ] Double-tapping to emoji and it will double its size and back. 
- [ ] Can press "Reset" to choose another image or can press "Save" to record the image.


See the [open issues](https://github.com/AustinWoolridge/StickerSmash/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/AustinWoolridge/StickerSmash/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=AustinWoolridge/StickerSmash" alt="contrib.rocks image" />
</a>



<!-- LICENSE -->
## License

Currently there is no License for this app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Batuhan Ok - [@WoolridgeAusti](https://twitter.com/WoolridgeAusti) - batuhanok1375@gmail.com

Project Link: [https://github.com/AustinWoolridge/StickerSmash](https://github.com/AustinWoolridge/StickerSmash)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [dom-to-image](https://github.com/tsayen/dom-to-image)
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AustinWoolridge/StickerSmash.svg?style=for-the-badge
[contributors-url]: https://github.com/AustinWoolridge/StickerSmash/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AustinWoolridge/StickerSmash.svg?style=for-the-badge
[forks-url]: https://github.com/AustinWoolridge/StickerSmash/network/members
[stars-shield]: https://img.shields.io/github/stars/AustinWoolridge/StickerSmash.svg?style=for-the-badge
[stars-url]: https://github.com/AustinWoolridge/StickerSmash/stargazers
[issues-shield]: https://img.shields.io/github/issues/AustinWoolridge/StickerSmash.svg?style=for-the-badge
[issues-url]: https://github.com/AustinWoolridge/StickerSmash/issues
[license-shield]: https://img.shields.io/github/license/AustinWoolridge/StickerSmash.svg?style=for-the-badge
[license-url]: https://github.com/AustinWoolridge/StickerSmash/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/batuhan-ok-095654228
[product-screenshot]: images/screenshot.png
[React-Native.js]:  https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[React-Native-url]: https://reactnative.dev/ 
[Expo.js]: https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37
[Expo-url]: https://expo.dev/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
