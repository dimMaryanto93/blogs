---
layout: post
title: "Apache Maven, sebagai build tools untuk membangun aplikasi productions"
author: Dimas Maryanto
comments: yes
os:
- windows8
- linux
- apple
- debian
- ubuntu
- redhat
- android
language: java
repository: https://github.com/dimMaryanto93/tutorial-java-mvn.git
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
- http://gradle.org/
- http://software.endy.muhardin.com/java/apache-maven/
- http://maven.apache.org/plugins/maven-assembly-plugin/usage.html
---

Halo kembali lagi di blog saya, nah kali ini saya akan membahas tentang software yang basicnya atau dikategorikan sebagai build tools yaitu Apache Maven. tapi sebelum kita belajar tentang Apache Maven, kita harus tau dulu apa itu Apache Maven? apa bedanya dengan menggunakan java biasa? dll.

<!--more-->

Memang dalam membangun sebuah software memang tidak bisa dipandang sebelah mata, kita membutuhkan fondasi yang kokoh dibawahnya. Mengapa saya menyebutkan demikian, jawabanya adalah klo kita membuat aplikasi yang sangat kompleks bukan untuk aplikasi karya ilmiah (Skripsi, Belajar dan lain-lain) **dalam arti aplikasi production** (Aplikasi yang benar-benar digunakan di kehipan nyata) gak seperti karya ilmiah, ya klo dikira" perbedaanya 10% lah karena banyak hal yang harus dipikirkan seperti **correctness, performance, stable, dapat dipelihara dengan mudah source codenya dan masih banyak lagi yang bikin mumet** (pusing pala berbi #laguDangdut).

Biasanya klo aplikasi karya ilmiah khususnya skripsi itu hanya CRUD (Cread Read Update Delete) + sedikit algoritma baik itu dari bahasa pemograman nya atau dari database. Selain itu juga untuk **aplikasi yang sifatnya production biasanya tidak bekerja sendiri** biasnya jumlah team terdiri 5 orang atau bisa lebih banyak klo projectnya besar, Karena kita bekerja dengan programmer orang lain timbullah masalah baru lagi yaitu ini pengalaman saya pribadi, **project terbengkalai karena kebanyakan debat sama programer lain tentang masalah sepele** yaitu penempatan folder yang berbeda karena stadard setiap programmer pasti beda.
Maka solusinya **sekarang saya sudah menggunakan salah satu build tools untuk membuat software untuk projectkan atau pun project kecil seperti membuat skripsi mahasiswa. karena rata" saya hanya meneriman projectkan menggunakan teknologi Java jadi salah satu pilihan saya adalah [Apache Maven](https://maven.apache.org/)**. Kenapa menggunakan maven jawabanya adalah menurut saya paling mudah digunakan dan secara default Maven ini sudah dikenal di berbagai macam text editor contohnya Netbeans, Eclipse, InteliJ IDEA dan lain-lain. Selain build tools yang saya sebutkan barusan ada lagi sebagai berikut

* Java
  * [Gradle](http://gradle.org/)
  * [Ant](http://ant.apache.org/)
  * [Apache Maven](https://maven.apache.org/)
* PHP
  * [Composer](https://getcomposer.org/) (Masuknya ke dependency manager)
* Javascript
  * [gruntJs](http://gruntjs.com/)
  * [gulpJs](http://gulpjs.com/)
* Ruby
  * [rake](http://rake.rubyforge.org/)
* dan masih banyak lagi...

## Install Apache Maven

Nah sekarang kita akan menginstall apache maven di Windows 10, Linux Ubuntu dan Fedora 23, pertama saya mau install di Windows 10 dulu karena klo di windows ini agak ribet dan lumayan panjang stepnya. tpi sebelum installal maven kita harus pastikan anda telah mengginstall JDK dan setting ```JAVA_HOME``` klo belum silahkan install terlebih dahulu lihat [cara install jdk]({% post_url 2016-07-28-java-dev-en %})

### Install Maven di Windows 10

Untuk installasi di Windows ini kita harus **Download dulu binary** ```zip```, silahkan anda [download di dari sini](https://maven.apache.org/download.cgi) kemudian pilih ```apache-maven-3.3.9-bin.zip``` seperti gambar berikut:

![Download Apache Maven zip](/images/2016-07/apache-maven/mvn-download.png)

setelah berhasil didownload kemudian di extract lokasinya bebas terserah anda klo saya simpanya di ```C:\``` jadi ```C:\apache-maven``` nah setelah itu kita setting setting variablenya dengan cara seperti biasa. Buka **File Explorer** kemudian **Klik Kanan** di menu **This PC** atau **My Computer**, maka akan tampil system info seperti berikut:

![System Info Windows](/images/2016-07/java-dev-en/setpath-jdk-1.png)

Kemudian kita ke **Klik Advanced system setting** maka akan menampilkan form seperti berikut:

![System Advanced settings](/images/2016-07/java-dev-en/setpath-jdk-2.png)

Setelah itu kita **Klik Environtment Variables...** maka akan menampilkan form seperti berikut:

![System Variables List](/images/2016-07/apache-maven/mvn-setpath-1.png)

Nah sekarang kita tinggal **edit** variable **Path** kemudian **tambahkan** lokasi hasil extract dengan sub direktori ```bin``` jadi lokasinya gini ```C:\apache-maven\bin``` seperti gambar berikut:

![System Variable edited](/images/2016-07/apache-maven/mvn-setpath-2.png)

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

nah sampe sini kita telah berhasil menginstall Apache Maven di Windows Selanjut nya kita akan install di Linux menggunakan software tambahan yaitu SDKMAN.

### Install Maven di Linux Menggunakan SDKMAN

### Install Maven di Linux Ubuntu dari ```apt-get```

### Install Maven di Linux Fedora 23/24 dari ```dnf```

Seperti biasa kita buka terminanya, kemudian masuk sebagai ```root``` terlebih dahulu dan berikut adalah perintah untuk menginstall maven:

{% highlight bash %}
$ sudo dnf install maven -y
{% endhighlight %}

jika telah selesai maka kita bisa cek hasilnya dengan menggunakan perintah berikut:

{% highlight bash %}
mvn -version
{% endhighlight %}

maka akan ```dnf``` kurang lebih akan menginstall dependencynya seperti output berikut:

{: .output }{% highlight bash %}
Dependencies resolved.
================================================================================
 Package                           Arch   Version              Repository Size
================================================================================
Installing:
 aether-api                        noarch 1:1.0.2-4.fc24          fedora  138 k
 aether-connector-basic            noarch 1:1.0.2-4.fc24          fedora   47 k
 aether-impl                       noarch 1:1.0.2-4.fc24          fedora  173 k
 aether-spi                        noarch 1:1.0.2-4.fc24          fedora   37 k
 aether-transport-wagon            noarch 1:1.0.2-4.fc24          fedora   35 k
 aether-util                       noarch 1:1.0.2-4.fc24          fedora  145 k
 aopalliance                       noarch 1.0-12.fc24             fedora   16 k
 apache-commons-cli                noarch 1.3.1-3.fc24            fedora   72 k
 apache-commons-codec              noarch 1.10-3.fc24             fedora  247 k
 apache-commons-io                 noarch 1:2.4-15.fc24           fedora  192 k
 apache-commons-lang               noarch 2.6-18.fc24             fedora  281 k
 apache-commons-lang3              noarch 3.4-4.fc24              fedora  416 k
 apache-commons-logging            noarch 1.2-5.fc24              fedora   86 k
 atinject                          noarch 1-22.20100611svn86.fc24 fedora   19 k
 cdi-api                           noarch 1.2-3.fc24              updates 142 k
 glassfish-el-api                  noarch 3.0.0-8.fc24            fedora   81 k
 google-guice                      noarch 4.0-4.fc24              fedora  459 k
 guava                             noarch 18.0-4.fc23             fedora  1.9 M
 httpcomponents-client             noarch 4.5.2-2.fc24            fedora  700 k
 httpcomponents-core               noarch 4.4.4-2.fc24            fedora  633 k
 jboss-interceptors-1.2-api        noarch 1.0.0-4.fc24            fedora   32 k
 jsoup                             noarch 1.8.3-2.fc24            fedora  312 k
 jsr-305                           noarch 0-0.19.20130910svn.fc24 fedora   33 k
 maven                             noarch 3.3.9-4.fc24            fedora  1.4 M
 maven-wagon-file                  noarch 2.10-2.fc24             fedora   25 k
 maven-wagon-http                  noarch 2.10-2.fc24             fedora   48 k
 maven-wagon-http-shared           noarch 2.10-2.fc24             fedora   25 k
 maven-wagon-provider-api          noarch 2.10-2.fc24             fedora   62 k
 objectweb-asm                     noarch 5.0.4-2.fc24            fedora  582 k
 plexus-cipher                     noarch 1.7-11.fc24             fedora   28 k
 plexus-classworlds                noarch 2.5.2-4.fc24            fedora   64 k
 plexus-containers-component-annotations
                                   noarch 1.6-5.fc24              fedora   17 k
 plexus-interpolation              noarch 1.22-5.fc24             fedora   78 k
 plexus-sec-dispatcher             noarch 1.4-21.fc24             fedora   31 k
 plexus-utils                      noarch 3.0.22-3.fc24           fedora  254 k
 publicsuffix-list                 noarch 20160713-1.fc24         updates  67 k
 sisu-inject                       noarch 1:0.3.2-4.fc24          fedora  269 k
 sisu-plexus                       noarch 1:0.3.2-4.fc24          fedora  189 k
 slf4j                             noarch 1.7.18-1.fc24           fedora   70 k
Transaction Summary
================================================================================
Install  39 Packages
{% endhighlight %}

setelah semua diinstall maka kita bisa cek, apakah maven udah dikenali oleh system fedora, dengan menggunakan perintah berikut:

{% highlight bash %}
mvn -version
{% endhighlight %}

maka akan menampilkan output seperti berikut:

{% highlight bash %}
[dimmaryanto93@localhost ~]$ mvn -version
Apache Maven 3.3.9 (NON-CANONICAL_2016-04-07T23:15:34Z_mockbuild; 2016-04-08T06:15:34+07:00)
Maven home: /usr/share/maven
Java version: 1.8.0_101, vendor: Oracle Corporation
Java home: /usr/java/jdk1.8.0_101/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.6.4-301.fc24.x86_64", arch: "amd64", family: "unix"
[dimmaryanto93@localhost ~]$
{% endhighlight %}

## Keungulan Build Tools

Dengan menggunakan build tool pada umumnya kita akan dipermudah seperti berikut:

* Dependency management
* Compile
* Package
* Run
* Test

<hr/>

### Dependency Management

Dependency management ini mengatur library, framework dan tools yang tersedia dan siap digunakan untuk kita contoh kasus dalam sebuat team terdapat 5 orang yang berbeda environtment dan sistem operasinya, 2 orang menggunakan sistem operasi Windows dan 2 orang menggunakan sistem operasi linux dan 1 orang lagi menggunakan Mac OS. klo sistem operasi linux atau mac os masih ok lah ya masih satu keluarga UNIX tpi bagaimana dengan windows? perbedaan yang mendasar yaitu klo di windows menggunakan letter path di media penyimpannanya contohnya ```C:/, D:/ dan serusnya``` sedangkan di keluarga UNIX biasanya strukturnya ```/ /usr /share /opt dan lain-lain```.

Terkait dengan hal itu akan berakibat klo misalnya programmer yang menggunakan Windows menyimpan library ```D://folder/lib.jar``` sedangkan programmer yang linux juga menggunakan library tersebut ```lib.jar``` solusinya khan bisanya programmer linux itu minta copy nya ke programmer windows tersebut gimana ribet khan? gimana klo ada 20 - 100 programmer kayak gitu khan berabe malah gak ngerjain koding malah mintain library mulu.

Inilah alasan saya menggunakan build tools karena masalah library tersebut bisa dihandle dengan mudah. biasaya untuk build tools menyimpan libarary di tempat yang memang bisa diakses oleh semua sistem operasi contohnya klo kita menggunakan maven untuk linux akan ditemukan di ```/home/user-anda/.m2/repository``` sedangkan untuk Windows di ```C:\Users\user-anda\.m2\repository```.

<hr/>

### Compile

Seperti yang anda ketahui tanpa build tools pun semua bahasa pemograman yang siftatnya compilation (midle-level programming) punya fasilitas ini tapi kelebihannya adalah klo menggunakan build tools ini kita akan mudah melakukanya. contohnya klo menggunakan maven biasanya script untuk melakukan compile adalah

{% highlight bash %}
mvn compile
{% endhighlight %}

<hr/>

### Package

Setelah melakukan melakukan koding biasanya kita melakukan packaging artinya aplikasi kita siap buat di jadikan sebagai executeable, biasanya klo di Windows extensionnya ```.exe``` sedangkan klo di Linux extensionnya ```.sh```. Di Java sebenernya punya packaging sendiri jadi untuk **desktop atau library** biasanya ```.jar``` sedangkan untuk **web base** itu extensionnya ```.war```. Nah dengan melakukan packaging dengan contohnya maven kita cukup dengan menggunakan command

{% highlight bash %}
mvn package
{% endhighlight %}

atau kita bisa menggunakan plugin untuk mem-packaging supaya dependencynya ikut disertakan ke ```.jar``` atau ```.war``` [baca disini](http://maven.apache.org/plugins/maven-assembly-plugin/usage.html)

<hr/>

### Run

Selain compile anda juga dapat menjalan aplikasi dengan mudah contohnya klo anda seorang java web developer pasti anda kenal dengan web server apache tomcat, jetty atau lain-lain, nah kita bisa melakukan **auto-deploy ke web server** tersebut contohnya klo kita menggunakan apache tomcat berikut commandnya

{% highlight bash %}
mvn compile package tomcat:run
{% endhighlight %}

<hr/>

### Test

Kemudian selain fitur diatas, yang tidak kalah seru itu dengan menggunakan build tools rata-rata sudah disediakan framework untuk **unit testing** contohnya Maven defaultnya untuk integrasi dengan [JUnit](http://junit.org/junit4/). Unit testing ini intinya adalah untuk melakukan automated testing. untuk menjalankan serangkaian Unit Testing berikut adalah commandnya

{% highlight bash %}
mvn test
{% endhighlight %}
