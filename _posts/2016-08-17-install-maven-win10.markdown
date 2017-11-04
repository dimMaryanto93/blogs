---
layout: post
title: "Install Apache Maven di Windows 10"
date: 2016-08-17T09:04:47+07:00
author: Dimas Maryanto
comments: yes
page_category: maven
language: java
gist:
repository:
categories:
- Java
- BuildTool
- Maven
tags:
- Java
- Build Tools
- Apache Maven
references:
- https://maven.apache.org/
---

Pastikan anda telah menginstall Oracle JDK dan setup JAVA_HOME klo belum silahkan install dulu di [artike berikut]({% post_url 2016-07-28-java-dev-en %}), setelah setting Path JAVA_HOME kemudian installasi Apache Maven di Windows 10 ini kita harus **Download dulu binary** ```zip```, silahkan anda [download di dari sini](https://maven.apache.org/download.cgi) kemudian pilih ```apache-maven-3.3.9-bin.zip``` seperti gambar berikut:

![Download Apache Maven zip]({{ site.baseurl }}/images/2016-07/apache-maven/mvn-download.png)

setelah berhasil didownload kemudian di extract lokasinya bebas terserah anda klo saya simpanya di ```C:\``` jadi ```C:\apache-maven``` nah setelah itu kita setting setting variablenya dengan cara seperti biasa. Buka **File Explorer** kemudian **Klik Kanan** di menu **This PC** atau **My Computer**, maka akan tampil system info seperti berikut:

<!--more-->

![System Info Windows]({{ site.baseurl }}/images/2016-07/java-dev-en/setpath-jdk-1.png)

Kemudian kita ke **Klik Advanced system setting** maka akan menampilkan form seperti berikut:

![System Advanced settings]({{ site.baseurl }}/images/2016-07/java-dev-en/setpath-jdk-2.png)

Setelah itu kita **Klik Environtment Variables...** maka akan menampilkan form seperti berikut:

![System Variables List]({{ site.baseurl }}/images/2016-07/apache-maven/mvn-setpath-1.png)

Nah sekarang kita tinggal **edit** variable **Path** kemudian **tambahkan** lokasi hasil extract dengan sub direktori ```bin``` jadi lokasinya gini ```C:\apache-maven\bin``` seperti gambar berikut:

![System Variable edited]({{ site.baseurl }}/images/2016-07/apache-maven/mvn-setpath-2.png)

setelah itu kita **Klik OK** untuk semua form yang tampil untuk accept ditambahkan ke system variables. kemudian kita bisa cek menggunakan Command Prompt, sekarang silahkan buka kemudian masukan perintah berikut:

{% highlight bash %}
mvn -v
{% endhighlight %}

maka akan menampilkan output seperti berikut:

{% highlight bash %}
C:\Users\softw>mvn -v
Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-10T23:41:47+07:00)
Maven home: C:\apache-maven
Java version: 1.8.0_91, vendor: Oracle Corporation
Java home: C:\Program Files\Java\jdk1.8.0_91\jre
Default locale: en_US, platform encoding: Cp1252
OS name: "windows 10", version: "10.0", arch: "amd64", family: "dos"

C:\Users\softw>
{% endhighlight %}