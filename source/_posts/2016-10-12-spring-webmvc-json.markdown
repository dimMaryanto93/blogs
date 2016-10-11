---
layout: post
title: "Convert dari java object ke JSON dengan Spring Web MVC"
date: 2016-10-12T06:41:14+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-10/spring-webmvc-9/
gist: dimMaryanto93/546c0ed6a01e0c986bda2a4610ae23cd
repository: https://github.com/dimMaryanto93/tutorial.spring-webmvc.git
categories:
- Java
- Framework
- Spring
- Web
- MVC
- Sitemesh3
tags:
- Java
- WEB
- MVC
- springframework
- spring-webmvc
- Sitemesh3
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
- http://wiki.sitemesh.org/wiki/display/sitemesh3/Home
---

Halo kembali lagi di blog saya, kali ini saya mau share tetang menghasilkan json dengan spring web mvc dari object java atau kelas java yaitu kelas `Product` yang berisi atribut `nama, harga, jumlah`.

<!--more-->

Ok sebelum kita mulai kita tambahkan dulu dependency `jakson.data-binding` seperti berikut di `pom.xml`

{% highlight xml %}
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.8.3</version>
</dependency>
{% endhighlight %}

Seperti yang saya katakan di awal, jadi siapkan dulu kelas `Product` seperti berikut:

{% gist page.gist "Product.java" %}

Setelah itu kita buat controllernya seperti berikut beri nama `ProductAPI` dan simpan pada package `com.hotmail.dimmaryanto.software.controller` isinya seperti ini

{% gist page.gist "ProductAPI.java" %}

Jadi dengan menggunakan annotation `@ResponseBody` object Product yang dihasilkan oleh method `indomie()` akan berubah menjadi data berformat json. untuk melihat hasilnya ada bisa menggunakan tools atau plugin diantarnya :

## Plugin firefox

- [RESTED](https://addons.mozilla.org/en-US/firefox/addon/rested/)
- [HttpRequester](https://addons.mozilla.org/en-US/firefox/addon/httprequester/)

## Plugin Chrome

- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)

karena di OS saya cuman menggunakan firefox jadi saya pilih pake RESTED, tapilannya seperti berikut:

![aplikasi rested]({{page.image_path}}rested-1.png)

Nah sekarang coba jalankan aplikasinya dengan perintah

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

setelah semuanya jalan tanpa terjadi error atau kesalahan, sekarang coba masukan url berikut ke aplikasi RESTED seperti berikut:

`http://localhost:8080/tutorial.spring-webmvc/api/product/indomie`

![url-nya]({{page.image_path}}rested-2.png)

Kemudian klik `Send request`

Maka hasilnya pada response-nya seperti berikut:

![hasilnya]({{page.image_path}}rested-3.png)

Ok, mungkin cukup sekian dulu pembahasan mengenai menghasilkan JSON di spring WEB MVC, mohon maaf klo ada kesalahan, see you next post!.
