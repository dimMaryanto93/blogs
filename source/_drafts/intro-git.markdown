---
layout: post
title: "Version Control, is important for developers when build an application"
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
language: git
gist:
repository:
categories:
- VCS
- Git
tags:
- VCS
- Git
- Repository
references:
- https://git-scm.com/
- https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
---

Halo and selamat datang di blog saya kembali, nah kali ini saya bakalan nulis pengalaman dan sekaligus bagimana cara menggunakan Git sebagai Repository project atau yang lebih dikenal dengan Version Control System. Jadi apa aja yang akan saya bahas diantaranya sebagai berikut:

* Apa itu Git, GitHub dan software sejenisnya? apa perbedaanya?
* Kenapa menggunakan Git, klo anda perhatikan semua software memiliki auto save contohnya seperti di Netbeans, atau bakhan Microsoft Office?
* Git dan GitHub sangatlah membantu anda ketika bekerja dengan Team yang lumayan banyak.
* Membuat project Git dengan tujuan untuk merekam semua kegiatan atau aktivitas yang kita lakukan, magsudnya kapan kita melakukan commit untuk mengimpan perubahan terhapap suatu file.
* Mengenal fungsi-fungsi dasar Git seperti ```add```, ```commit```, ```push```, ```branch```, ```checkhout```, ```merge``` dan ```reset```.

<!--more-->

Ok langsung aja gak usah banyak ngomong lagi, jadi Git ini menurut [websitenya](https://git-scm.com/) adalah

> Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Jadi kesimpulanya dari pengertian diatas yaitu Git adalah software yang gratis dan opensource yang mengimplementasikan Version Control System, apa yang jadi pertanyaan apa itu Version Control System? ok jadi begini menurut [dokumentasi git](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) adalah sebagai berikut

> What is "version control", and why should you care? Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later.

> If you are a graphic or web designer and want to keep every version of an image or layout (which you would most certainly want to), a Version Control System (VCS) is a very wise thing to use. It allows you to revert files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more.

Jadi dari kedua paragraf tersebut bisa disimpulkan klo **Version control itu bertujuan untuk mencatat perubahan terhadap file atau sekumpulan file dalam waktu yang realtime**. sebagai contoh klo anda adalah seorang web designer anda **bisa melihat setiap perubahan yang terjadi di setiap versi** (every time you commit the files), bisa **mengembalikan ke versi yang anda tentukan** contohnya anda punya file yang telah direcord oleh git kemudian ingin dikembalikan ke hasil save pertamakali itu bisa dilakukan dengan Git, **Membandingkan sebuah design terakhir commit dengan versi yang sebelumnya** dan masih banyak lagi fungsi-fungsi lain. gimana ngertikan magsud saya? ngerti lah ya.

Kemudian pembahasan selanjutnya Apa itu GitHub? apakah sama seperti Git? jawabanya tentu aja beda, trus apa GitHub? jadi GitHub itu menurut [Wikipedia](https://en.wikipedia.org/wiki/GitHub) adalah sebagai berikut

> GitHub is a web-based Git repository hosting service. It offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. Unlike Git, which is strictly a command-line tool, GitHub provides a Web-based graphical interface and desktop as well as mobile integration.

Dari kalimat tersebut bisa kita garis bawahi klo GitHub adalah salah satu implementasi dari **Git repository hosting service**, sebenarnya tidak hanya GitHub yang mengimplementasikan Git Repository hosting service ada juga [BitBucket](https://bitbucket.org/), [GitBook](https://www.gitbook.com/), [OpenShift](https://www.openshift.com/),  [Heroku](https://www.heroku.com/) dan lain-lain.

Pertanyaan berikutnya adalah trus apa bedanya Git dan GitHub? jawabanya masih dalam kalimat yang sama seperti diatas, jadi Git adalah command line based yang bekerja dikomputer local sedangkan GitHub adalah web based jadi digunakan untuk share file (centralize atau distributed). for example, disini saya punya folder atau project git di local dengan nama ```javascript-belajar``` dikomputer saya seperti berikut:

![Local VCS](/images/2016-08/intro-git/project-git.png)

dan juga saya punya repository di webnya dengan isi yang sama dengan project ```javascript-belajar``` di BitBucket. ini menandakan klo kita melakukan share ke public (internet) apa yang kita lakukan di komputer lokal seperti berikut:

![Central VCS](/images/2016-08/intro-git/project-bitbucket.png)

Selain itu juga kita bisa me-remote repository tersebut sesuia dengan akses. contohnya kita bisa berkolaborasi untuk menulis koding bareng-bareng (Team Work).

Lanjut ke pertanyaan selanjutnya yaitu apakah Git dan GitHub sangat membantu kita dalam mengerjakan sebuah project yang memiliki team yang cukup besar? jawabanya tentu aja ia, soalnya anda tau Linux? pasti tau khan? nah Linux itu khan opensource yang pasti banyak team didalamnya baik dari hardware support developer, Software Enginering, Language Translator dan lain-lain. Mereka bekerja menggunakan Git dan GitHub, klo anda tidak percaya silahkan cek aja, bahkan pencipta Linux yaitu Linus Torvalds me-share [linux kernelnya melalui GitHub](https://github.com/torvalds/linux)

Nah tadi saya udah ngomong panjang lebar tentang Git dan GitHub sekerang gak lengkap klo misalnya cuman teori aja jadi kita sekarang akan praktek menggunakan **dasar Git** dan konsep dan fungsi yang digunakan Git pada perintah-perintahnya. Tapi sebelum kita praktek anda harus meng-install dulu Git di system anda. Gak usah khawatir installnya gampang kok klo di Windows sama seperti menginstall software biasa, klo di Linux ada beberapa distro yg secara default udah ter-install seperti di Fedora dan OpenSuse. klo di UBuntu kita harus install secara manual. berikut adalah video untuk menginstall Git di Sistem Operasi Windows:

{% youtube "https://youtu.be/GXeEcegl-sQ" %}

Sedangkan untuk di Linux caranya gampang kita bisa pake default repository di masing masing distro contohnya klo di UBuntu:

{% highlight bash %}
$ sudo apt-get install git
{% endhighlight %}

Klo di Fedora 23 ke atas bisa pake

{% highlight bash %}
$ sudo dnf install git
{% endhighlight %}

Sedangkan di Fedora 22 kebawah bisa pake

{% highlight bash %}
sudo yum install git
{% endhighlight %}
