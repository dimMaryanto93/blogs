---
layout: post
title: "Mengenal Contructor Injection dan Setter Injection di Spring Framework dengan XML konfigurasi"
date: 2016-09-15T19:24:14+07:00
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

Halo kembali lagi di blog saya, di [postingan sebelumnya]({% post_url 2016-08-20-dep-injection-with-spring %}) kita udah membuat dan memahami tentang Dependency Injection menggunakan native (murni java) dan menggunakan Spring Framework. Sekarang saya bakalan membahas lanjutannya yaitu jenis Dependency Injection seperti yang telah di sebutkan di judul yaitu Contructor Injection dan Setter Injection.

<!--more-->

Ok langsung aja, kita buat kelas baru dengan nama `DataBean` dalam package `com.hotmail.dimmaryanto.software.beans` seperti berikut:

{% gist page.gist "DataBean.java" %}

sekarang coba buat beannya di file `springConfig.xml` seperti berikut:

{% gist page.gist "spring-config-constructor.xml" %}

Sekarang coba anda perhatikan klo kita mau menginject valuenya dari setter berarti menggunakan `<property>` sedangkan untuk menggunakan constructor menggunakan `<constructor-arg>`, Ok sekarang kita test, yaitu dengan menambahkan main method seperti berikut:

{% gist page.gist "AppConstructorArgs.java" %}

setelah itu run file tersebut, maka outputnya seperti berikut:

{% highlight bash %}
INFO: Loading XML bean definitions from class path resource [SpringConfig.xml]
Constructor injection
{% endhighlight %}

Ok saya rasa pahamnya perbedaanya antara setter injection dengan constructor injection dengan menggunakan spring framework. See you next post!.
