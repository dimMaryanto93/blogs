---
layout: post
title: "Download video menggunakan youtube-dl"
date: 2016-08-25T22:17:18+07:00
author: Dimas Maryanto
comments: yes
page_category:
language:
gist:
repository:
categories:
- Youtube
- Downloader
tags:
- Video Downloader
- Youtube
references:
- https://rg3.github.io/youtube-dl/index.html
image_path: /images/2016-08/youtube-dl/
---

Download video dari youtube emang udah jadi kebisaan saya, semenjak lulus kuliah karena di youtube banyak sekali materi-materi ataupun hiburan yang bisa saya dapatkan misalnya tutorial bahasa pemograman, VLog, Music dan lain-lain. Jaman dulu sya download masih pake **Internet Download Manager (Fake serial)** tpi sekarang udah tobat **gak mau lagi pake software bajakan** :P itu juga klo download harus satu persatu, sekarang saya menemukan cara download yang lebih mudah yaitu dengan menggunakan [youtube-dl](https://rg3.github.io/youtube-dl/index.html)

<!--more-->

### youtube-dl

> youtube-dl basicly command atau perintah yang dibuat diatas bahasa pemograman python untuk dapat digunakan di semua platform seperti Windows (Command Prompt), Linux (Terminal) dan MacOS (Terminal).

### Cara install youtube-dl

Cara installnya sendiri ada banyak yaitu klo di Windows bisa menggunakan file `.exe` download [di sini](https://rg3.github.io/youtube-dl/download.html) dan pastikan sebelum mengginstal file tersebut haruslah memiliki **Python Interpreter** seperti keterangan yang ada di websitenya

Klo saya sih installnya dari `pip` karena cukup mudah caranya kita tingal download [python development environmentnya](https://www.python.org/downloads/) kemudian tingall install `pip` seperti berikut:

{% highlight bash %}
python get-pip.py
{% endhighlight %}

udah gitu tingall install **youtube-dl**

{% highlight bash %}
pip install --upgrade youtube-dl
{% endhighlight %}

### Cara menggunakan youtube-dl

Cara menggunakannya cukup mudah tingall masukan perintah seperti berikut:

{% highlight bash %}
youtube-dl url-video-youtube
{% endhighlight %}

Kita tingall masukin link atau source dari youtube seperti berikut

![cpy]({{ page.image_path }}url.png)

kita copy-paste ke **Command prompt** atau **Terminal**

![paste]({{ page.image_path }}downloaded.png)

Sekarang tinggal cek deh folder Downloads. hasilnya seperti berikut secara otomatis dia akan mendownload max video res rata2 sih 720p. seperti berikut:

![img]({{ page.image_path }}file.png)

### Download semua video dari playlist.

Terkadang kita butuh download video semuanya dan langsung diantrikan berdasarkan playlist yang dibuat oleh uploader atau bahasa youtubenya yaitu youtubers. caranya kurang lebih sama yaitu kita copy-paste link playlistnya seperti berikut:

![url-playlist]({{ page.image_path }}url-playlist.png)

Kita paste ke terminal atau command prompt seperti berikut:

{% highlight bash %}
youtube-dl https://www.youtube.com/playlist?list=PLV1-tdmPblvxrO0uAWlite9Z5xnx9CVFR
{% endhighlight %}

hasilnya seperti berikut:

![my protopolio]({{ page.image_path }}download-playlist.png)

Sekarang kita tinggal cek aja dalam folder `Download/myPortopolio/`

![multi files]({{ page.image_path }}multi-files.png)

Ok mungkin sekian dulu apa yang bisa saya share tentang bagaimana cara mudah download video-video dari youtube. See you next post!.
