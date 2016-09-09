---
layout: post
title: "Fitur-fitur Apache Maven"
date: 2016-08-17T12:42:17+07:00
author: Dimas Maryanto
comments: yes
page_category: maven
language: java
repository: https://github.com/dimMaryanto93/belajar-apache-maven.git
categories:
- Java
- BuildTool
- Maven
tags:
- Java
- Build Tools
- Apache Maven
- Netbeans
- Eclipse
- IDEA
references:
- https://maven.apache.org/
- http://software.endy.muhardin.com/java/apache-maven/
---

Dengan menggunakan build tool pada umumnya kita akan dipermudah dengan adanya fitur yang meliputi:

* Dependency management
* Compile
* Package
* Run
* Test

Ok sekarang kita extract point-point tersebut seperti berikut:

<!--more-->

## Dependency Management

Dependency management ini mengatur library, framework dan tools yang tersedia dan siap digunakan untuk kita contoh kasus dalam sebuat team terdapat 5 orang yang berbeda environtment dan sistem operasinya, 2 orang menggunakan sistem operasi Windows dan 2 orang menggunakan sistem operasi linux dan 1 orang lagi menggunakan Mac OS. klo sistem operasi linux atau mac os masih ok lah ya masih satu keluarga UNIX tpi bagaimana dengan windows? perbedaan yang mendasar yaitu klo di windows menggunakan letter path di media penyimpannanya contohnya ```C:/, D:/ dan serusnya``` sedangkan di keluarga UNIX biasanya strukturnya ```/ /usr /share /opt dan lain-lain```.

Terkait dengan hal itu akan berakibat klo misalnya programmer yang menggunakan Windows menyimpan library ```D://folder/lib.jar``` sedangkan programmer yang linux juga menggunakan library tersebut ```lib.jar``` solusinya khan bisanya programmer linux itu minta copy nya ke programmer windows tersebut gimana ribet khan? gimana klo ada 20 - 100 programmer kayak gitu khan berabe malah gak ngerjain koding malah mintain library mulu.

Inilah alasan saya menggunakan build tools karena masalah library tersebut bisa dihandle dengan mudah. biasaya untuk build tools menyimpan libarary di tempat yang memang bisa diakses oleh semua sistem operasi contohnya klo kita menggunakan maven untuk linux akan ditemukan di ```/home/user-anda/.m2/repository``` sedangkan untuk Windows di ```C:\Users\user-anda\.m2\repository```.

## Compile

Seperti yang anda ketahui tanpa build tools pun semua bahasa pemograman yang siftatnya compilation (midle-level programming) punya fasilitas ini tapi kelebihannya adalah klo menggunakan build tools ini kita akan mudah melakukanya. contohnya klo menggunakan maven biasanya script untuk melakukan compile adalah

{% highlight bash %}
mvn compile
{% endhighlight %}

## Package

Setelah melakukan melakukan koding biasanya kita melakukan packaging artinya aplikasi kita siap buat di jadikan sebagai executeable, biasanya klo di Windows extensionnya ```.exe``` sedangkan klo di Linux extensionnya ```.sh```. Di Java sebenernya punya packaging sendiri jadi untuk **desktop atau library** biasanya ```.jar``` sedangkan untuk **web base** itu extensionnya ```.war```. Nah dengan melakukan packaging dengan contohnya maven kita cukup dengan menggunakan command

{% highlight bash %}
mvn package
{% endhighlight %}

atau kita bisa menggunakan plugin untuk mem-packaging supaya dependencynya ikut disertakan ke ```.jar``` atau ```.war``` [baca disini](http://maven.apache.org/plugins/maven-assembly-plugin/usage.html)

## Run

Selain compile anda juga dapat menjalan aplikasi dengan mudah contohnya klo anda seorang java web developer pasti anda kenal dengan web server apache tomcat, jetty atau lain-lain, nah kita bisa melakukan **auto-deploy ke web server** tersebut contohnya klo kita menggunakan apache tomcat berikut commandnya

{% highlight bash %}
mvn compile exec:java -Dexec.mainClass=lokasi.package.NamaKelas
{% endhighlight %}

## Test

Kemudian selain fitur diatas, yang tidak kalah seru itu dengan menggunakan build tools rata-rata sudah disediakan framework untuk **unit testing** contohnya Maven defaultnya untuk integrasi dengan [JUnit](http://junit.org/junit4/). Unit testing ini intinya adalah untuk melakukan automated testing. untuk menjalankan serangkaian Unit Testing berikut adalah commandnya

{% highlight bash %}
mvn test
{% endhighlight %}

Kalo kurang jelas dengan penjelasan berikut ada versi videonya seperti berikut:

{% youtube "https://youtu.be/seO95BceaXM" %}

Mungkin sekian dulu penjelasanya. see you next post!.
