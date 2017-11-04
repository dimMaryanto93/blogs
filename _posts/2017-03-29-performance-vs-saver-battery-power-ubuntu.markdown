---
layout: post
title: "Performance vs Power Saving Mode, Laptop OS Ubuntu 16.10"
date: 2017-03-29T04:19:03+07:00
author: Dimas Maryanto
comments: yes
page_category: ubuntu
language: ubuntu
gist: 
repository: 
categories:
- Linux
- Ubuntu
- VGA
- NVidia
tags:
- Performances
- Power Saving Mode
- Battery
- NVidia
references:
---

Halo pada kesempatan kali ini, saya mau membahas tentang Battery Saving dan Performa Laptop saya jika menggunakan Driver NVidia dan Intell Haswell Mobile

![nvidia-logo]({{ site.baseurl }}/images/2017-03/nvdia-driver-linux-ubuntu/gt920m.png)

Saya menginstall driver NVidia dari `software-additional-driver` punya ubuntu dengan versi `375.39` seperti berikut:

![software-additional-driver]({{ site.baseurl }}/images/2017-03/nvdia-driver-linux-ubuntu/software-driver-additional.png)

<!--more-->

Dengan menggunakan Driver tersebut, anda akan merasakan sensasi bermain game yang lancar dan **tidak terasa lag** meskipun settingan **medium** atau **high** untuk bermain **Tom Raider** di Linux menggunakan Steam, namum begitu anda tidak sedang bermain ini akan berasa terhadap power battery anda yang akan semakin cepat terkuras.

Berikut spesifikasi battery laptop saya:

![battery-monitor]({{ site.baseurl }}/images/2017-03/nvdia-driver-linux-ubuntu/battery-monitor.png)

Terlihat dari battery-monitor tersebut kapasitas battery kurang lebih `37.00 Wh` jika digunakan untuk kebutuhan sehari2 seperti ngoding dan browsing hanya dapat bertahan `2,5 jam` sedangkan untuk bermain kurang lebih `1,5 jam` saja tergantung dari kinerja prosessor dan grafis.

Berikut spesifikasi laptop yang saya gunakan:

![driver-nvidia]({{ site.baseurl }}/images/2017-03/nvdia-driver-linux-ubuntu/use-nvidia-driver.png)

Solusinya sekarang adalah coba buka software `Nvidia X Server Settings` maka akan tampil form seperti berikut:

![nvidia-select-driver]({{ site.baseurl }}/images/2017-03/nvdia-driver-linux-ubuntu/select-driver-nvidia.png)

Jadi disana terdapat 2 pilihan yaitu 

- NVidia Driver (Untuk kebutuhan gamming, rendering dll)
- Intell Driver (Untuk kebutuhan sehari2)

Untuk menggantinya cukup seleksi yang diiginkan contohnya pilih driver Intell Haswell kemudian masukan password **super user** atau user `root` kemudian logout dari sistem kemudian login lagi dan wala hasilnya seperti berikut:

![intell-select-driver]({{ site.baseurl }}/images/2017-03/nvdia-driver-linux-ubuntu/use-intell-driver.png)

Dan hasilnya battery anda akan bertahan jauh lebih hemat. Sekian dulu postingan tentang performa atau battery saving mode di laptop basicly ubuntu, mohon maaf jika ada salah-salah kata.