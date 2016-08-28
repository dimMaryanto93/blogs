---
layout: post
title: "Automated deploy ke webserver dengan tomcat7-maven-plugin"
date: 2016-08-23T01:25:05+07:00
author: Dimas Maryanto
comments: yes
page_category: java-servlet
language: java
gist:
repository: https://github.com/dimMaryanto93/tutorial-java-webapp.git
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
image_path: /images/2016-08/java-web-2/
---

Halo balik lagi di Blog saya, di [postingan sebelumnya]({% post_url 2016-08-22-new-project-javaweb %}) kita udah membuat project dengan ```maven-archetype-webapp``` dan bagaimana cara mendeploy atau merunning aplikasi kita supaya online di browser. Nah sekarang saya mau kasih tips bagaimana supaya kita gak ribet untuk mendeploy aplikasi setiap kali source berubah.

<!--more-->

Jadi setiap kali source kita ubah, kemudian di package jadi `.war` otomatis isinya juga berubah ya khan, nah cara deploynyakan harus kita ulang seperti pada [postingan sebelumnya]({% post_url 2016-08-22-new-project-javaweb %}) (harus upload `.war` ke tomcat web server) supaya otomatis kita bisa menggunakan plugin maven yaitu seperti berikut:

{% highlight bash %}
mvn clean package tomcat:run
{% endhighlight %}

Kalo error seperti berikut:

![tomcat error]({{ page.image_path }}tomcat-run-error.png)

Maka solusinya adalah gunakan plugin tomcat7, karena spec dari Jspnya versi terbaru tidak disuport di tomcat6.xx so kita harus upgrade embeded webserver nya ke versi yang lebih tinggi yaitu ```tomcat7-maven-plugin``` tambahkan dependencynya di `pom.xml`

{% highlight xml %}
<build>
  <finalName>tutorial-javawebapp</finalName>
  <plugins>
    <plugin>
      <groupId>org.apache.tomcat.maven</groupId>
      <artifactId>tomcat7-maven-plugin</artifactId>
      <version>2.2</version>
    </plugin>
  </plugins>
</build>
{% endhighlight %}

Kemudian untuk menjalankan gunakan ```tomcat7:run``` bukan ```tomcat:run```!! seperti berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Maka hasilnya seperti berikut:

![tomcat running]({{ page.image_path }}tomcat7-works-it.png)

Berikut juga tersedia versi video tutorialnya:

{% youtube "watch?v=rxDsvhXwRC8" %}

Ok mungkin sekian dulu postingan kali tentang automated deploy ke web server embeded dengan tomcat7. See you next post!.
