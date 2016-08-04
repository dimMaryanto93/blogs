---
layout: post
title: "Memanfaatkan Central Bugs Tracker dengan GitHub"
date: 2016-08-04T22:11:45+07:00
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
- BugsTracker
references:
- https://help.github.com/articles/about-issues/
- https://daringfireball.net/projects/markdown/syntax
---

Halo, kali ini saya mau berbagi tentang pengalan saya menggunakan BugsTracker salah satunya yang gratis yaitu GitHub, GitHub memanggilnya dengan nama **Issues** (```Central Bugs Tracker```).
Kalo kamu bekerja sendiri ini gak akan berpengaruh besar tapi kalo kamu bekerja dengan tim apalagi project kamu sifatnya ```remote``` artinya jarang meeting sama client ini bakalan sangat membantu karena kamu tidak perlu datang ke lokasi hanya karena minta data atau semacamnya, tapi ingat software ini hanya sebagai mempermudah aja bukan buat untuk meeting dalam messaging tapi tetap meeting (tatap muka) itu penting. Jadi langsung aja kita bahas cara menggunakan GitHub issues ini.

<!--more-->

Hal pertama yang harus anda lakukan adalah memenuhi syarat berikut ini:

* Yang pasti harus punya akun github, klo belum bikin silahkan bikin aja gratis kok!. klo mau liat dokumentasinya [lihat disini]({% post_url 2016-08-04-git-to-github %})
* Anda harus tergabung ke repository tertentu, baik individual maupun group contohnya disini saya sedang mengerjakan sebuat project salah satu mahasiswa ***** #sensor

![Gambar repository](/images/2016-08/github-issues/github-contributor.png)

* Harus rajin periksa email. karena klo ada pesan atau komentar baru, akan masuk ke primary email di account github anda.
* Dan yang paling penting adalah settingan Issues-nya di repository tersebut aktif. klo tidak ya tidak bisa menerima dan membuat Issues.

![Settingan Issues enabled](/images/2016-08/github-issues/setting-issues-enabled.png)

Nah sekarang kita akan membuat issues, tapi Sebelum membuat Issues sekarang saya tanya, apa itu Issues?

> Many projects collect user feedback via a central bug tracker. GitHub's tracker is called "Issues," and can be used with every repository.

jadi sebenarnya software yang kita obrolin dari tadi itu namanya **Central bug tracker** tapi GitHub menamainnya dengan **Issues**. sebenarnya selain software yang ditawarkan oleh github ada banyak contohnya:

* [MantisHub](https://www.mantishub.com/?utm_source=google&utm_medium=cpc&utm_campaign=World%2520Mantis%2520Searchers)
* [Mantis Bug Tracker](https://www.mantisbt.org/)
* [JIRA](https://www.atlassian.com/software/jira)
* dan masih banyak lagi...

Nah trus knapa pake GitHub khan ada software yang lebih bagus, jawabanya "Bayar bos...!" dan rata" software yang itu harus beneran Corporation gak boleh perusahaan abal-abal. Selain itu juga GitHub sebenarnya memiliki kelebihan seperti berikut

> Issues can act as more than just a place to report software bugs. As a project maintainer, you can use Issues to organize tasks you'd like to accomplish, such as adding new features or auditing old ones. You can associate issues with pull requests, so that when you merge a pull request, your issue will automatically close.

jadi gini katanya: Issues dapat menggambarkan report atau taks yang harus dikerjakan. dan juga initinya adalah kita dapat menutup issues secara otomatis dengan menggunakan commit.

Ok, udah cukup jelaskan? jadi langsung ja mulai kita membuat issues.

## Membuat Issues

Untuk membuat issue sebenernya sangatlah mudah, cukup pada tab repository -> **issues**.

![Tab menu issues](/images/2016-08/github-issues/tabs-menu-issues.png)

maka akan tampil daftar issues, tpi karena saya belum mempunyai issues jadi masih kosong:

![Daftar issues](/images/2016-08/github-issues/tab-issues.png)

sekarang tinggal klik aja button warna ijo itu, "New Issue" maka akan tampil form seperti berikut:

![Blank issue](/images/2016-08/github-issues/blank-issue.png)

sekarang tinggal diisi aja:

* title -> harus spesifik klo bisa yang mewakili sistem, contohnya error save data mahasiswa.
* text -> tulis keterangan error atau logger errornya, dan **yang harus diperhatikan dalam text ini dia formatnya menggunakan markdown** jadi kita bisa menampilkan beberapa component seperti code, image, emoticon dan lain-lain lebih jelasnya bisa lihat di [dokumentasinya markdown](https://daringfireball.net/projects/markdown/syntax) tapi tenang aja klo misalnya gak teralu bisa dengan sintax markdown, sintax markdown tidak sejekan sintax programming kok! klo misalnya salah paling tampilanya aja agak berantakan. so make it easy aja.
* label -> ini biasanya menandakan hashtag contohnya ada bugs maka pake label bug dan lain-lain.

![Issue labels](/images/2016-08/github-issues/issue-labels.png)

* assignees -> ini berati akan di tugaskan kepada siapa? contohnya klo _assign yourself_ artinya issue ini akan di tugaskan kepada diri anda sendiri atau kita bisa memilih siapa yang akan ditugaskan untuk member yang berkolaborasi di repository tersebut.

![Assignees issue](/images/2016-08/github-issues/issue-assignees.png)

klo udah tingal klik Button "Submit new issue". maka hasilnya seperti berikut:

![Submited new issue](/images/2016-08/github-issues/submited-issue.png)

## Menutup otomatis issue dengan commit

Setelah tadi kita membuat issue, setelah di analisa lognya maka pura" saya gak tau dan yang tadi membuat issue adalah junior-programmer dan ternyata permasalahnya adalah karena koneksinya database tidak ditemukan atau bentrok portnya. maka saya disini pura" merubah konfigurasi database terus melakukan commit.

* Merubah konfiguras anggaplah README.md adalah file configurasi database.
* Seperti biasa kita melakukan commit ke local repository

{% highlight bash %}
git commit -m 'fixed #1 masalahya port bentrok'
{% endhighlight %}

Jika anda perhatikan pada pesan commitnya saya menggunakan keyword ```fixed``` dan ```#1``` jadi magsudnya adalah saya bugnya telah saya perbaiki dengan kode issue

![Kode issue](/images/2016-08/github-issues/id-issue.png)

kode ```#1``` berasal dari ```#1 opened ... by ...```, kemudian setelah itu kita push berikut outputnya:

{% highlight bash %}
warning: push.default is unset; its implicit value has changed in
Git 2.0 from 'matching' to 'simple'. To squelch this message
and maintain the traditional behavior, use:

  git config --global push.default matching

To squelch this message and adopt the new behavior now, use:

  git config --global push.default simple

When push.default is set to 'matching', git will push local branches
to the remote branches that already exist with the same name.

Since Git 2.0, Git defaults to the more conservative 'simple'
behavior, which only pushes the current branch to the corresponding
remote branch that 'git pull' uses to update the current branch.

See 'git help config' and search for 'push.default' for further information.
(the 'simple' mode was introduced in Git 1.7.11. Use the similar mode
'current' instead of 'simple' if you sometimes use older versions of Git)

Username for 'https://github.com': dimmaryanto
Password for 'https://dimmaryanto@github.com':
Counting objects: 3, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 387 bytes | 0 bytes/s, done.
Total 3 (delta 2), reused 0 (delta 0)
To https://github.com/dimmaryanto-blog/vcs-git-belajar.git
   c446fa3..f484659  master -> master
dimmaryanto@MSI-Z87:~/temp/vcs-git-belajar$
{% endhighlight %}

setelah itu coba lihat kembali ke Issues di repository GitHub anda maka secara otomatis hasilnya akan seperti berikut:

![Issue auto closed](/images/2016-08/github-issues/issue-auto-closed.png)

Ok mungin sekian dulu postingan tentang Central Bugs Tracker di GitHub, see you next post!.
