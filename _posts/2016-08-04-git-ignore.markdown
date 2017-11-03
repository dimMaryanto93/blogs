---
layout: post
title: "File yang tidak perlu atau sebaiknya jangan di tracking oleh Git"
date: 2016-08-04T19:00:57+07:00
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

Hi welcome back, Nah sekarang saya mau membahas hal yang sepele dibilang penting enggak dibilang sampah juga enggak ya pembahasan santai aja, Ok langsung aja ke topik pembahasan jadi kenapa saya ngambil judul 'File yang tidak perlu atau sebagaiknya jangan di tracking oleh Git' karena memang ada beberapa pertanyaan dari teman saya jadi pertanyaannya gini:

> Kang, itu file .gitignore itu apa sih?

trus saya jawab gini, file itu gunanya supaya file tertentu gak perlu di track, trus dia nanya lagi kayak gini

> trus kenapa pake Git kalo ada file yang gak perlu di track?

lalu saya jawab lagi, Nah kalo itu sih terserah anda. Kalo menurut saya sih file ignore ini sangat bermanfaat kenapa bermanfaat jadi contohnya kalo kamu nulis koding di Java or C++ pasti setelah coding dan dicompile pasti ada file tambahan khan yang namanya bytecode (```.class``` atau ```.jar```) nah itu khan setiap koding di compile ulang  pasti mengahasilkan file yang sama tapi isinya beda Nah itu menurut saya gak perlu di track toh gak akan dipake juga, terus selain itu contoh lainnya yaitu file konfigurasi, kenapa file konfigurasi gak perlu diupload jawabanya sederhana kalo kamu **bekerja sendiri sih gak masalah** tapi klo udah **bekerja rame-rame jadi setiap kali ada anggota atau member baru dalam team kamu pasti file konfigurasinya akan berubah dan itu bakalan mengebabkan source kamu error** karena harus dikonfigurasi ulang setiap kali menggunakanya, jadi supaya lebih jelas berikut ilustrasinya. Terdapat 3 programmer dengan beda platform yang pertama pake Windows, yang kedua pake Linux dan satu lagi pake MacOS.
Dari perbedaan tersebut udah keliatan klo misal Programmer A install JDK di ```C:\Program File\java\``` sedangkan Programmer B dan C install JDK di ```/opt/jdk/``` jadi setiap kali programmer tersebut melakukan ngoding harus merubah konfgurasinya supaya bisa dicompile karena JDKnya tidak ditemukan. Nah jadi gitu ya kurang lebih saya rasa paham ya. OK sekarang kita masuk ke studi kasusnya:

<!--more-->

ok kita buat aja program sangat sederhana pake Java ya kurang lebih kayak menampilkan pesan ke layar "Hai nama saya Dimas" kurang lebih gini kodingnya:

{% highlight java %}
public class HaloDimas{
  public static void main(){
    System.out.println("Hai nama saya Dimas");
  }
}
{% endhighlight %}

file tersebut saya simpan di ```/home/dimMaryanto/temp/git-belajar/``` nama filenya adalah ```HaloDimas.java```

sebelum dilanjut udah familiar khan dengan perintah ```java``` dan ```javac```? udah donk ya, gampang kok!. ok lanjutnya saya mau cek dulu menggunakan perintah berikut:

{% highlight bash %}
git status
{% endhighlight %}

berikut outputnya:

{% highlight bash %}
On branch master
Your branch is up-to-date with 'github/master'.
Untracked files:
  (use "git add <file>..." to include in what will be committed)

	HaloDimas.java

nothing added to commit but untracked files present (use "git add" to track)
{% endhighlight %}

bisa dilihat ya dari output diatas klo terjadi perubahan yaitu ada file baru dengan nama ```HaloDimas.java```

Selanjutnya saya mau compile dengan peritah ```javac``` seperti berikut:

{% highlight bash %}
javac HaloDimas.java
{% endhighlight %}

ok, saya angap kodingnya udah benernya jadi tidak ada outpunya, selanjutnya kita cek lagi status gitnya

{% highlight bash %}
git status
{% endhighlight %}

berikut output yang dihasilkan:

{% highlight bash %}
On branch master
Your branch is up-to-date with 'github/master'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	HaloDimas.class
	HaloDimas.java

no changes added to commit (use "git add" and/or "git commit -a")
{% endhighlight %}

jadi klo dilihat diatas ada file baru lagi yang namanya ```HaloDimas.class```, untuk lebih memahaminnya coba anda commit berikut peritahnya:

{% highlight bash %}
git add . && git commit -m 'commit .class'
{% endhighlight %}

sekarang cek lagi statusnya, berikut hasil outpunya:

{% highlight bash %}
On branch master
Your branch is ahead of 'github/master' by 1 commit.
  (use "git push" to publish your local commits)
nothing to commit, working directory clean
{% endhighlight %}

ok, selajutnya kita edit koding yang tadi menampilkan "halo Dimas" berikut coding lengkapnya:

{% highlight java %}
public class HaloDimas{
  public static void main(){
    System.out.println("Hai Dimas");
  }
}
{% endhighlight %}

kemudian silahkan **compile lagi**, jadi berikut hasil git statusnya:

{% highlight bash %}
On branch master
Your branch is ahead of 'github/master' by 1 commit.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   HaloDimas.class
	modified:   HaloDimas.java

no changes added to commit (use "git add" and/or "git commit -a")
{% endhighlight %}

jadi klo anda perhatikan kita tadi telah merubah file ```HaloDimas.java``` secara otomatis git akan berubah, nah klo file satunya lagi ```HaloDimas.class``` ini ikut berubah klo kita melakukan perubahan di ```HaloDimas.java``` yang telah dicompilasi.

kesimpulannya adalah file dengan extensi ```.class``` tidak perlu disimpan atau di index karena pada dasarnya akan dihapus atau direplace oleh Java ketika melakukan compilasi dengan perintah ```javac```.

Nah solusinya kita buat file ```.gitignore``` seperti berikut:

Membuat file dengan nama seperti berikut ```.gitignore``` (**[titik]gitignore**) pastikan membuatnya di root git project ya!, berikut perintahnya klo menggunakan terminal tapi bisa juga menggunakan membuat file biasa tapi ingat namanya harus sama ya yaitu ```.gitignore```

{% highlight bash %}
touch .gitignore
{% endhighlight %}

kemudian karena saya mau meng-abaikan atau tidak melakukan index terhadap file ```HaloDimas.class``` maka tinggal tambahkan saja didalamnya atau khan biasanya kita memiliki banyak ```.class``` java maka kita bisa menggunakan tanda ```*``` untuk meng-abaikan untuk diindex berikut implementasinya:

{% highlight ini %}
# hanya file HaloDimas.class yang akan diignore
HaloDimas.class

# semua file yang memiliki extensi .class
*.class
{% endhighlight %}

karena file ```HaloDimas.class``` telah kita index maka kita hapus indexnya dari local git repository berikut caranya:

{% highlight bash %}
git rm HaloDimas.class -f
{% endhighlight %}

setelah itu coba cek lagi ```git status``` berikut outputnya:

{% highlight bash %}
On branch master
Your branch is ahead of 'github/master' by 1 commit.
  (use "git push" to publish your local commits)
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	deleted:    HaloDimas.class

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .gitignore
	modified:   HaloDimas.java
{% endhighlight %}

ok, coba anda **commit**. berikut perintahnya:

{% highlight bash %}
git add . && git commit -m 'remove .class'
{% endhighlight %}

kemudian cek ```git status``` kembali berikut outpunya:

{% highlight bash %}
On branch master
Your branch is ahead of 'github/master' by 2 commits.
  (use "git push" to publish your local commits)
nothing to commit, working directory clean
{% endhighlight %}

selanjutnya kita buat perubahan sekali lagi, berikut koding lengkapnya:

{% highlight java %}
public class HaloDimas{
  public static void main(){
    System.out.println("Hai...");
  }
}
{% endhighlight %}

setelah itu **compile ulang** dengan peritah ```javac```, kemudian coba cek lagi ```git status``` maka anda akan lihat perubahanya seperti output berikut:

{% highlight bash %}
On branch master
Your branch is ahead of 'github/master' by 2 commits.
  (use "git push" to publish your local commits)
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   HaloDimas.java

no changes added to commit (use "git add" and/or "git commit -a")
{% endhighlight %}

ok ya, hasilnya file ```HaloDimas.class``` sudah tidak muncul di ```git status```, gimana mengerti?

Mungkin cukup sekian dulu postingan kali ini tentang File yang tidak perlu atau sebaiknya jangan di track oleh Git, see you next post!.
