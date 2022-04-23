[![DWE](https://docs.exploredeepwater.com/_static/dwe_transparent2.png)](https://exploredeepwater.com/)

## Overview

In September of 2021, I joined a project that I could tell was going places. Barely 3 months later, I found myself, a sophomore in high school, working with a team of college and university students, as the Chief Technology Officer of a successful tech startup.

DeepWater Exploration is a company that currently develops high quality underwater cameras and ROV equipment.


![exploreHD](https://cdn.shopify.com/s/files/1/0575/8785/9626/files/DeepWater_Exploration_ROV_company_720x.jpg)

![DWE](/images/external/DeepWater%20Exploration.jpg)


## Projects

Over the course of the 8 months I have been a part of DeepWater Exploration, I have led and developed several [open source](https://github.com/DeepwaterExploration) projects. Here are the projects I developed while working at DWE along with some of the information about them and the skills used to create them.

### DWE QGroundControl

[Project Link](https://github.com/DeepwaterExploration/qgroundcontrol)

QGroundControl is a ground control software built for use with ArduPilot and Pixhawk flight controllers. Because our cameras can have multiple streams at once, we actively maintain a fork of the software to add functionality for viewing and recording an additional three streams. The technologies used include GStreamer, C++, and Qt 5.

Project Screenshot:

![DWE QGroundControl](/images/external/dwe-qgroundcontrol.jpg)

### exploreHD Controls Driver

[Project Link](https://github.com/DeepwaterExploration/exploreHD_Controls)

The exploreHD Controls Driver was a large project, especially as a single developer working on the project. Functionality for setting various extension unit controls on the UVC Linux driver is integrated into a single interface accessible on the web. Extensive documentation was made available to explain installation, autostart, and functionality. Additionally, streaming support is made available with GStreamer to allow resilient streaming that can start automatically when plugging in a camera as well as stop when unplugging one. This software essentially turns a flight computer such as a Raspberry Pi into an IP Camera module with exploreHD cameras as the video inputs. The technologies used include GStreamer, Linux, Bash, UVC Controls, NodeJS, C, API Design, Backend, Serialization, ReactJS, and General UI/UX.

Project Screenshot:

![driverui](/images/external/driverui-full-old.png)

### DeepWater Exploration Documenation

[Project Link](https://github.com/DeepwaterExploration/DeepwaterExplorationDocs)

[Site Link](https://docs.exploredeepwater.com/)

The DeepWater Exploration Documentation website was created using sphinx and the furo theme. A VPS is used as a backend to enable cloud based deployment and builds. Additionally, a private test deployment service is utilized to remotely deploy and test builds live without the need for an installed or virtualized environment. The code and site information are licensed under the MIT license to ensure all information can be made publically accessible at no cost to users. The technologies used include VPS, Ubuntu, webhooks, and Sphinx Documentation.

Deployment Screenshot:

![docs](/images/external/dwe-docs.png)

### DWE Firmware Loader

[Project Link](https://docs.exploredeepwater.com/software/firmware.html)

The DWE Firmware Loader is an application built to upload firmware directly to the chip used in the exploreHD. There are currently two options for firmware with one capable of additional customization with our driver. The technologies used include C++ and the Windows API.

![DWE Firmware Loader](https://docs.exploredeepwater.com/_images/Firmware_Loader_Step_4.png)
