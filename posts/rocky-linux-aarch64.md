---
title: How to provision Rocky Linux in your AArch64 account
author: bruno
summary: Learn how to provision a VM with Rocky Linux on your AArch64 account 
date: July 05, 2021 03:30 AM
thumbnail: rocky-aarch64-console.png
---

Rocky Linux, one of our tenants, released version 8.4 of the operating system on the 21st of July. The release is based on the source code for Red Hat Enterprise Linux and intends to be 100% compatible with the former.

After the release, we included an official image for AArch64, complementing the existing offer for operating system images. Doing so will allow any tenant to use it develop their open-source software or community.

To learn more about Rocky Linux 8.4, we recommend reading the [official release notes](https://docs.rockylinux.org/release_notes/8.4).

## How to create a Rocky Linux 8.4 VM

Installing Rocky Linux in your AArch64 VM is really easy. We will document the steps below, with some screenshots to complement it.

First, you will need to login in our console. The top-right corner of this website has a link to it or you can just enter _console.aarch64.com_ in your browser address bar.

After logging in, you will notice there is a sidebar on the left. There, you have three sections:
- _PROJECTS_, for managing your projects and get an overview of all the Virtual Machines in a given projects;
- _MANAGE_, to create and manage your VMs;
- _ACCOUNT_, for reading the docs and gives us feedback about the platform.

To create a new Virtual Machine, click on _Create New VM_ on the _MANAGE_ section. A new page will be displayed where you can choose:
- the operating system;
- the characteristics of the VM / Plan (always dependent on the resources allocated to the project were you want to create it);
- how many Virtual Machines you will create;
- set the hostname;
- select the project (if you only have one, there is no need to change it);
- select the location.

<img src="../thumbnails/rocky-linux-aarch64-provisioning/create-vm.png" alt="creating a vm - step 1">

<img src="../thumbnails/rocky-linux-aarch64-provisioning/create-vm-2.png" alt="creating a vm - step 2">

After this, just hit the _CREATE_ button. In a few seconds, your virtual machine will be provisioned and automatically started.

<img src="../thumbnails/rocky-linux-aarch64-provisioning/vm-start.png" alt="creating a vm - step 3">

To login, via SSH, to your newly provisioned Rocky Linux VM, you will need the assigned IP and randomly generated password. You can get these by clicking on the virtual machine inside the AArch64 console and looking at the bottom area of the page.

<img src="../thumbnails/rocky-linux-aarch64-provisioning/ssh-login.png" alt="creating a vm - step 4">

The image we use has the _root_ user enabled and the password for it is the one displayed at the virtual machine details page. The SSH port is the default one, port 22. We advise changing the randomly generated password and the default SSH port.
