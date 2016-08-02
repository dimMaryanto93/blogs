---
layout: post
title: "Apache Maven, build tools untuk membangun aplikasi productions"
date: 2016-07-30T15:38:00+07:00
author: Dimas Maryanto
comments: yes
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

nah sampe sini kita telah berhasil menginstall Apache Maven di Windows tpi jika anda belum paham sama penjelasannya diatas berikut ada versio videonya:

{% youtube "https://youtu.be/XPM9v5TGl4c" %}

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

berikut ada versi videonya tapi beda caranya masih menggunakan cara manual jadi setupnya kurang lebih sama kayak di Windows seperti berikut:

{% youtube "https://youtu.be/TF6WjsuCkp0" %}

### Install Maven di Linux Ubuntu dari ```apt-get```

Seperti biasa buka terminalnya, kemudian masuk sebagai ```root``` terlebih dahulu dan berikut adalah perintah untuk menginstall maven:

{% highlight bash %}
$ sudo apt-get install maven -y
{% endhighlight %}

jika telah selesai maka kita bisa cek hasilnya dengan menggunakan perintah berikut:

{% highlight bash %}
mvn -version
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

<hr/>

Kalo kurang jelas dengan penjelasan berikut ada versi videonya seperti berikut:

{% youtube "https://youtu.be/seO95BceaXM" %}

## Getting started

Maven archetype adalah software yang digunakan untuk meng-generate template project yang disediakan oleh maven repository central (template-template project yang tersedia di repositorynya maven), sekarang kita akan membuat project dengan ```maven-archetype``` dengan perintah terminal atau command prompt seperti berikut:

{% highlight bash %}
mvn archetype:generate
{% endhighlight %}

Berikut adalah outpunya kita disuruh milih template projectnya:

{% highlight bash %}
Choose archetype:
1: internal -> org.apache.maven.archetypes:maven-archetype-archetype (An archetype which contains a sample archetype.)
2: internal -> org.apache.maven.archetypes:maven-archetype-j2ee-simple (An archetype which contains a simplifed sample J2EE application.)
3: internal -> org.apache.maven.archetypes:maven-archetype-plugin (An archetype which contains a sample Maven plugin.)
4: internal -> org.apache.maven.archetypes:maven-archetype-plugin-site (An archetype which contains a sample Maven plugin site.
      This archetype can be layered upon an existing Maven plugin project.)
5: internal -> org.apache.maven.archetypes:maven-archetype-portlet (An archetype which contains a sample JSR-268 Portlet)
6: internal -> org.apache.maven.archetypes:maven-archetype-profiles ()
7: internal -> org.apache.maven.archetypes:maven-archetype-quickstart (An archetype which contains a sample Maven project.)
8: internal -> org.apache.maven.archetypes:maven-archetype-site (An archetype which contains a sample Maven site which demonstrates
      some of the supported document types like APT, XDoc, and FML and demonstrates how
      to i18n your site. This archetype can be layered upon an existing Maven project.)
9: internal -> org.apache.maven.archetypes:maven-archetype-site-simple (An archetype which contains a sample Maven site.)
10: internal -> org.apache.maven.archetypes:maven-archetype-webapp (An archetype which contains a sample Maven Webapp project.)
Choose a number or apply filter (format: [groupId:]artifactId, case sensitive contains): 7:
{% endhighlight %}

nah jadi kita secara default no ```7``` jadi kita akan dibuatkan template project dengan artifactId ```org.apache.maven.archetypes:maven-archetype-quickstart```, karena kita mau bikin aplikasi desktop jadi biarkan default ja maka tekan **Enter** kemudian kita akan di minta untuk milih versinya dan pilih yang paling beru, setelah itu kita input ```groupId``` seperti berikut:

{% highlight bash %}
Define value for property 'groupId': : com.hotmail.dimmaryanto.software
{% endhighlight %}

jadi maksudnya adalah kita akan membuat workspace yaitu di folder klo di Windows jadi ```C:\User\dimmaryanto\.m2\repository\com\hotmail\dimmaryanto\software``` setelah itu tekan **Enter** dan selanjutnya kita akan diminta untuk input ```artifactId``` seperti berikut:

{% highlight bash %}
  Define value for property 'artifactId': : template-mvn-quickstart
{% endhighlight %}

Jadi kita disini menginputkan nama aplikasinya dengan nama ```template-mvn-quickstart```, Kemudian kita akan ditanya versi dari softwarenya kita biarin default aja. Tekan **Enter**

{% highlight bash %}
  Define value for property 'version':  1.0-SNAPSHOT: :
{% endhighlight %}

Lalu kita akan ditanya mau menyimpan di package yang udah disediakan atau mau diganti, klo saya biarin default aja

{% highlight bash %}
  Define value for property 'package':  com.hotmail.dimmaryanto.software: :
{% endhighlight %}

Kemudian kita melakukan confirmasi atas konfigurasi yang telah kita buat seperti berikut:

{% highlight bash %}
Confirm properties configuration:
groupId: com.hotmail.dimmaryanto.software
artifactId: template-mvn-quickstart
version: 1.0-SNAPSHOT
package: com.hotmail.dimmaryanto.software
 Y: :
{% endhighlight %}

Kemudian tekan **Enter** dan maka berikut adalah log nya:

{% highlight bash %}
[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Old (1.x) Archetype: maven-archetype-quickstart:1.1
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: basedir, Value: /home/dimmaryanto/temp/dimmaryanto-blog/java-buildtools-mvn
[INFO] Parameter: package, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: groupId, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: artifactId, Value: template-mvn-quickstart
[INFO] Parameter: packageName, Value: com.hotmail.dimmaryanto.software
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] project created from Old (1.x) Archetype in dir: /home/dimmaryanto/temp/dimmaryanto-blog/java-buildtools-mvn/template-mvn-quickstart
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 36:58 min
[INFO] Finished at: 2016-06-14T10:45:06+07:00
[INFO] Final Memory: 16M/168M
[INFO] ------------------------------------------------------------------------
{% endhighlight %}

berikut adalah hasil berupa gambar:

![Hasil generate template-mvn-quickstart](/images/2016-07/apache-maven/ls-mvn-template.png)

Nah sekarang kita telah memiliki template project yang telah dibuatkan oleh maven-archetype, berikut adalah struktur direktorinya:

{: .output }{% highlight bash %}
.
├── pom.xml
├── src
│   ├── main
│   │   └── java
│   │       └── com
│   │           └── hotmail
│   │               └── dimmaryanto
│   │                   └── software
│   │                       └── App.java
│   └── test
│       └── java
│           └── com
│               └── hotmail
│                   └── dimmaryanto
│                       └── software
│                           └── AppTest.java
└── target # akan muncul jika telah dicompile
    ├── classes
    │   └── com
    │       └── hotmail
    │           └── dimmaryanto
    │               └── software
    │                   └── App.class
    └── maven-status
        └── maven-compiler-plugin
            └── compile
                └── default-compile
                    ├── createdFiles.lst
                    └── inputFiles.lst

23 directories, 6 files
{% endhighlight %}

## Fungsi struktur folder

Berikut adalah fungsi-fungsi dari template project template-mvn-quickstart. silahkan **baca dengan seksama yak! ini penting** karena Apache Maven memiliki aturan tersediri untuk penempatan **source codenya** seperti berikut:

&nbsp;

<h3><i class="fa fa-folder-open-o"></i> <code>src</code></h3>

Folder ini pada umumnya digunakan menyimpan kodingan kita akan tulis atau bahasa kerennya _source code_.

<hr/>

<h3><i class="fa fa-folder-open-o"></i> <code>src/main/java</code></h3>

Folder ini digunakan untuk menyimpan source code hanya file ```.java``` saja, jika menyimpan file berekstensi lain contohnya ```.xml```, ```.png``` dan lain. maka file tersebut tidak akan ikut diikutsertakan dihasil akhirnya. Untuk membuktikannya ok kita buat file misalnya ```style.css``` dalam folder ini, kurang lebih hasilnya kayak gini.

{% highlight bash %}
dimmaryanto@MSI-Z87:~/temp/dimmaryanto-blog/java-buildtools-mvn/template-mvn-quickstart$ tree src/main/java/
src/main/java/
├── com
│   └── hotmail
│       └── dimmaryanto
│           └── software
│               └── App.java
└── style.css

4 directories, 2 files
{% endhighlight %}

kemudian kita lakukan perintah ```mvn package``` setelah ikut kita lihat hasilnya apakah file ```style.css``` ada dalam ```.jar```, file ```.jar``` dapat ditemukan di folder ```target/```, Berikut ini hasilnya

![Maven package](/images/2016-07/apache-maven/mvn-package.png)

Setelah itu coba kita extract file ```template-mvn-quickstart-1.0.jar``` tersebut berikut hasilnya

![Extract file jar](/images/2016-07/apache-maven/jar-extract.png)

Setelah ikut kita lihat file yang ada pada folder tersebut.

![Cari file style.css](/images/2016-07/apache-maven/find-style-css.png)

Dari gambar diatas bisa dilihat, tidak ada file yang namanya ```style.css```, ini artinya file tersebut tidak diikut sertakan oleh maven compiler.

<hr/>

<h3><i class="fa fa-folder-open-o"></i> <code>src/main/resources</code></h3>

Untuk template project ```maven-archetype-quickstart``` secara default dia belum punya folder ini, tetapi kita bisa membuatnya secara manual. caranya ya sama seperti membuat folder biasa


{% highlight bash %}
mkdir -p src/main/resources
{% endhighlight %}

maka hasilnya seperti berikut:

{% highlight bash %}
dimmaryanto@MSI-Z87:~/temp/dimmaryanto-blog/java-buildtools-mvn/template-mvn-quickstart$ ls src/main/
java  resources
{% endhighlight %}

Dalam folder ```src/main/``` ada 2 folder yaitu ```java``` dan ```resources```

Folder ini berisi selain file berextensi ```.java```. jadi Nanti klo misalnya membuat project Web Aplikasi pasti kita akan membutuhkan file seperti HTML, CSS dan lain-lain biasanya disimpan difolder ini. nah sekarang kita pindahkan file ```style.css``` ke folder ini. berikut perintahnya

{% highlight bash %}
mv template-mvn-quickstart/src/main/java/style.css template-mvn-quickstart/src/main/resources/
{% endhighlight %}

Dan hasilnya seperti berikut setelah dipindahkan

{% highlight bash %}
src/main/
├── java
│   └── com
│       └── hotmail
│           └── dimmaryanto
│               └── software
│                   └── App.java
└── resources
    └── style.css

6 directories, 2 files
{% endhighlight %}

Setelah itu kita lakukan package lagi dan karena kita menyimpanya diluar maka pasti filenya ada di root direktory jadi kita bisa buka pake program archive seperti zip, winrar dan lain-lain. Berikut adalah hasilnya

![Hasil extract yang telah dipinhakan](/images/2016-07/apache-maven/find-style-css-available.png)

<hr/>

<h3><i class="fa fa-folder-open-o"></i> <code>src/test/java</code></h3>

Folder ini berisi file berextensi ```.java``` tapi bedanya dengan folder ```src/main/java``` adalah ketika project di compile tidak akan di ikut sertakan ke dalam package baik ```.jar``` ataupun ```.war``` Jadi kesimpulannya hanya dapat dikenali ketika kita melakukan test aja.

<hr/>

<h3><i class="fa fa-folder-open-o"></i> <code>src/test/resources</code></h3>

Folder ini berikut kurang lebih sama kayak folder ```src/main/resources``` tapi bedanya file-file yang ada di folder ini tidak akan diikut sertakan ke hasil akhir

<hr/>

<h3><i class="fa fa-folder-open-o"></i> <code>target/</code></h3>

Folder ini adalah temporary file, artinya akan berubah dan bahkan bisa dihapus ketika project di compile, test, clean. Kemudian biasanya folder ini juga menyimpan file report file seperti ```javaDoc```, ```.jar``` atau ```.war``` dan logger untuk Unit Testing biasanya ada di folder ```target/surefire-reports/```

<hr/>

# Memahami ```pom.xml```

Seperti yang saya jelaskan di awal, bahwa software build-tools ini biasanya memiliki konfigurasi sendiri2 contohnya apache maven ini menggunakan file ```pom.xml``` sedangkan untuk gradle menggunakan ```build.gradle``` untuk menampung konfigurasi seperti dependency management, plugins, properties aplikasi contohnya version, nama aplikasi, contributors dan lain-lain.

Nah kalo kita buka file ```pom.xml``` menggunakan text-editor seperti berikut:

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

<hr/>

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

<hr/>

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

<hr/>

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

<hr/>

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

<hr/>

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

<hr/>

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

Ok mungkin cukup sekian posting hari ini, semoga bermanfaat.
