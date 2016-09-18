---
layout: post
title: "Bootstrap di Spring Framework Web MVC"
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-6/
gist: dimMaryanto93/546c0ed6a01e0c986bda2a4610ae23cd
repository: https://github.com/dimMaryanto93/tutorial.spring-webmvc.git
categories:
- Java
- Framework
- Spring
- Web
- MVC
tags:
- Java
- WEB
- MVC
- springframework
- spring-webmvc
- CSS
- Bootstrap
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
---

Halo,...


<!--more-->

...
...

Tambahkan dependency `bootstrap` di file `pom.xml` seperti berikut:

{% highlight xml %}
<dependency>
   <groupId>org.webjars</groupId>
   <artifactId>bootstrap</artifactId>
   <version>3.3.7</version>
 </dependency>
{% endhighlight %}

Jadi dependency tersebut akan secara otomatis mendownload dependency yang dibutuhkan oleh `bootstrap` contohnya `jquery` sebagai bukti coba jalankan perintah `mvn dependency:tree` maka hasilnya akan menampilkan seperti berikut:

{% highlight bash %}
[INFO] com.hotmail.dimmaryanto.software:tutorial.spring-webmvc:war:1.0
[INFO] +- junit:junit:jar:4.12:test
[INFO] |  \- org.hamcrest:hamcrest-core:jar:1.3:test
[INFO] +- javax.servlet:javax.servlet-api:jar:3.1.0:provided
[INFO] +- javax.servlet.jsp:javax.servlet.jsp-api:jar:2.3.1:provided
[INFO] +- jstl:jstl:jar:1.2:compile
[INFO] +- org.springframework:spring-context:jar:4.3.2.RELEASE:compile
[INFO] |  +- org.springframework:spring-aop:jar:4.3.2.RELEASE:compile
[INFO] |  +- org.springframework:spring-beans:jar:4.3.2.RELEASE:compile
[INFO] |  +- org.springframework:spring-core:jar:4.3.2.RELEASE:compile
[INFO] |  |  \- commons-logging:commons-logging:jar:1.2:compile
[INFO] |  \- org.springframework:spring-expression:jar:4.3.2.RELEASE:compile
[INFO] +- org.springframework:spring-webmvc:jar:4.3.2.RELEASE:compile
[INFO] |  \- org.springframework:spring-web:jar:4.3.2.RELEASE:compile
[INFO] \- org.webjars:bootstrap:jar:3.3.7:compile
[INFO]    \- org.webjars:jquery:jar:1.11.1:compile
{% endhighlight %}
