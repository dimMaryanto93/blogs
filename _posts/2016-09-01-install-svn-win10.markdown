---
layout: post
title: "Cara Install Apache Subversion (SVN) di Windows 10"
date: 2016-09-01T11:46:42+07:00
author: Dimas Maryanto
comments: yes
page_category: svn
language: apache
gist:
repository:
categories:
- VCS
- SVN
tags:
- Install
- Apache Subversion
- VCS
references:
- https://subversion.apache.org/
- https://www.visualsvn.com/downloads/
image_path: /images/2016-09/install-svn/
---

Halo, nah kali ini saya mau bahas bagaimana cara install Apache SubVersion di Windows 10. Nah ok langsung aja, jadi kita download dulu binnarynya dari [websitenya Apache Subversion](https://subversion.apache.org/)

<!--more-->

Untuk cara install di windows sebenarnya mudah cuman agak ribet, jadi gak seperti di linux yang bisa menggunakan repositorynya masing masing contohnya di Fedora `dnf install subversion` atau di Ubuntu `apt-get install subversion` klo di windows gak semudah itu jadi kita download dulu, jadi ada beberapa pilihan untuk menginstall SVN ini seperti berikut:

![pilihan install]({{ page.image_path }}download-svn-0.png)

Nah jadi saya pilih pake yang **VisualSVN**, seperti berikut websitenya:

![VisualSVN]({{ page.image_path }}download-svn-1.png)

Karena saya kebutuhanya hanya di terminal / command prompt jadi download yang **Apache Subversion Command line tools** setelah didownload tinggal extract pake software ziper atau winrar. seperti berikut:

![Extract VisualSVN]({{ page.image_path }}download-svn-2.png)

Lalu kita bisa pindahkan ke lokasi yang diiginkan klo saya **simpan di drive** `C:/` kemudian **di rename** dengan nama `apache-svn` seperti berikut:

![MV apache-svn]({{ page.image_path }}download-svn-3.png)

Nah sekarang kita tinggal setting Pathnya, jadi langsung ja **Klik Kanan** di **This PC** kemudian **Properties** setelah itu **Advanced system settings** seperti berikut:

![System Settings]({{ page.image_path }}setting-svn-2.png)

Lalu kita setting **Enviroment Variables** seperti berikut:

![Enviroment variables]({{ page.image_path }}setting-svn-3.png)

Kemudian pada **System Variables** anda cari namanya **Path** lalu Klik **Edit** maka tampil form seperti berikut:

![Enviroment variables]({{ page.image_path }}setting-svn-4.png)

Kemudian kita buat **Variable** baru dengan **Klik New** kemudian ketik asal dulu bebas, setelah itu bru di **Browse** kemudian diarahkan ke tempat install apache subversionnya klo saya tadi khan di `C:/apache-svn/bin` seperti gambar berikut ini:

![Enviroment variables]({{ page.image_path }}setting-svn-5.png)

Nah jadi kurang lebih seperti gambar dibawah ini hasilnya:

![Enviroment variables]({{ page.image_path }}setting-svn-6.png)

Lalu Klik **OK** semuanya supaya menutup dan menyimpan perubahan Path variables. kemudian kita bisa buka command prompt untuk melakukan test apakah udah benar belum konfigurasinya dengan menggunakan perintah seperti berikut:

{% highlight bash %}
svn --version
{% endhighlight %}

Berikut outputnya:

![Enviroment variables]({{ page.image_path }}setting-svn-7.png)

Ok mungkin segitu dulu bagaimana cara install Apache Subversion di Windows 10, berikut juga tersedia versi videonya dari youtube channel saya:

{% youtube "watch?v=JXkB4qePoM4" %}

See you next post!.
