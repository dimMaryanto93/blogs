---
layout: post
title: "Memahami Strukur folder untuk project maven-archetype-quickstart"
date: 2016-08-17T14:37:00+07:00
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

Berikut adalah fungsi-fungsi dari template project template-mvn-quickstart. silahkan **baca dengan seksama yak! ini penting** karena Apache Maven memiliki aturan tersediri untuk penempatan **source codenya** seperti berikut:

<!--more-->

<h3><i class="fa fa-folder-open-o"></i> <code>src</code></h3>

Folder ini pada umumnya digunakan menyimpan kodingan kita akan tulis atau bahasa kerennya _source code_.

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

![Maven package]({{ site.baseurl }}/images/2016-07/apache-maven/mvn-package.png)

Setelah itu coba kita extract file ```template-mvn-quickstart-1.0.jar``` tersebut berikut hasilnya

![Extract file jar]({{ site.baseurl }}/images/2016-07/apache-maven/jar-extract.png)

Setelah ikut kita lihat file yang ada pada folder tersebut.

![Cari file style.css]({{ site.baseurl }}/images/2016-07/apache-maven/find-style-css.png)

Dari gambar diatas bisa dilihat, tidak ada file yang namanya ```style.css```, ini artinya file tersebut tidak diikut sertakan oleh maven compiler.

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

![Hasil extract yang telah dipinhakan]({{ site.baseurl }}/images/2016-07/apache-maven/find-style-css-available.png)

<h3><i class="fa fa-folder-open-o"></i> <code>src/test/java</code></h3>

Folder ini berisi file berextensi ```.java``` tapi bedanya dengan folder ```src/main/java``` adalah ketika project di compile tidak akan di ikut sertakan ke dalam package baik ```.jar``` ataupun ```.war``` Jadi kesimpulannya hanya dapat dikenali ketika kita melakukan test aja.

<h3><i class="fa fa-folder-open-o"></i> <code>src/test/resources</code></h3>

Folder ini berikut kurang lebih sama kayak folder ```src/main/resources``` tapi bedanya file-file yang ada di folder ini tidak akan diikut sertakan ke hasil akhir

<h3><i class="fa fa-folder-open-o"></i> <code>target/</code></h3>

Folder ini adalah temporary file, artinya akan berubah dan bahkan bisa dihapus ketika project di compile, test, clean. Kemudian biasanya folder ini juga menyimpan file report file seperti ```javaDoc```, ```.jar``` atau ```.war``` dan logger untuk Unit Testing biasanya ada di folder ```target/surefire-reports/```

Ok mungkin sekian dulu postingan untuk memahami skturkur directory di project maven-archetype-quickstart. See you next post!.
