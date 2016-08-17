---
layout: post
title: "Memamahi file konfigurasi Apache Maven (pom.xml)"
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

Seperti yang saya jelaskan di awal, bahwa software build-tools ini biasanya memiliki konfigurasi sendiri2 contohnya apache maven ini menggunakan file ```pom.xml``` sedangkan untuk gradle menggunakan ```build.gradle``` untuk menampung konfigurasi seperti dependency management, plugins, properties aplikasi contohnya version, nama aplikasi, contributors dan lain-lain.

Nah kalo kita buka file ```pom.xml``` menggunakan text-editor seperti berikut:

<!--more-->

{% highlight xml %}
<!-- XML header untuk maven project -->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
<!-- end XML header untuk maven project -->

<!-- aplikasi properties -->
  <groupId>com.hotmail.dimmaryanto.software</groupId>
  <artifactId>template-mvn-quickstart</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>template-mvn-quickstart</name>
  <url>http://maven.apache.org</url>
<!-- end aplikasi properties -->

<!-- character encoding -->
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>
<!-- end character encoding -->

<!-- library -->
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>3.8.1</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
<!--end library -->
</project>
{% endhighlight %}

## XML header

Apache maven ini sebenarnya configurasi menggunakan format ```xml```, berbeda dengan gradle yang menggunakan format ```json```. Dengan diawali dengan tag

{% highlight xml %}
<project>
  <!-- configurasi -->
</project>
{% endhighlight %}

kemudian dalam tag project memiliki atribut sebagai berikut

* ```xmlns``` yaitu sebagai validator atau validasi tag yang digunakan tersedia tidak.
* ```xmlns:xsi``` yaitu sebagai namespace
* ```xsi:schemaLocation``` yaitu location schema namespace

## Aplikasi properties

Untuk aplikasi properties ini sebenarnya udah saya jelaskan tadi di saat membuat [project dengan maven archetype](#membuat-project-dari-maven-archetype) tpi by the way gak masalah saya jelaskan ulang ya!

{% highlight xml %}
  <groupId>com.hotmail.dimmaryanto.software</groupId>
  <artifactId>template-mvn-quickstart</artifactId>
  <version>1.0-SNAPSHOT</version>
  <packaging>jar</packaging>

  <name>template-mvn-quickstart</name>
  <url>http://maven.apache.org</url>
{% endhighlight %}

* ```groupId``` yaitu workspace yang bisa menampung banyak ```artifactId```
* ```artifactId``` yaitu kode aplikasi, klo disamakan dengan database sama kayak **primary key dalam tabel** jadi dalam satu ```groupId``` tidak boleh ada ```artifactId``` yang sama.
* ```version``` yaitu menandakan versi sebuah aplikasi yang akan kita bangun jadi contohnya klo aplikasinya masih development contohnya ```1.0-SNAPSHOT```, ```1.2-SNAPSHOT```, ```2.1-SNAPSHOT``` dan seterusnya, Sedangkan untuk production langsung sebuatkan versinya atau menggunakan keyword ```final``` jadi contohnya ```1.0-final```, ```1.2-final``` dan seterusnya```
* ```name``` yaitu Nama dari sebuah aplikasi, klo yang ini bebas terserah tidak ada aturan yang baku karena biasanya hanya ditampilkan sebagai title atau judul aplikasi.
* ```packaging``` yaitu hasil akhirnya akan dibuat ke format archive ```jar``` atau ```war```, karena project yang saya mau dibuat jadi **Desktop aplikasi** maka packagingnya yang saya pilih adalah ```jar``` sedangkan untuk **Web aplikasi** maka pilih ```war```.

## Library

Dalam tag ```dependencies``` digunakan untuk menambahkan library, tools, framework dan lain-lain.

{% highlight xml %}
<dependencies>
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>3.8.1</version>
    <scope>test</scope>
  </dependency>
</dependencies>
{% endhighlight %}

Untuk memisahkan antara libary yang satu dengan yang lainnya dipisahkan dengan tag ```dependency``` contohnya seperti berikut:

{% highlight xml %}
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>3.8.1</version>
  <scope>test</scope>
</dependency>
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>6.0.2</version>
</dependency>
{% endhighlight %}

Nah mungkin dari kalian binggung, untuk mendapatkan dependency ini

{% highlight xml %}
<dependency>
  <groupId>mysql</groupId>
  <artifactId>mysql-connector-java</artifactId>
  <version>6.0.2</version>
</dependency>
{% endhighlight %}

dari mana????? jawabanya [Maven Repository Central (http://search.maven.org/)](http://search.maven.org/) trus anda tinggal cari aja butuh libary apa nanti bakal tampil kayak gini, contohnya saya mau pake library ```MySQL```

![Mysql connector java](/images/2016-07/apache-maven/maven-repo-central.png)

Nah udah itu kita tinggal pilih aja library yang mana yang mau dipake, setelah itu klik versinya. Contohnya saya pilih groupId ```mysql```, artifactId ```mysql-connector-java``` dan version ```6.0.2``` maka akan tampil seperti berikut dan anda bisa lihat dibagian ini:

![Dependency information](/images/2016-07/apache-maven/mvn-dependecy-info.png)

Setelah itu tinggal copy-paste ke pom.xml setelah itu baru library dalam ```mysql-connector-java``` bisa digunakan.

### Scope dependency

{% highlight xml %}
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>3.8.1</version>
  <scope>test</scope>
</dependency>
{% endhighlight %}

Untuk scope dalam dependency pada dasarnya terdiri dari 4 yaitu

* compile
* runtime
* provided
* test

Berikut penjelasanya

### Compile

Scope ini pada dasarnya default, jadi tanpa menggunakan scope secara default maven akan memilih compile. Nah yang jadi pertanyaan apa fungsi scope compile???

Fungsinya adalah library yang kita tambahkan akan digunakan di source code kita (diimport). Contohnya kita mau pake library ```org.jodatime``` berarti nanti di source code kita pasti ada import

{% highlight java %}
package com.hotmail.dimmaryanto.software;

import org.joda.time.LocalDate;
import org.joda.time.DateTime;
// dan lain
public class FungsiJodaTime{

  public static void main(String[] args){
    // terus librarynya kita pake
    Localdate date = LocalDate.now();
    System.out.println(date);
  }

}
{% endhighlight %}

tapi jangan lupa kita juga harus tambahkan dependencynya ke ```pom.xml``` seperti berikut

{% highlight xml %}
<dependency>
  <groupId>joda-time</groupId>
  <artifactId>joda-time</artifactId>
  <version>2.9.4</version>
</dependency>
{% endhighlight %}

setelah itu kita jalankan dengan perintah

{% highlight bash %}
mvn exec:java -Dexec.mainClass=com.hotmail.dimmaryanto.software.FungsiJodaTime
{% endhighlight %}

dan hasilnya maka akan seperti berikut

<div class="language-bash highlighter-rouge"><pre class="highlight" data-line="10"><code><span class="gp">dimmaryanto@MSI-Z87:~/temp/dimmaryanto-blog/java-buildtools-mvn/template-mvn-quickstart$ </span>mvn <span class="nb">exec</span>:java -Dexec.mainClass<span class="o">=</span>com.hotmail.dimmaryanto.software.FungsiJ
odaTime
<span class="o">[</span>INFO] Scanning <span class="k">for </span>projects...
<span class="o">[</span>INFO]                                                                         
<span class="o">[</span>INFO] ------------------------------------------------------------------------
<span class="o">[</span>INFO] Building template-mvn-quickstart 1.0-SNAPSHOT
<span class="o">[</span>INFO] ------------------------------------------------------------------------
<span class="o">[</span>INFO]
<span class="o">[</span>INFO] --- <span class="nb">exec</span>-maven-plugin:1.5.0:java <span class="o">(</span>default-cli<span class="o">)</span> @ template-mvn-quickstart ---
Sekarang tanggal 2016-06-17T14:47:29.541+07:00
<span class="o">[</span>INFO] ------------------------------------------------------------------------
<span class="o">[</span>INFO] BUILD SUCCESS
<span class="o">[</span>INFO] ------------------------------------------------------------------------
<span class="o">[</span>INFO] Total <span class="nb">time</span>: 0.464 s
<span class="o">[</span>INFO] Finished at: 2016-06-17T14:47:29+07:00
<span class="o">[</span>INFO] Final Memory: 11M/212M
<span class="o">[</span>INFO] ------------------------------------------------------------------------
</code></pre>
</div>

### Runtime

Scope runtime ini, kita tidak diperkenankan untuk melakukan import kedalam source code yang kita tulis tetapi ketika di execution library tersebut dikenali. Contohnya ```mysql-connector-java``` kenapa? jawabanya biasanya kita membuat koneksinya supaya lebih canggih menggunakan ```commons-pool``` atau menggunakan konsep JPA jadi kita hanya mengimport class ```java.sql.*``` jadi ketika databasenya berubah contohnya dari MySQL ke PostgreSQL kita hanya perlu merubah dependency ke ```org.postgresql``` dan tidak perlu merubah source code yang kita tulis. Implementasinya seperti berikut

{% highlight xml %}
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>6.0.2</version>
    <scope>runtime</scope>
</dependency>
{% endhighlight %}

### Provided

Scope provided ini, kombinasi dari runtime dan compile jadi kita **diperbolehkan import tetapi pada saat kita melakukan package dependencynya tidak akan di include ke hasil akhirnya**. Biasanya scope ini digunakan untuku aplikasi webapp, jadi untuk membuat aplikasi java webapp membutuhkan dependency webserver yang biasanya terdiri Servlet dan JSP, nah biasanya di webserver dependency tersebut udah disediakan tapi di workspace kita belum ada karena klo anda menggunakan JDK Standart Edition maka dalam JDK tersebut belum memiliki paket Enterprice Edition, maka dari itu supaya library yang diimport **tidak bentrok antara dependency yang sudah diinstall pada webserver dan di aplikasi**. berikut implementasinya

{% highlight xml %}
<dependency>
  <groupId>javax.servlet</groupId>
  <artifactId>javax.servlet-api</artifactId>
  <version>4.0.0-b01</version>
  <scope>provided</scope>
</dependency>
{% endhighlight %}

### Test

Scope test, pada dasarnya ini **dependencynya hanya dikenali saat kita melakukan test** dengan perintah ```mvn test``` **dan tidak akan diincludekan ke hasil akhir**. berikut implementasinya

{% highlight xml %}
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>3.8.1</version>
  <scope>test</scope>
</dependency>
{% endhighlight %}

Jika anda kurang jelas dengan penjelasan saya di atas berikut ada versi videonya seperti berikut:

{% youtube "https://youtu.be/KtDW5bxNx1I" %}

Ok mungkin cukup sekian posting tentang memahami file konfigurasi di Apache Maven, semoga bermanfaat. See you next post!
