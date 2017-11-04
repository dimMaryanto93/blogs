---
layout: post
title: "Setelah install UBuntu 16.04 LTS?"
date: 2016-08-12T15:39:51+07:00
author: Dimas Maryanto
comments: yes
page_category: ubuntu
language: ubuntu
gist:
repository:
categories:
- Linux
- Ubuntu
tags:
- Linux
- Ubuntu
- Install
references:
---

Halo, kali ini saya mau membahas hal apa aja yang harus dilakukan setelah install UBuntu 16.04 LTS adapun seperti berikut:

<!--more-->

## Update system

{% highlight bash %}
sudo apt-get update && apt-get upgrade -y
{% endhighlight %}

## Driver tambahan

install driver yang dibutuhkan seperti VGA, Broadcom dan lain-lain.

![Driver]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/driver-ubuntu.png)

## synaptic

Install ```synaptic``` package manager, untuk mengelola aplikasi yang broken atau mencari software fungsinya sih sama kayak Ubuntu Software.

{% highlight bash %}
sudo apt-get install synaptic -y
{% endhighlight %}

![synaptic package manager]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/synaptic.png)

## vlc

Install ```vlc``` untuk memutar video

{% highlight bash %}
sudo apt-get install vlc -y
{% endhighlight %}

![vlc]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/vlc.png)

## gimp

Install ```gimp``` sebagai pengganti Photoshop

{% highlight bash %}
sudo apt-get install gimp gimp-data gimp-plugin-registry gimp-data-extra -y
{% endhighlight %}

![gimp]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/gimp.png)

## Inkscape

Install ```inkscape``` sebagai Corel Draw

{% highlight bash %}
sudo apt-get install inkscape -y
{% endhighlight %}

![inkscape]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/inkscape.png)

## BleachBit

Install ```bleachbit```, sebagai pengganti CCleaner di Windows

{% highlight bash %}
sudo apt-get install bleachbit -y
{% endhighlight %}

![bleachbit]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/bleachbit.png)

## Flash Plugins

Install flashplugin-installer, plugin untuk memutar video Youtube, dailymotion dll.

{% highlight bash %}
sudo apt-get install flashplugin-installer -y
{% endhighlight %}

## DropBox

Install ```dropbox``` tempat penyimpanan online

{% highlight bash %}
sudo apt-get install nautilus-dropbox -y
{% endhighlight %}

setelah download dan install selesai jalankan perintah berikut:

{% highlight bash %}
nautilus --quit
{% endhighlight %}

kemudian jalankan ```dropbox``` dari launcher maka akan tampil seperti berikut:

![download dropbox]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/dropbox-install-1.png)

Lalu setelah selesai maka tampil form:

![Login dropbox]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/dropbox.png)

## Blender

Install ```blender``` sebagai pengganti 3D Modeling

{% highlight bash %}
apt-get install blender -y
{% endhighlight %}

![blender]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/blender.png)

## Media Codec

Install ```codec``` untuk mutar mp3, video mp4 dll.

{% highlight bash %}
apt-get install
{% endhighlight %}

## Simple Screen Recorder

Install ```simplescreenrecorder``` untuk merekam video di desktop.

{% highlight bash %}
sudo add-apt-repository ppa:maarten-baert/simplescreenrecorder
sudo apt-get update
sudo apt-get install simplescreenrecorder
{% endhighlight %}

![ssr]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/ssr.png)

## Unity Tweak Tool

Install ```unity-tweak-tool``` untuk mengganti theme, icon dll.

{% highlight bash %}
apt-get install unity-tweak-tool -y
{% endhighlight %}

![unity tweak tool]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/unity-twak-tool.png)

## File Compressed

Install file compressed seperti zip, rar dll.

{% highlight bash %}
apt-get install unace unrar zip unzip
  p7zip-full p7zip-rar sharutils rar
  uudeview mpack arj cabextract file-roller -y
{% endhighlight %}

## Brasero

Install ```brasero``` untuk membuat iso, burning dll.

{% highlight bash %}
apt-get install brasero -y
{% endhighlight %}

![brasero]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/brasero.png)

## Audacity

Install ```audacity``` untuk merekam suara atau voice recorder

{% highlight bash %}
apt-get install audacity -y
{% endhighlight %}

![audacity]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/audacity.png)

## WPS Office

Install ```wps``` sebagai pengganti Microsoft Office

silahkan download di alamat berikut: [http://wps-community.org/downloads](http://wps-community.org/downloads) karena pake Ubuntu pilih yang extensinya ```.deb``` kemudian install menggunakan perintah seperti berikut:

{% highlight bash %}
dpkg -i /home/user/Downloads/namafile.deb
{% endhighlight %}

* Word

![Writer]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/word.png)

* Powerpoint

![Persentation]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/powerpoint.png)

* Excel

![Spreadsheets]({{ site.baseurl }}/images/2016-08/setup-ubuntu-after-install/excel.png)
