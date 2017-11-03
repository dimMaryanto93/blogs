---
layout: post
title: "Spring Bean reference dari objek lain"
date: 2016-09-15T20:19:48+07:00
author: Dimas Maryanto
comments: yes
page_category: springframework
language: java
gist: dimMaryanto93/466c313fb585e753cd2e33e6fa6b7660
repository: https://github.com/dimMaryanto93/tutorial.springframework-ioc.git
categories:
- Java
- Framework
- SpringFramework
tags:
- Java
- Spring Framework
- Dependency Injection
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
---

Halo kembali lagi di blog saya, kali ini saya mau nulis tentang lanjutan dari [Spring Dependency Injection]({% post_url 2016-08-20-dep-injection-with-spring %}) yaitu Dependency yang memiliki relasi atau Dependency Injection yang mereferensi ke Dependency lainnya.

<!--more-->

Ok langsung aja buat sebuah kelas dengan nama `RefBean` dalam package `com.hotmail.dimmaryanto.software.beans` seperti berikut:

{% gist page.gist "RefBean.java" %}

Kemudian kita buat kelas tersebut menjadi sebuah bean, dengan menambahkan tag `<bean>` dalam file `springConfig.xml` seperti berikut:

{% gist page.gist "SpringConfigRef.xml" %}

Coba anda perhatikan di baris `11-19`, jadi disini kita mempunya 2 buah bean dengan nama `dataBean` dan `dBean`, nah bean dengan nama `dBean` ini memiliki hubungan dengan `dataBean` yang ditandai di baris `18` dengan keyword `ref="dataBean"`. Ok untuk membuktikan bahwa objek `dataBean` langsung di isi dari kelas `dBean` buat kelas dengan nama `AppRef.java` seperti berikut:

{% gist page.gist "AppRef.java" %}

Jika dirunning maka hasilnya seperti berikut:

{% highlight java %}
INFO: Loading XML bean definitions from class path resource [SpringConfig.xml]
keterangan: Ini bean yang memiliki ref ke Constructor injection
{% endhighlight %}

Ok mungkin sekian dulu tentang bean yang mereferensi dari bean lain. See you next post!.
