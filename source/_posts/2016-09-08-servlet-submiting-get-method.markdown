---
layout: post
title: "Submiting dengan HTML Form dengan method GET ke Servlet"
date: 2016-09-08T16:16:46+07:00
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

Halo [dipostingan sebelumnya]({% post_url 2016-09-08-servlet-annotation %}) kita udah membuat servlet dengan menggunakan annotation, sekarang kita bakalan menggabungkan servlet dengan annnotation dan membuat submit input data dengan menggunakan perintah HTML dan serlvet.

<!--more-->

Ok langsung aja, buat implementasinya kita buat file `html` dalam folder `/webapp` dengan nama file `submitget.html` berikut isi filenya:

{% highlight html %}
<html>
    <head>
        <title>Mengirim data dengan GET</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <h3>Mengirim data menggunakan method GET</h3>
        <form action="kirim-get" method="GET">
            <div>
                <label for="nim">NIM</label>
                <input name="nim" id="nim" pattern="Input NIM" size="8" maxlength="8" />
            </div>
            <div>
                <label for="nama">Nama</label>
                <input name="nama" id="nama" pattern="Input Nama" size="25" maxlength="20"/>
            </div>
            <div>
                <input type="submit" value="Kirim" />
            </div>
        </form>
    </body>
</html>
{% endhighlight %}

Setelah itu, kita buat _action handler_ untuk url `kirim-get` yaitu dengan menggunakan servlet yaitu seperti berikut dengan nama kelas `SubmitGetController.java` yaitu isinya seperti berikut:

{% highlight java %}
package belajar.java.web.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = {"/kirim-get"})
public class SubmitGetController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // untuk mendapatkan nilai dari parameter-parameter
        String nim = req.getParameter("nim");
        String nama = req.getParameter("nama");
        // untuk menampilkan ke web browser
        resp.getWriter().println("NIM: " + nim + ", Nama: " + nama);
    }
}
{% endhighlight %}

Nah sekarang anda coba perhatikan url berikut:

`http://localhost:8084/tutorial-javawebapp/kirim-get?nim=10511148&nama=Dimas+Maryanto`

Klo menggunakan submit dengan method GET maka parameter itu muncul semua seperti link diatas ketika di submit. Nah kurang lebih seperti itu ya, mungkin cukup sekian dulu. See you next post!.
