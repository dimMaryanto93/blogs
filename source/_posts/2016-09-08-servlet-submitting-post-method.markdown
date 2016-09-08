---
layout: post
title: "Submit method POST dengan HTML ke Servlet"
date: 2016-09-08T19:20:37+07:00
author: Dimas Maryanto
comments: yes
page_category: java-servlet
language: java
gist:
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

{% highlight html %}
<html>
    <head>
        <title>Mengirim data dengan POST</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h3>Mengirim data menggunakan method POST</h3>
        <form action="kirim-post" method="POST">
            <div>
                <label for="nim">NIM</label>
                <input name="nim" id="nim"  size="8" placeholder="Input NIM" maxlength="8" />
            </div>
            <div>
                <label for="nama">Nama</label>
                <input name="nama" id="nama" placeholder="Input Nama" size="25" maxlength="20"/>
            </div>
            <div>
                <input type="submit" value="Kirim" />
            </div>
        </form>
    </body>
</html>
{% endhighlight %}

Kemudian untuk menghandle mappingnya, kita seperti biasa membuat servlet dengan nama `SubmitPostController.java` seperti berikut:

{% highlight java %}
package belajar.java.web.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/kirim-post")
public class SubmitPostController extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // untuk mendapatkan nilai dari parameter-parameter
        String nim = req.getParameter("nim");
        String nama = req.getParameter("nama");
        // untuk menampilkan ke web browser
        resp.getWriter().println("NIM: " + nim + ", Nama: " + nama);
    }

}
{% endhighlight %}

Nah klo anda jalankan url `http://localhost:8084/tutorial-javawebapp/submitpost.html` pada dasarnya akan mempilkan form yang sama dengan pembahasan sebelumnya yaitu submit dengan method GET, tpi coba anda perhatikan lagi setelah anda melakukan submit lalu lihat pada path urlnya??? yang terlihat hanya `http://localhost:8084/tutorial-javawebapp/kirim-post` dan di halaman browsernya terdapat outputnya sama dengan submit menggunakan method GET.

Jadi kesimpulannya adalah klo menggunakan method GET maka valuenya akan ditambahkan di URL klo menggunakan POST maka akan disembunyikan. Ok mungkin sekian dulu pembahasan tentang Servlet menggunakan method POST. See you next post!.
