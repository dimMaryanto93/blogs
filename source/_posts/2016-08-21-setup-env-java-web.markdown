---
layout: post
title: "Setup Development Environment untuk Java WEB"
date: 2016-08-21T20:22:04+07:00
author: Dimas Maryanto
comments: yes
page_category: jsp
language: java
gist:
repository:
categories:
- Java
- WEB
tags:
- Java
- Web
- JSP
- Servlet
- ServerSide
references:
---

Halo kembali lagi, kali ini saya mau membahas tentang setup development environment untuk Java WEB. Apa aja yang harus di install dan disiapkan?

<!--more-->

* Jave Development Kit (Oracle JDK)
* Apache Maven
* Web Server
* Database
* Text Editor

## Oracle JDK

Inimah udah pasti harus diinstall klo mau menggunakan bahasa pemograman Java, pasti harus punya JDK. jadi saya skip ja ya! atau silahkan baca [artikel ini]({% post_url 2016-07-28-java-dev-en %}).

## Apache Maven

Klo Apache maven ini sebenarnya optinal boleh diinstall atau pun tidak, tapi selama praktek saya disini menggunakan ```maven-archetype-webapp``` sebagai template projectnya. jadi silahkan klo mau install, silahkan baca lagi artikel berikut:

* Untuk Ubuntu [baca sini]({% post_url 2016-08-17-install-maven-ubuntu-apt-get %})
* Untuk Fedora [baca sini]({% post_url 2016-08-17-install-maven-fedora %})
* Untuk Windows [baca sini]({% post_url 2016-08-17-install-maven-win10 %})

## Web Server

Web server juga ini wajib klo mau menggunakan fitur Java Web, sebenarnya lumayan banyak untuk Web Server di Java diantaranya:

* [Apache Tomcat (Apache Project)](http://tomcat.apache.org/)
* [GlashFish (Oracle)](https://glassfish.java.net/)
* [Undertow (JBoss)](http://undertow.io/)
* [Jetty (Eclipse Fundation)](http://www.eclipse.org/jetty/)

Ok dari pilihan tersebut, saya sendiri menggunakan **Apache Tomcat**. Untuk bagaimana cara installnya berikut saya lampirkan video tutorialnya cara install Apache Tomcat di Windows dan Linux.

Berikut untuk Sistem Operasi Linux (Fedora &amp; UBuntu)

{% youtube "watch?v=WxPz_h6pm3w" %}

Berikut untuk Sistem Operasi Windows

{% youtube "watch?v=oebNTuIvYqY" %}

## Database

Untuk database anda bebas, pilih yang mana aja. Klo saya pake [PostgreSQL](https://www.postgresql.org/download/). Klo mau install silahkan baca artikel berikut:

* Untuk Windows [baca disini]({% post_url 2016-07-31-install-postgresql-win10 %}) atau berikut videonya:

{% youtube "watch?v=wfArJkh74SY" %}

* Untuk Linux [baca disini]({% post_url 2016-07-29-install-postgresql-f23 %}) atau berikut videonya:

{% youtube "watch?v=IQ3WeCPo0B4" %}

## Text Editor

Text editor yang bisa digunakan untuk membuat program Java Web sebenarnya bebas aja, Kita bisa menggunakan text editor cangih seperti [Netbeans](https://netbeans.org/), [Eclipse](https://www.eclipse.org/home/index.php), atau [IDEA](https://www.jetbrains.com/idea/) tapi ditutorial ini saya menggunakan text editor biasa aja seperti

* <i class="devicon-atom-original colored text-large"></i> [Atom](https://atom.io/)
* <i class="devicon-vim-plain colored"></i> Vim
* [Visual Studio Code](https://code.visualstudio.com/).

Ok mungkin sekian dulu hal apa saja yang harus disiapkan untuk membuat aplikasi Java Web. See you next post!.
