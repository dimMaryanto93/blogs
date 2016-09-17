---
layout: post
title: "Pengenalan Spring Framework Web MVC dengan JSP"
date: 2016-09-17T08:18:40+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-1/
gist:
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
references:
- https://projects.spring.io/spring-framework/
- http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
---

Halo kembali lagi di blog saya, Nah sebelumnya kita telah mempelajari tentang fundamental [JSP]({{ site.baseurl }}/halaman/java/web/jsp/), [Servlet]({{ site.baseurl }}/halaman/java/web/servlet/), dan [Spring Framework]({{ site.baseurl }}/halaman/java/framework/spring-framework/) sekarang kita lanjut ke level yang sedikit lebih sulit yaitu mempelajari Spring Web MVC, sebenarnya sih bukan sulit tapi butuh membiasakan supaya koding yang kita buat standard artinya sesuai dengan ketentuan dari suatu framework itu sendiri tidak hanya di Spring Framework tapi juga framework lainnya.

<!--more-->

Seperti biasa sebelum kita memulai koding, kita lihat dulu kenapa sih kita harus menggunakan suatu framework tertentu pasti ada tujuannya donk? ya khan. Nah jadi klo menurut saya dengan menggunakan Spring Web MVC ini kita bisa lebih mudah dalam hal membuat WEB itu sendiri contohnya klo di Java Web dengan JSP dan Servlet, nah klo di servlet khan untuk menangani handler request dan response harus dipisahkan setiap kelas maka lama kelamaan pasti banyak nah klo di Spring Web MVC kita bisa menggunakan satu kelas untuk membuat atau menghandle beberapa request dan response selain itu juga sifatnya sangat dimanis bisa menggunakan template engine seperti [Thymeleaf](http://www.thymeleaf.org/), [FreeMarker](http://freemarker.org/), [Apache Velocity](http://velocity.apache.org/) dan lain-lain. Maka dari itu kita akan dipermudah dan dipercepat dalam proses menghandle sebuah request dan responsenya.

Ok sekarang langsung kita mulai, pertama kita buat dulu project menggunakan Apache Maven yaitu dengan menggunakan perintah seperti berikut:

{% highlight bash %}
mvn archetype:generate
  -Dversion=1.0
  -DarchetypeArtifactId=maven-archetype-webapp
  -DgroupId=com.hotmail.dimmaryanto.software
  -DartifactId=tutorial.spring-webmvc
  -DarchetypeCatalog='internal'
{% endhighlight %}

Sekarang kita bisa membukanya dengan text editor kesukaan anda, klo saya mau menggunakan Netbeans. Sebelum masuk ke Spring Framework ada beberapa yang harus di konfigurasi seperti menambahkan dependency `maven7-plugin-maven`, `javax.servlet-api`, `jstl` dan `javax.servlet-jsp-api` ke `pom.xml` seperti berikut:

{% highlight xml %}
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.12</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>javax.servlet-api</artifactId>
  <version>3.1.0</version>
  <scope>provided</scope>
</dependency>
<dependency>
  <groupId>javax.servlet.jsp</groupId>
  <artifactId>javax.servlet.jsp-api</artifactId>
  <version>2.3.1</version>
  <scope>provided</scope>
</dependency>
<dependency>
  <groupId>jstl</groupId>
  <artifactId>jstl</artifactId>
  <version>1.2</version>
  <scope>provided</scope>
</dependency>
{% endhighlight %}

Kemudian kita tambahkan plugin untuk menjalankan atau meng-embbed tomcat di project kita seperti berikut:

{% highlight xml %}
<plugins>
  <plugin>
    <groupId>org.apache.tomcat.maven</groupId>
    <artifactId>tomcat7-maven-plugin</artifactId>
    <version>2.2</version>
  </plugin>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-compiler-plugin</artifactId>
    <version>3.5.1</version>
    <configuration>
        <target>1.7</target>
        <source>1.7</source>
    </configuration>
  </plugin>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-war-plugin</artifactId>
    <version>3.0.0</version>
    <configuration>
        <!-- web.xml is not mandatory since JavaEE 5 -->
      <failOnMissingWebXml>false</failOnMissingWebXml>
    </configuration>
  </plugin>
</plugins>
{% endhighlight %}

Nah setelah itu coba jalankan di Terminal atau Command prompt perintah seperti berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Maka outputnya seperti berikut:

{% highlight bash %}
[INFO] Running war on http://localhost:8080/tutorial.spring-webmvc
[INFO] Creating Tomcat server configuration at /home/dimmaryanto93/tutorial/spring-webmvc/target/tomcat
[INFO] create webapp with contextPath: /tutorial.spring-webmvc
Sep 17, 2016 8:08:49 AM org.apache.coyote.AbstractProtocol init
INFO: Initializing ProtocolHandler ["http-bio-8080"]
Sep 17, 2016 8:08:49 AM org.apache.catalina.core.StandardService startInternal
INFO: Starting service Tomcat
Sep 17, 2016 8:08:49 AM org.apache.catalina.core.StandardEngine startInternal
INFO: Starting Servlet Engine: Apache Tomcat/7.0.47
Sep 17, 2016 8:08:52 AM org.apache.coyote.AbstractProtocol start
INFO: Starting ProtocolHandler ["http-bio-8080"]
{% endhighlight %}

Nah dari output diatas coba anda browser url `http://localhost:8080/tutorial.spring-webmvc` Maka browser anda akan menampilkan halaman seperti berikut.

![Web Application]({{ page.image_path }}spring-webmvc-1.png)

Ok mungkin sekian dulu tentang Pengenalan Spring Web MVC dan juga membuat project Java Web Untuk Spring Web MVC. See you next post!.
