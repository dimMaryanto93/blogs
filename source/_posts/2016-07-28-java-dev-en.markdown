---
layout: post
title: "Setup Oracle JDK, Java Development Environtment"
date: 2016-07-28T17:30:24+07:00
author: Dimas Maryanto
comments: yes
page_category: 
gist:
language: java
repository:
categories:
- Java
- JDK8
tags:
- Java
- JDK
- JRE
- TextEditor
- IDE
references:
- http://www.oracle.com/technetwork/java/javase/downloads/index.html
- http://docs.oracle.com/javase/8/docs/
---

Halo nah sesuai topik yang di Judul, jadi kali ini saya akan membuat atau membahas hal-hal apa aja yang harus di _setup_ untuk ngoding dengan bahasa pemograman Java berikut ulasannya tetang bagaimana cara setup Java Development Environtment pada Sistem Operasi Windows 10, UBuntu dan Fedora.

Di bahasa pemograman Java kita harus melakukan setup JDK atau kependekan dari _Java Development Kit_. JDK bertujuan untuk menyediakan sekumpulan tools handal yang disediakan oleh para insyinyur Java (gelar) contoh diantarnya sebagai berikut

1. javac (untuk melakukan compilasi)

{% highlight bash %}
javac NamaKelas.java
{% endhighlight %}

2. java (untuk menjalankan hasil compilasi atau bytecode)


{% highlight bash %}
java NamaKelas
{% endhighlight %}

3. dan lain-lain, karena masih banyak tools yang gak bisa disebutin satu persatu. seperti arsitektur JDK pada gambar dibawah ini:

![JDK 1.8 arstiktur](/images/2016-07/java-dev-en/arc-jdk-1.8.png "Gambar diambil dari http://docs.oracle.com/javase/8/docs/ pada tangal 28-07-2016")


Nah sekarang kita install JDK, tapi sebelum itu kita download dulu JDKnya di [Website Oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

<!--more-->

seperti gambar berikut:


![Situs Oracle](/images/2016-07/java-dev-en/download-jdk-1.png)

Kemudian kita pilih **Java Platform (JDK) 8u101 / 8u102** *catatan akan berubah se-waktu2 jadi pilih versi yang paling baru ya!, tapi kalo anda sudah melakukan install JDK di Operasion System anda tidak perlu download cukup update aja JDK.a dari Control Panel atau Java Updater. Setelah ikut maka akan tampil Form seperti berikut:

![Pilih JDK version dan platform](/images/2016-07/java-dev-en/download-jdk-2.png "Pilih Platform sesuia OS dan Download JDK")

Kemudian pilih sesuia dengan Platform System Operasi dan arsitekturnya, karena saya pake Windows 10 yang 64bit jadi saya pilih yang **Windows x64**

## Install Oracle JDK di Windows 10/8.1/7

setelah selesai di Download langsung aja jalankan **jdk-8u101-windows-x64.exe** maka akan muncul form seperti berikut:

![Form Instalasi JDK](/images/2016-07/java-dev-en/install-jdk-1.png)

Klik next untuk menanjutkan, kemudian akan tampil form untuk menentukan lokasi JDK disimpan berikutnya:

![Form Installasi JDK 2 ](/images/2016-07/java-dev-en/install-jdk-2.png)

Lokasi JDKnya saya mau biarkan default saja, kemudian klik next untuk selanjutnya melakukan instalasi JRE seperti berikut:

![Form Installas JRE](/images/2016-07/java-dev-en/install-jdk-3.png)

Sama dengan JDK lokasi JREnya saya mau biarkan default aja, Setelah itu klik Next lagi dan selesai deh proses extractnya.

![Form Installasi JRE](/images/2016-07/java-dev-en/install-jdk-4.png)

Tahap selanjutnya adalah setup PATHnya supaya bisa dikenali oleh Sistem Operasi Windowsnya jadi bisa di akses melalui Command Prompt (CMD). berkut langkah langkahnya:

Buka **File Explorer**nya kemudian Klik Kanan pada **This PC** setelah itu pilih **Properties**

![Setting Path Command Prompt](/images/2016-07/java-dev-en/setpath-jdk-1.png)

Terus klik **Advanced system settings** maka akan tampil Form seperti Berikut:

![System properties](/images/2016-07/java-dev-en/setpath-jdk-2.png)

Kemudian klik **Environtment Variables...** maka akan tampil form seperti berikut:

![Setting system variable dan variable name](/images/2016-07/java-dev-en/setpath-jdk-3.png)

Di menu **User variables for dimMaryanto** klik button **New** maka akan tampil form seperti berikut:

![Setting JAVA_HOME](/images/2016-07/java-dev-en/setpath-jdk-4.png)

Kemudian isi **Variable name:** dengan ```JAVA_HOME``` *huruf besar semua dan untuk **Variable value:** anda arahkan ke lokasi hasil installasi **JDK** klo saya lokasinya di sini ```C:\Program Files\Java\jdk1.8.0_91``` setelah ikut Klik **OK**, maka hasilnya seperti berikut:

![Setting JAVA HOME hasil](/images/2016-07/java-dev-en/setpath-jdk-5.png)

Kemudian kita pindah ke **System variables**, anda cari **variable name:** dengan nama **PATH** atau **Path**

![Setting PATH JAVA](/images/2016-07/java-dev-en/setpath-jdk-6.png)

kemudian anda klik button **Edit** maka akan tampil form seperti berikut:

![Setting Path Java 2](/images/2016-07/java-dev-en/setpath-jdk-7.png)

Klik button **New** kemudian arahkan ke lokasi yang installasi folder ```bin``` di hasil installasi JDK jadi klo di saya seperti ini ```C:\Program files\Java\jdk-8u101\bin``` hasilnya seperti berikut:

![Setting PATH Java](/images/2016-07/java-dev-en/setpath-jdk-8.png)

Setelah itu klik **OK** semua dialog yang ada sampe keluar dari **system properties**. setelah sampe sini proses instalasi di windows udah beres. saatnya tinggal kita cek aja configurasi.a dengan menggunakan **Command Prompt**

Buka Command Prompt dengan menggunakan kombinasi key ```WIN + R``` maka akan tampil form seperti berkut:

![Running CMD](/images/2016-07/java-dev-en/run-cmd-1.png)

Kemudian ketik ```cmd``` setelah itu ```Enter``` maka akan tampil Command Prompt seperti berikut:

![Command Prompt](/images/2016-07/java-dev-en/run-cmd-2.png)

kemudian coba cek configurasi java.a dengan cara melihat versi yang telah terinstall di OS menggunakan perintah seperti berikut

{% highlight bash %}
java -version && javac -version
{% endhighlight %}

kalo berhasil maka outputnya seperti berikut:


{% highlight bash %}
C:\Users\softw>java -version && java -version
java version "1.8.0_91"
Java(TM) SE Runtime Environment (build 1.8.0_91-b15)
Java HotSpot(TM) 64-Bit Server VM (build 25.91-b15, mixed mode)
java version "1.8.0_91"
Java(TM) SE Runtime Environment (build 1.8.0_91-b15)
Java HotSpot(TM) 64-Bit Server VM (build 25.91-b15, mixed mode)

C:\Users\softw>
{% endhighlight %}

Nah untuk setting di Windows udah selesai dan klo install di MacOS kurang lebih sama pada saat installasinya karena udah menggunakan Graphical Installer jadi saya tidak akan bahas. atau klo masih kurang jelas anda bisa melihat vidoenya:

{% youtube "https://youtu.be/2zoPD2xRuIg" %}

<hr>

## Install Oracle JDK di UBuntu

Sekarang saya mau setting di Linux UBuntu dan Fedora. Untuk pertama saya setting di UBuntu dulu ya. Kalo di ubuntu sih sebenernya gampang kita bisa install via ppa dengan menambahkan ```ppa:webupd8team/java``` berikut perintahnya


{% highlight bash %}
sudo add-apt-repository ppa:webupd8team/java
{% endhighlight %}

Setelah itu kita update systemnya


{% highlight bash %}
sudo apt-get update
{% endhighlight %}

Kemudian kita install

{% highlight bash %}
sudo apt-get install oracle-java8-installer
{% endhighlight %}

Setelah itu kita update konfigurasi runtime environmentnya menggunakan perintah berikut ini:


{% highlight bash %}
sudo update-alternatives --config java
{% endhighlight %}

maka akan menampilkan output seperti berikut:


{% highlight bash %}
root@Aspire-E5-473G:~# update-alternatives --config java
There are 2 choices for the alternative java (providing /usr/bin/java).

  Selection    Path                                            Priority   Status
------------------------------------------------------------
* 0            /usr/lib/jvm/java-8-oracle/jre/bin/java          1083      auto mode
  1            /usr/lib/jvm/java-8-openjdk-amd64/jre/bin/java   1081      manual mode
  2            /usr/lib/jvm/java-8-oracle/jre/bin/java          1083      manual mode

Press <enter> to keep the current choice[*], or type selection number:
{% endhighlight %}

Nah dari output diatas kita pilih yang **java-8-oracle** jadi kita input ```0``` sebagai default runtime environmentnya. kemudian kita cek deh dengan terminal:


{% highlight bash %}
java -version && javac -version
{% endhighlight %}

berikut adalah outputnya:


{% highlight bash %}
dimmaryanto@Aspire-E5-473G:~$ java -version && javac -version
java version "1.8.0_101"
Java(TM) SE Runtime Environment (build 1.8.0_101-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.101-b13, mixed mode)
javac 1.8.0_101
{% endhighlight %}

Nah untuk installasi **Oracle JDK** di Linux UBuntu telas selesai, sekarang kita install di Linux Fedora.

<hr/>

## Install Oracle JDK di Fedora

Untuk install Oracle JDK di Fedora sebenarnya ada banyak cara salah satunya menggunakan software Fedy, Fedy adalah penyedia software-software yang digunakan untuk mempermudah proses installasi sama halnya seperti via ppa klo di UBuntu. tpi disini saya tidak akan menggunakan Fedy tapi menggunakan cara manual saja supaya apa? supaya anda tau proses mengginstallnya menggunakan package management fedora yaitu ```rpm```. OK sekarang kita download dulu file installernya sama seperti di Windows masuk ke [website oracle](http://www.oracle.com/technetwork/java/javase/downloads/index.html) kemudian pilih sesuai platform, karena saya pake Fedora version 64bit jadi saya pilih yang ```linux-x64.rpm``` pilih yang extensionnya **.rpm** ya!. seperti gambar berikut:

![Download Oracle JDK Fedora](/images/2016-07/java-dev-en/download-jdk-2.png)

Setelah selesai di download silahkan anda buka terminalnya kemudian arahkan ke hasil download seperti berikut:

{% highlight bash %}
[root@localhost ~]# cd /home/dimmaryanto93/Downloads/
{% endhighlight %}

Untuk melakukan cek filenya ada atau gak gunakan perintah ```ls``` berikut outputnya:


{% highlight bash %}
[root@localhost Downloads]# ls
jdk-8u101-linux-x64.rpm
{% endhighlight %}

Setelah file ditemukan sekarang kita install filenya menggunakan ```rpm``` seperti berikut:

{% highlight bash %}
[root@localhost Downloads]# rpm -Uivh jdk-8u101-linux-x64.rpm
{% endhighlight %}

Berikut outputnya:


{% highlight bash %}
Preparing...                          ################################# [100%]
Updating / installing...
   1:jdk1.8.0_101-2000:1.8.0_101-fcs  ################################# [100%]
Unpacking JAR files...
	tools.jar...
	plugin.jar...
	javaws.jar...
	deploy.jar...
	rt.jar...
	jsse.jar...
	charsets.jar...
	localedata.jar...
{% endhighlight %}

Kemudian setelah selesai kita setting default runtime environtmentnya, karena secara default Fedora sendiri udah menggunakan OpenJDK. karena saya disini bekerja dengan Java 8 maka saya update configurasi ke OracleJDK berikut ada perintahnya:


{% highlight bash %}
alternatives --config java
{% endhighlight %}

berikut outputnya:


{% highlight bash %}
[root@localhost ~]# alternatives --config java

There are 2 programs which provide 'java'.

  Selection    Command
-----------------------------------------------
*+ 1           /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.92-5.b14.fc24.x86_64/jre/bin/java
   2           /usr/java/jdk1.8.0_101/jre/bin/java

Enter to keep the current selection[+], or type selection number:
{% endhighlight %}

Kemudian kita pilih yang version Oracle yaitu yang nomor ```2``` atau ```/usr/java/jdk1.8.0_101/jre/bin/java``` sebagai default runtime environmentnya. setelah itu tekan **Enter** dan selesai deh tinggal kita cek dengan perintah berikut:


{% highlight bash %}
java -version && javac -version
{% endhighlight %}

maka berikut outputnya:


{% highlight bash %}
[dimmaryanto93@localhost ~]$ java -version && javac -version
java version "1.8.0_101"
Java(TM) SE Runtime Environment (build 1.8.0_101-b13)
Java HotSpot(TM) 64-Bit Server VM (build 25.101-b13, mixed mode)
javac 1.8.0_101
{% endhighlight %}

Sampai sini kita telah berhasil menginstal Oracle JDK di Fedora tapi jika anda kurang paham atau kurang jelas berikut ada versi videonya:

{% youtube "https://youtu.be/MYHEbzOPPOw" %}

<hr>

Ok, mungkin sekian dulu penjelasan mengenai setup development environment di Java dengan menggunakan Sistem Operasi Window 10, Ubuntu dan Fedora sampai jumpa di postingan selanjutnya.
