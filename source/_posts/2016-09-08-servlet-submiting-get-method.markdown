---
layout: post
title: "Submiting dengan HTML Form dengan method GET ke Servlet"
date: 2016-09-08T16:16:46+07:00
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

Halo [dipostingan sebelumnya]({% post_url 2016-09-08-servlet-annotation %}) kita udah membuat servlet dengan menggunakan annotation, sekarang kita bakalan menggabungkan servlet dengan annnotation dan membuat submit input data dengan menggunakan perintah HTML dan serlvet.

<!--more-->

Ok langsung aja, buat implementasinya kita buat file `html` dalam folder `/webapp` dengan nama file `submitget.html` berikut isi filenya:

{% gist page.gist "submitget.html" %}

Setelah itu, kita buat _action handler_ untuk url `kirim-get` yaitu dengan menggunakan servlet yaitu seperti berikut dengan nama kelas `SubmitGetController.java` yaitu isinya seperti berikut:

{% gist page.gist "SubmitGetController.java" %}

Nah sekarang anda coba perhatikan url berikut:

`http://localhost:8084/tutorial-javawebapp/kirim-get?nim=10511148&nama=Dimas+Maryanto`

Klo menggunakan submit dengan method GET maka parameter itu muncul semua seperti link diatas ketika di submit. Nah kurang lebih seperti itu ya, mungkin cukup sekian dulu. See you next post!.
