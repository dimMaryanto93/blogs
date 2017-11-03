---
layout: post
title: "Membuat project Java Web &amp; Deploy ke tomcat"
date: 2016-08-22T09:44:27+07:00
author: Dimas Maryanto
comments: yes
page_category: java-servlet
language: java
gist:
repository:
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
image_path: /images/2016-08/java-web-1/
---

Halo di kita telah mengetahui hal apa saja yang harus dilakukan untuk belajar Java Web atau JavaEE, kali ini saya akan membuat project Java Web dengan menggunakan Apache Maven dengan template project ```maven-archetype-webapp```. berikut adalah langkah-langkahnya:

<!--more-->

Membuat project dengan Apache maven

{% highlight bash %}
mvn archetype:generate
  -DartifactId=tutorial-javawebapp
  -DgroupId=com.dimmaryanto93.software
  -DarchetypeCatalog="internal"
{% endhighlight %}

Seperti berikut outputnya:

{% highlight bash %}
C:\Users\softw>cd Documents\temp

C:\Users\softw\Documents\temp>mvn archetype:generate -DartifactId=tutorial-javawebapp -DgroupId=com.dimmaryanto93.software -DarchetypeCatalog="internal"
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] Building Maven Stub Project (No POM) 1
[INFO] ------------------------------------------------------------------------
[INFO]
[INFO] >>> maven-archetype-plugin:2.4:generate (default-cli) > generate-sources @ standalone-pom >>>
[INFO]
[INFO] <<< maven-archetype-plugin:2.4:generate (default-cli) < generate-sources @ standalone-pom <<<
[INFO]
[INFO] --- maven-archetype-plugin:2.4:generate (default-cli) @ standalone-pom ---
[INFO] Generating project in Interactive mode
[INFO] No archetype defined. Using maven-archetype-quickstart (org.apache.maven.archetypes:maven-archetype-quickstart:1.0)
{% endhighlight %}

Nah sekarang kita disuruh milih template projectnya, pilih yang groupId=```org.apache.maven.archetypes``` dan dengan artifactId=```maven-archetype-webapp``` atau ketik ```10``` seperti berikut:

{% highlight bash %}
Choose archetype:
1: internal -> org.apache.maven.archetypes:maven-archetype-archetype (An archetype which contains a sample archetype.)
2: internal -> org.apache.maven.archetypes:maven-archetype-j2ee-simple (An archetype which contains a simplifed sample J2EE application.)
3: internal -> org.apache.maven.archetypes:maven-archetype-plugin (An archetype which contains a sample Maven plugin.)
4: internal -> org.apache.maven.archetypes:maven-archetype-plugin-site (An archetype which contains a sample Maven plugin site.
      This archetype can be layered upon an existing Maven plugin project.)
5: internal -> org.apache.maven.archetypes:maven-archetype-portlet (An archetype which contains a sample JSR-268 Portlet.)
6: internal -> org.apache.maven.archetypes:maven-archetype-profiles ()
7: internal -> org.apache.maven.archetypes:maven-archetype-quickstart (An archetype which contains a sample Maven project.)
8: internal -> org.apache.maven.archetypes:maven-archetype-site (An archetype which contains a sample Maven site which demonstrates
      some of the supported document types like APT, XDoc, and FML and demonstrates how
      to i18n your site. This archetype can be layered upon an existing Maven project.)
9: internal -> org.apache.maven.archetypes:maven-archetype-site-simple (An archetype which contains a sample Maven site.)
10: internal -> org.apache.maven.archetypes:maven-archetype-webapp (An archetype which contains a sample Maven Webapp project.)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 7: 10 # tekan enter
{% endhighlight %}

Selanjutnya kita akan diberikan confirmasi, tekan Enter aja seperti berikut:

{% highlight bash %}
[INFO] Using property: groupId = com.dimmaryanto93.software
[INFO] Using property: artifactId = tutorial-javawebapp
Define value for property 'version':  1.0-SNAPSHOT: :
[INFO] Using property: package = software.dimmaryanto93.com
Confirm properties configuration:
groupId: software.dimmaryanto93.com
artifactId: tutorial-javawebapp
version: 1.0-SNAPSHOT
package: com.dimmaryanto93.software
 Y: : # Tekan enter
{% endhighlight %}

Maka berikut outputnya:

{% highlight bash %}
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-webapp:1.0
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: C:\Users\softw\Documents\temp
[INFO] Parameter: package, Value: software.dimmaryanto93.com
[INFO] Parameter: groupId, Value: software.dimmaryanto93.com
[INFO] Parameter: artifactId, Value: tutorial-javawebapp
[INFO] Parameter: packageName, Value: com.dimmaryanto93.software
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: C:\Users\softw\Documents\temp\tutorial-javawebapp
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 54.691 s
[INFO] Finished at: 2016-08-22T00:02:09+07:00
[INFO] Final Memory: 15M/155M
[INFO] ------------------------------------------------------------------------

C:\Users\softw\Documents\temp>
{% endhighlight %}

setelah project terbuat, kita sekarang mau coba running di web server (deploy). Untuk mendeploy ke web server kita harus package dulu ke format `.war` caranya menggunakan perintah maven yaitu ```package``` seperti berikut:

```bash
mvn clean compile package
```

Berikut outputnya:

{% highlight bash %}
C:\Users\softw\Documents\temp\tutorial-javawebapp>mvn clean compile package
[INFO] Scanning for projects...
[INFO]
[INFO] ------------------------------------------------------------------------
[INFO] Building tutorial-javawebapp Maven Webapp 1.0-SNAPSHOT
[INFO] ------------------------------------------------------------------------
[INFO] Packaging webapp
[INFO] Assembling webapp [tutorial-javawebapp] in [C:\Users\softw\Documents\temp\tutorial-javawebapp\target\tutorial-javawebapp]
[INFO] Processing war project
[INFO] Copying webapp resources [C:\Users\softw\Documents\temp\tutorial-javawebapp\src\main\webapp]
[INFO] Webapp assembled in [21 msecs]
[INFO] Building war: C:\Users\softw\Documents\temp\tutorial-javawebapp\target\tutorial-javawebapp.war
[INFO] WEB-INF\web.xml already added, skipping
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 0.928 s
[INFO] Finished at: 2016-08-22T09:15:54+07:00
[INFO] Final Memory: 12M/155M
[INFO] ------------------------------------------------------------------------

C:\Users\softw\Documents\temp\tutorial-javawebapp>
{% endhighlight %}

Setelah membuat aplikasi di package menjadi ```.war```, kita jalankan web servernya dengan menjalankan ```startup.bat``` pada folder ```installasi-tomcat/bin/``` seperti berikut:

![Home folder tomcat]({{ page.image_path }}startup-bat.png)

Klik dua kali, maka muncul dialog seperti berikut:

![Tomcat run]({{ page.image_path }}running-tomcat.png)

**Jangan di close** biarkan aja, setelah itu minimaze terminal tersebut. lalu kita bisa browse ke alamat ```http://localhost:8080/``` maka akan tampil home tomcat web server seperti berikut:

![Home tomcat]({{ page.image_path }}home-tomcat.png)

Nah sekarang kita ke **Manager App**, kemudian silahkan anda login sesuai dengan konfigurasi user dan rolenya yang memiliki ```manager-gui``` kalo saya username dan passwordnya ```tomcat```. lalu cari menu **Deploy** seperti berikut:

![menu deploy]({{ page.image_path }}deploy-form.png)

Sekarang kita tinggal **browse** di menu **War file to deploy** maka tampil dialog seperti berikut:

![war to deploy]({{ page.image_path }}file-war-selection.png)

Nah sekarang tinggal diarahkan ke hasil eksekusi maven tadi yaitu dalam folder ```target/``` seperti gambar diatas lalu pilih filenya ```tutorial-javawebapp.war```

Setelah itu klik **Deploy** jika berhasil maka akan tampil di **List Application** seperti berikut:

![list application]({{ page.image_path }}list-application.png)

Kemudian tingall anda klik di **Path** dari ```/tutorial-javawebapp``` maka aplikasi kita sekarang udah bisa dilihat seperti berikut:

![application run]({{ page.image_path }}deployed-war.png)

Ok mungkin sekian dulu apa yang bisa saya sharing tentang, membuat project di Java Web dengan apache maven dan bagaimana cara deploy ke Apache Tomcat8. See you next post!.
