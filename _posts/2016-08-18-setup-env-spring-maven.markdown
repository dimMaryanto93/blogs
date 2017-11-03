---
layout: post
title: "Setup development environment untuk Spring Framework"
date: 2016-08-18T18:19:16+07:00
author: Dimas Maryanto
comments: yes
page_category: springframework
language: java
gist:
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
image_path: /images/2016-08/spring-di-2/
---

Di [artikel sebelumnya]({% post_url 2016-08-18-intro-springframework %}) kita telah memahami tentang konsep Dependency Injection tanpa menggunakan Spring Framework, sekarang kita akan menggunakan Spring Framework. OK sekarang kita buat project dengan menggunakan Apache Maven kalo teman teman belum mengerti tentang Maven silahkan [baca dulu artikel ini]({{ site.url }}/halaman/framework/apache-maven/).

<!--more-->

Membuat project dengan menggunakan ```maven-archetype-quickstart```

{% highlight bash %}
mvn archetype:generate -DartifactId=springframework-belajar -DgroupId=com.hotmail.dimmaryanto.software -Dversion=1.0-SNAPSHOT -DarchetypeCatalog="internal" -DarchetypeArtifactId=maven-archetype-quickstart
{% endhighlight %}

Kemudian Enter aja, berikut outputnya:

{% highlight bash %}
C:\Users\softw\Documents\temp>mvn archetype:generate
    -DartifactId=springframework-belajar
    -DgroupId=com.hotmail.dimmaryanto.software
    -Dversion=1.0-SNAPSHOT
    -DarchetypeCatalog="internal"
    -DarchetypeArtifactId=maven-archetype-quickstart

[INFO] Using property: groupId = com.hotmail.dimmaryanto.software
[INFO] Using property: artifactId = springframework-belajar
[INFO] Using property: version = 1.0-SNAPSHOT
[INFO] Using property: package = com.hotmail.dimmaryanto.software
Confirm properties configuration:
groupId: com.hotmail.dimmaryanto.software
artifactId: springframework-belajar
version: 1.0-SNAPSHOT
package: com.hotmail.dimmaryanto.software
 Y: : # tekan enter

 # outputnya seperti berikut
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-quickstart:1.0
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: C:\Users\softw\Documents\temp
[INFO] Parameter: package, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: groupId, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: artifactId, Value: springframework-belajar
[INFO] Parameter: packageName, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: C:\Users\softw\Documents\temp\springframework-belajar
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 13.386 s
[INFO] Finished at: 2016-08-18T17:42:00+07:00
[INFO] Final Memory: 14M/116M
[INFO] ------------------------------------------------------------------------

C:\Users\softw\Documents\temp>
{% endhighlight %}

Sekarang tinggal buka pake text-editor atau IDE yang teman-teman sukai, kalau saya pake Netbeans aja, biar Mainstream. Kemudian tinggal Open project dan pilih projectnya yang tadi klo saya bikinnya di folder ```C:\Users\softw\Documents\temp\``` seperti berikut:

![Netbean open project]({{ page.image_path }}netbeans-open-project.png)

Nah ini struktur projectnya:

![Maven struktur project]({{ page.image_path }}project-opened.png)

Sekarang kita tinggal tambahkan dependency atau librarynya springframework yaitu dengan cara **Klik Kanan** di folder **Dependencies** kemudian **Add Dependency** maka akan tampil form seperti berikut:

![Add lib spring-context]({{ page.image_path }}add-dependency-spring-context.png)

Kemudian pilih dependencynya seperti gambar diatas, setelah itu **OK** maka hasilnya seperti berikut:

![Maven dependency spring-context]({{ page.image_path }}spring-context-dependency.png)

Klo anda lihat file ```pom.xml``` udah berubah jadi seperti berikut:

{% highlight xml %}
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.hotmail.dimmaryanto.software</groupId>
    <artifactId>springframework-belajar</artifactId>
    <packaging>jar</packaging>
    <version>1.0-SNAPSHOT</version>
    <name>springframework-belajar</name>
    <url>http://maven.apache.org</url>
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>3.8.1</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework</groupId>
            <artifactId>spring-context</artifactId>
            <version>4.3.2.RELEASE</version>
        </dependency>
    </dependencies>
</project>
{% endhighlight %}

Nah sekarang kita udah bisa menggunakan frameworknya Spring core alias Spring Framework. Mungkin sekian dulu untuk setup development environtment untuk Spring Framework. See you next post!.
