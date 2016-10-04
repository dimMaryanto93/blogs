---
layout: post
title: "Bootstrap di Spring Framework Web MVC"
date: 2016-09-19T05:50:28+07:00
author: Dimas Maryanto
comments: yes
page_category: spring-webmvc
language: java
image_path: /images/2016-09/spring-webmvc-7/
gist: dimMaryanto93/546c0ed6a01e0c986bda2a4610ae23cd
repository: https://github.com/dimMaryanto93/tutorial.spring-webmvc.git
categories:
- Java
- Framework
- Spring
- Web
- MVC
- bootstrap3
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

Halo kembali lagi di blog saya, nah di [postingan sebelumnya]({% post_url 2016-09-18-spring-webmvc-include-js-or-css %}) kita udah meng-include-kan file `.css` ke Spring Framework Web MVC. Nah jadi sekarang kita akan menggunakan salah satu framework CSS yaitu [Bootstrap](http://www.getbootstrap.com/), sebenarnya kita bisa Download langsung kita tempel di folder `style` seperti file `halocss.css` tapi sekarang udah gak jaman yang seperti itu, kita bisa menggunakan NodeJS untuk mendownload bootstrapnya atau kali ini saya mau menggunakan [Webjars](http://www.webjars.org/)


<!--more-->

Webjars ini sama seperti npm di JavaScript dia fungsinya mendownload package-package yang kita butuhkan untuk framework CSS dan JavaScript seperti `bootstrap`, `jquery`, `angularJS` dan lain-lain tapi disimpan dalam bentuk `.jar` yang bisa diakses memalui Apache Maven, SBT, Gradle dan lain-lain.

Untuk menggunakannya dengan Menggunaan Apache Maven kita bisa tambahkan dependency `bootstrap` di file `pom.xml` seperti berikut:

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

Terus kita khan mau di gunakan di Spring Framework Web MVC dan resourcesnya ada didalam `.jar` alias ada di folder `META-INF/resources` seperti berikut contohnya:

![Webjars Netbeans]({{ page.image_path }}spring-webmvc-1.png)

Atau klo mau lebih jelas filenya kita bisa compile dulu dengan perintah seperti berikut:

{% highlight bash %}
mvn clean package
{% endhighlight %}

Setelah itu buka folder `spring-webmvc/target/spring-webmvc/WEB-INF/lib` kemudian buka file `bootstrap-3.3.7.jar` dengan `zip` atau `Winrar` maka resourcesnya disimpan di sini:

![Webjar file jar]({{ page.image_path }}spring-webmvc-2.png)

Nah sekarang kita tambahkan resourcesnya ke Spring Framework Web MVC dengan Memodifikasi kelas `KonfigurasiWeb` seperti berikut:

{% gist page.gist "KonfigurasiWebJars.java" %}

Nah jadi kita hanya memambahkan konfigurasi seperti berikut:

{% highlight java %}
@Override
public void addResourceHandlers(ResourceHandlerRegistry registry) {
    registry
      .addResourceHandler("/webjars/**")
      .addResourceLocations("classpath:/META-INF/resources/webjars/");
}
{% endhighlight %}

Nah dari konfigurasi tersebut bisa di pahami bahwa karena kita loadnya dari `.jar` maka ditambahkan `classpath:[lokasi]` jadi nanti untuk meng-include-kannya menggunakan `/webjars/nama-lib/versi/file.css` contohnya kita modifikasi file `halo.jsp` menjadi seperti berikut:

{% gist page.gist "haloBootstrap.jsp" %}

Setelah itu coba di running dengan menggunakan perintah berikut:

{% highlight bash %}
mvn clean package tomcat7:run
{% endhighlight %}

Setelah tomcat servernya running maka coba browse url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/halo
```

Maka tampilanya akan berubah, memang tidak telalu kelihatan karena ukurannya saya perkecil tapi klo di ukuran desktop jadi terlihat bootstrap nya udah aktif seperti berikut

![Bootstrap enabled]({{ page.image_path }}spring-webmvc-3.png)

Dan klo di view source maka seperti berikut:

![View source]({{ page.image_path }}spring-webmvc-5.png)

Sekarang coba browse url berikut:

```
http://localhost:8080/tutorial.spring-webmvc/webjars/bootstrap/3.3.7/css/bootstrap.min.css
```

Maka hasilnya seperti berikut:

![Bootstrap css loaded]({{ page.image_path }}spring-webmvc-4.png)

Ok mungkin sekian dulu apa yang bisa saya share tentang WebJars di Spring Framework Web MVC, mohon maaf jika ada kesalahan. See you next post!.
