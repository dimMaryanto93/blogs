---
layout: post
title: "Submit method POST dengan HTML ke Servlet"
date: 2016-09-08T19:20:37+07:00
author: Dimas Maryanto
comments: yes
page_category: java-servlet
language: java
gist: dimMaryanto93/c0a51e92e23ada4ecb71f9c18c803fea
repository: https://github.com/dimMaryanto93/tutorial-java-webapp.git
categories:
- Java
- WEB
- Servlet
tags:
- Java
- Servlet
- ServerSide
references:
---

Halo, [sebelumnya]({% post_url 2016-09-08-servlet-submiting-get-method %}) kita udah melakukan submitting sebuah form dengan html ke servlet dengan menggunakan method `GET` nah sekarang saya akan menggunakan method `POST` dan sekalian kita akan membahas tentang pebedaan ke dua method tersebut.

<!--more-->

Padasarnya saya akan membuat hal yang sama yaitu menginputkan `nim` dan `nama` kemudian di submit dengan menggunakan method `POST`, sekarang coba anda buat halaman html dengan nama `submitpost.html` seperti berikut:

{% gist page.gist "submitpost.html" %}

Kemudian untuk menghandle mappingnya, kita seperti biasa membuat servlet dengan nama `SubmitPostController.java` seperti berikut:

{% gist page.gist "SubmitPostController.java" %}

Nah klo anda jalankan url `http://localhost:8084/tutorial-javawebapp/submitpost.html` pada dasarnya akan mempilkan form yang sama dengan pembahasan sebelumnya yaitu submit dengan method GET, tpi coba anda perhatikan lagi setelah anda melakukan submit lalu lihat pada path urlnya??? yang terlihat hanya `http://localhost:8084/tutorial-javawebapp/kirim-post` dan di halaman browsernya terdapat outputnya sama dengan submit menggunakan method GET.

Jadi kesimpulannya adalah klo menggunakan method GET maka valuenya akan ditambahkan di URL klo menggunakan POST maka akan disembunyikan. Ok mungkin sekian dulu pembahasan tentang Servlet menggunakan method POST. See you next post!.
