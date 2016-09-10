---
layout: post
title: "Pengenalan Apache Maven"
date: 2016-08-11T23:29:24+07:00
author: Dimas Maryanto
comments: yes
page_category: maven
language: java
repository: https://github.com/dimMaryanto93/belajar-apache-maven.git
categories:
- Java
- BuildTool
- Maven
tags:
- Java
- Build Tools
- Apache Maven
references:
- https://maven.apache.org/
---

Halo kembali lagi di blog saya, nah kali ini saya akan membahas tentang software yang basicnya atau dikategorikan sebagai build tools yaitu Apache Maven. tapi sebelum kita belajar tentang Apache Maven, kita harus tau dulu apa itu Apache Maven? apa bedanya dengan menggunakan java biasa? dll.

<!--more-->

Memang dalam membangun sebuah software yang sangat kompleks atau sederhana sekalipun asalkan bukan untuk aplikasi karya ilmiah (Skripsi, Belajar dan lain-lain karena biasanya aplikasi untuk Skripsi itu ujung-ujungnya **gak akan dipake** sama perusahaan) Memang tidak bisa dipandang sebelah mata karena kita membutuhkan fondasi yang kokoh dibawahnya seperti:

* Menggunakan version control system (VCS seperti git, svn)
* Adanya pengelolahan Dependency Management (Libraries)
* Build tools, melakukan build --> package --> run
* Automated testing, mencakup unit testing -> integration testing -> dll.
* Issues Bugs Tracker
* dan masih banyak lagi.

Tpi semua itu tergantung dari jumlah anggota dalam tim tersebut dan seberapa besar aplikasi yang mau dibuat, analogikanya sama kayak kita mau bikin rumah pasti beda dengan membuat mall. perbedaanya tidak hanya terlihat dari jumlah orang yang membangun tapi juga dari bahan bahan yang digunakan klo bikin rumah biasanya pake batu bata cukup nah klo bikin gedung mall biasanya bikin pake batako ya kurang lebih kayak gitulah ya klo diceritaain semuanya kepanjangan nanti, jadi saya harap anda paham ya.

Nah sekarang kita balik lagi ketopik utama yaitu apa itu build tools? kata [wikipedia](https://en.wikipedia.org/wiki/List_of_build_automation_software) builtools itu

> Build automation involves scripting or automating the process of compiling computer source code into binary code

 Jadi pada dasarnya build tools itu gunanya untuk mempermudah bagi developer untuk melakukan kompilasi source code ke binary code dengan fitur tambahan dari masing masing build tools tersebut. contohnya di Maven ya khan kita lagi bahas maven, Di Maven kita bisa melakukan kompilasi, packaging, reporting, testing dan lain-lain coba [baca disini](https://maven.apache.org/plugins/index.html).

 Jadi Apache Maven itu bagian dari build tools ya? yap terus sebenarnya buat apa sih Maven itu? klo kita lihat di [websitenya](https://maven.apache.org/index.html) maven didefinisikan seperti berikut:

 > Apache Maven is a software project management and comprehension tool. Based on the concept of a project object model (POM), Maven can manage a project's build, reporting and documentation from a central piece of information.

 Jadi Apache maven itu sebuah software yang bisa dikatakan sebagai framework, yang basic konfigurasinya dari sebuah file dengan tipe ```xml``` yaitu ```pom.xml```. Selain itu juga Apache maven ini dapat digunakan untuk membuat template project yang baru atau yang udah ada, meng-generate JavaDoc, membuat report (logger), dan pastinya bisa support di cross platform magsudnya bisa digunakan di Windows, Linux, MacOS dll.

 Kenapa dikatakan sebagai framework?? jawabanya adalah Apache Maven ini memiliki struktur folder sendiri yang harus diikuti oleh setiap developernya, contohnya bikin aplikasi desktop menyimpan source javanya di ```src/main/java``` selain itu di simpan di ```src/main/resources``` dan masih banyak lagi.

 Keuntungan menggunakan Apache Maven:

 * Maven dikenal hampir semua text editor (easy to import) baik Netbeans, Eclipse, IDEA atau pun lainnya.
 * Struktur project yang konsisten meskipun ada programmer baru.
 * Dependency management, otomatis mencari ke internet klo libraries yang digunakan belum ada di local termasuk transitive dependency.
 * Proses build lebih mudah dibandingkan dengan cara manual (```javac -cp sources MainClass``` dan ```java MainClass```)

 Ok mungkin segitu dulu penjelasan tentang pengenalan Apache Maven. see you next post!.
