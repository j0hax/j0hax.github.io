---
title: "Curriculum Vitae"
date: 2023-07-15
menus: 'main'
---

# About

Name
: Johannes Karl Arnold

Birthday
: 1998-05-20 ({{< age >}} years)

Languages Spoken
: German (native)
: English (native)

Contact
: johannes@arnold.onl

---

# Employment History

{{< cvEntry position="Linux consultant and trainer" employer="B1 Systems GmbH" location="Hybrid" from="2026-04-01" >}}

Consultant specializing in enterprise Linux platforms and open-source technologies with a focus on digital sovereignty. Work with public sector and commercial customers across Germany and the European Union, implementing new and improving upon existing Linux infrastructure.

### Projects

[Linux Client Management](https://www.b1-systems.de/en/solutions/b1-lcm-linux-client-management/)
: Design and implementation of enterprise Linux client management solutions for Ubuntu and custom atomic BootC-based distributions, including architecture, deployment automation, configuration management, CI/CD integration, and customer workshops. Develop Salt states, Foreman provisioning workflows, container-based build pipelines, and internal automation tooling to simplify deployment and lifecycle management. Contribute to the continued development of the on-premises product as well as the company's multi-tenant SaaS offering, including technical project management responsibilities.
: Worked with customers from the German federal and state public sectors, the automotive industry, and consulting partners deploying and operating environments consisting of hundreds of managed Linux systems.
: Contributed improvements upstream to the NixOS ecosystem and the Salt Project while applying open-source best practices throughout customer engagements.

### Trainings

Alongside consulting engagements, delivered instructor-led training for professional Linux administrators, including:

- [S1374](https://www.gfu.net/s1374): Linux Debian/&shy;Ubuntu Basic Administration
- [S1373](https://www.gfu.net/s1373): Linux Server Basic Administration
- [S120](https://www.gfu.net/s120): Linux/&shy;UNIX System Administration
{{< /cvEntry >}}

{{< cvEntry position="Systems Engineer" employer="KKH Kaufmännische Krankenkasse" location="Hannover, Germany" from="2023-10-01" to="2025-04-01" >}}
Administered an on-premises enterprise Linux infrastructure consisting of several hundred physical and virtual servers supporting business-critical healthcare services. Responsible for systems running SUSE Linux Enterprise Server 11 through 15 SP5, including lifecycle management, patching, and operating system upgrades.

- Managed system configuration, package deployment, compliance, and patch management using Salt and SUSE Multi-Linux Manager.
- Introduced Git-based configuration management to replace an existing unversioned Salt infrastructure, establishing version control and change tracking for infrastructure code.
- Designed and implemented GitLab CI pipelines to validate infrastructure changes before deployment, improving reliability and maintainability of the configuration management workflow.
- Developed customized Debian installation media using Debian Installer preseed automation to provide unattended installations with preconfigured Salt Minions for immediate integration into the existing infrastructure.
- Extended the existing Salt-based management environment to support Debian systems alongside SUSE Linux Enterprise Server after Debian became the required platform for a new enterprise telephony solution, enabling consistent administration across multiple Linux distributions.
- Operated and maintained Broadcom Automic Automation for enterprise workload scheduling and execution of business-critical batch processes.

{{< /cvEntry >}}

{{< cvEntry position="Research Assistant" employer="Leibniz University of Hannover" location="Hannover, Germany" from="2020-01-01" to="2023-04-01" >}}
Supported the IT infrastructure of the Institute of Continuum Mechanics, providing Linux systems administration and software development for approximately 50 researchers and staff. Contributed to modernizing the institute's infrastructure by introducing containerization, developing internal tools, and supporting scientific computing workflows.

- Introduced Docker-based containerization to replace traditional deployments based on manually managed tarball releases and systemd services, improving application portability and simplifying software maintenance.
- Designed and assembled a small SLURM compute cluster using repurposed hardware to provide shared computing resources for research workloads.
- Developed an internal Python-based cashless coffee management system integrating RFID card readers for user authentication and balance management.
- Implemented a Go middleware service for datacenter monitoring that collected electrical power consumption metrics from servers via SNMP, providing centralized monitoring of infrastructure energy usage.
- Developed a PHP web application backed by CouchDB for managing the institute's literature archive and internal publication database.
- Assisted researchers in administering Linux workstations and servers for scientific computing, troubleshooting software environments and supporting computational research workflows.
{{< /cvEntry >}}

---

# Certifications

- SUSE Certified Engineer (SCE) in SUSE Linux Enterprise Server 15 [[Certificate](./SCE.pdf)]
- SUSE Certified Administrator (SCA) in SUSE Linux Enterprise Server 15 [[Certificate](./SCA.pdf)]

---

# Education

## Bachelor of Science in Computer Science, *Leibniz University of Hannover*

- Thesis: *On the Power Estimation of a RISC-V Platform using Performance Monitoring Counters and RTOS Events* [[Link](https://www.sra.uni-hannover.de/Theses/2024/BA-AHA-energy-pmc.html)]
  - Developed a framework for estimating the energy consumption of a RISC-V embedded platform using hardware Performance Monitoring Counters (PMCs) and operating system events from the Zephyr RTOS.
  - Designed and implemented a custom benchmarking and measurement framework using C, assembly, and Python to automate benchmark execution, data acquisition, and model evaluation on an ESP32-C3-DevKitM-1.
  - Evaluated the accuracy of the resulting power estimation model, achieving a Mean Absolute Percentage Error (MAPE) of 1.85%.
- Minor in Business Administration.
- Electives focused on distributed systems, operating systems, and systems programming.


## High School Diploma, *Cypress Ridge High School* (Houston, TX)

- Graduation with honors

---

# Technical Skills

## Programming Languages

- C
- Golang
- Python
- Bash

## DevOps & Automation
- GitLab CI/CD
- Salt
- Linux image building
- BootC
- Foreman

### Operating Systems
- Debian
- Ubuntu
- Fedora
- SUSE Linux Enterprise
- NixOS

## Hobbies and Interests

- Recreational programming in Golang, [NixOS](https://nixos.org), FOSS embedded systems (e.g. [Tasmota](https://tasmota.github.io/docs/), [QMK](https://qmk.fm/), [OpenWRT](https://tasmota.github.io/docs/))
