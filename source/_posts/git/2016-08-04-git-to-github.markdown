---
layout: post
title: "Sharing local project git ke GitHub"
date: 2016-08-04T15:38:00+07:00
author: Dimas Maryanto
comments: yes
page_category: git
language: git
gist:
repository: https://github.com/dimMaryanto93/belajar-git.git
categories:
- VCS
- Git
tags:
- VCS
- Git
- GitHub
references:
---

Halo kembali lagi di blog saya, kali ini saya akan melanjutkan pembahasan tentang git yang [sebelumnya]({% post_url 2016-08-02-intro-git %}) kita telah belajar fundamentalnya mengenai perintah-perintah dasar git mulai dari membuat project (```init```), men-track perubahan (```add```), menyimpan secara permanen (```commit```) dan juga untuk mengembalikan ke kondisi yang sebelumnya (```reset```), Nah jadi sekarang saya akan membahas beberapa fitur ```remote```.

Fungsi dari remote ini adalah pada dasarnya kita melakukan atau me-manage sebuah project git dari lokal ke serve (```push```) atau pun sebaliknya dari server ke local (```pull```). Ada beberapa server git yang saya tau yaitu diantarnya sebagai berikut:

* [GitHub](https://github.com/)
* [BitBucket](https://bitbucket.org/)

Nah sesuai dengan topik diatas jadi saya mau menggunakan GitHub untuk melakukan sharing projectnya, ok langsung aja kita mulai

<!--more-->

Pertama yang harus dilakukan adalah yang pasti anda memiliki account GitHub, kalau belum punya silahkan daftar aja dulu di [sini](https://github.com/join) berikut langkah-langkahnya:

Hal pertama yang harus anda siapkan yaitu username, password dan email karena nanti ketika ada informasi seperti bergabung ke project orang lain kita akan menerima email dari github berikut adalah formnya:

![Membuat account gith](/images/2016-08/git-to-github/create-account-github.png)

Setelah itu ada confirmasi pilih plan yang anda inginkan klo saya sih accountnya yang free aja karena semua source yang saya tulis sifatnya public. klo misalnya anda mau membuat repository yang sifatnya private anda bisa menginvestasikan sedikit uang jajan anda untuk melakukan pembayaran ke github berikut daftar harganya:

![Billing plan](/images/2016-08/git-to-github/github-plan.png)

{: .center }
(gambar diambil pada tanggal 2016-04-27)

ok, nah gimana gampangkhan bikin account di github tahap selanjutnya melakukan verifikasi email, setelah email diverifikasi maka account github telah aktif.

Setelah membuat akun tahap selanjutnya untuk melakukan sharing project git ke github yaitu membuat repository di GitHub ok, sekarang anda bisa login setelah account githubnya aktif maka anda akan diarahkan ke GitHub dashboard seperti berikut:

![GitHub dashboard](/images/2016-08/git-to-github/github-dashboard.png)

kemudian disamping sebelah kanan ada panel **'your repository'**, untuk membuat repository baru bisa klik button **'New Repository'** atau pada navigation yang ada icon **'+'** kemudian pilih **'New Repository'** maka akan muncul form seperti berikut:

![Create new repo](/images/2016-08/git-to-github/blank-repository-github.png)

### Tips memberikan nama _repository_

1. Usahakan yang mudah diingat
2. Tidak menggunakan karakter space ```' '```, sebagai gantinya gunakan karakter minus ```-```.
3. disarankan menggunakan lower-case atau huruf kecil contohnya ```belajar-javafx```, ```belajar-java-swing``` dan lain-lain.

ok, kita balik lagi membuat repository ya!,

Jadi disini saya mau membuat namanya ```belajar-git``` kemudian sifatnya ```public```. jadi berikut hasilnya:

![Project created](/images/2016-08/git-to-github/created-repo-github.png)

kemudian klik button **'Create repository'**, setelah itu maka akan tampil form seperti berikut:

![Repository has been created](/images/2016-08/git-to-github/repository-created.png)

Setelah itu kita akan meng-upload project Git pada [postingan sebelumnya]({% post_url 2016-08-02-intro-git %}) berikut caranya:

Gunakan terminal atau command prompt, kemudian arakhan ke root direktory Git projectnya seperti berikut contohnya klo saya kemarin menyimpan projectnya di ```C:\Users\softw\temp\belajar-git>``` jadi berikut perintahnya

{% highlight bash %}
cd C:\Users\softw\temp\belajar-git\
{% endhighlight %}

Setelah itu pastikan bahwa project Gitnya dalam kondisi yang up-to-date dengan perintah ```status``` seperti berikut:

{% highlight bash %}
C:\Users\softw\Documents\temp\belajar-git>git status
On branch master
nothing to commit, working tree clean

C:\Users\softw\Documents\temp\belajar-git>
{% endhighlight %}

Setelah itu kita akan menggunakan salah satu fungsi ```remote``` yaitu ```push``` jadi untuk menggunakan fungsi tersebut kita membutuhkan ```url-server``` magsudnya url dimana kita membuat repository di server seperti yang tadi kita buat di GitHub dengan nama ```belajar-git```

dengan peritah sebagai berikut:

{% highlight bash %}
git remote add nama-remote-url url-path
{% endhighlight %}

jadi berdasarkan apa yang saya buat jadi seperti berikut

{% highlight bash %}
git remote add github https://github.com/dimMaryanto93/belajar-git.git
{% endhighlight %}

Untuk url-path anda bisa lihat dari seperti gambar berikut ini:

![Github url paht](/images/2016-08/git-to-github/url-path.png)

Untuk melihat hasilnya menggunakan perintah sebagai berikut:

{% highlight bash %}
git remote -v
{% endhighlight %}

Dan hasilnya seperti berikut:

{% highlight bash %}
C:\Users\softw\Documents\temp\belajar-git>git remote add github https://github.com/dimMaryanto93/belajar-git.git

C:\Users\softw\Documents\temp\belajar-git>git remote -v
github  https://github.com/dimMaryanto93/belajar-git.git (fetch)
github  https://github.com/dimMaryanto93/belajar-git.git (push)

C:\Users\softw\Documents\temp\belajar-git>
{% endhighlight %}

Setelah ```remote``` URLnya diisi kita bisa melakukan fungsi ```push``` atau ```pull```, nah sekarang karena di servernya belum ada file yang diupdate jadi kita gunakan fungsi ```push``` berikut perintahnya:

{% highlight bash %}
git push -u github master
{% endhighlight %}

Setelah itu berikut output dah hasilnya di github:

{% highlight bash %}
C:\Users\softw\Documents\temp\belajar-git>git push -u github master
Counting objects: 3, done.
Writing objects: 100% (3/3), 240 bytes | 0 bytes/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To https://github.com/dimMaryanto93/belajar-git.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from github.

C:\Users\softw\Documents\temp\belajar-git>
{% endhighlight %}

![Git PUSH](/images/2016-08/git-to-github/git-push.png)

Ok sampai ini anda telah berhasil membuat project yang tadi nya hanya disimpan di lokal komputer menjadi di share ke GitHub.

Jika anda kurang mengerti dengan penjelasan diatas berikut ada versi videonya:

{% youtube "https://youtu.be/MEsrrV4mk_8" %}

Mungkin sekian dulu postingan tenteng bagimana men-share project Git ke GitHub, see you next post!.
