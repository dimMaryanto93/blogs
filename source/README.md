# Jekyll Template (Membuat blog dengan mudah)

## Install Ruby

Pertama anda harus install ruby di mesin anda installasinya bisa dilihat [di sini](https://www.ruby-lang.org/id/downloads/) kemudian install ```jekyll``` dan ```octopress``` melalui ```gem```

```bash
gem install jekyll octopress
```

### Membuat post baru

```bash
octopress new post 'New post'
```

output:

```bash
New post: _posts/2016-04-09-new-title.markdown
```

### Membuat draft baru

```bash
octopress new draft 'new draft'
```

output

```bash
New draft: _drafts/new-draft.markdown
```

### Publish draft to post

```bash
octopress publish _drafts/new-draft.markdown
```

output:

```bash
Published: _drafts/new-draft.markdown → _posts/2016-04-09-new-draft.markdown
```

### Running local server

```bash
$ jekyll serve
```

output:

```bash
Configuration file: /home/dimMaryanto/workspace/dimmaryanto.github.io/_config.yml
            Source: /home/dimMaryanto/workspace/dimmaryanto.github.io
       Destination: /home/dimMaryanto/workspace/dimmaryanto.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.238 seconds.
 Auto-regeneration: enabled for '/home/dimMaryanto/workspace/dimmaryanto.github.io'
Configuration file: /home/dimMaryanto/workspace/dimmaryanto.github.io/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

### Running local server with drafts

```bash
$ jekyll serve --drafts
```

output:

```bash
Configuration file: /home/dimMaryanto/workspace/dimmaryanto.github.io/_config.yml
            Source: /home/dimMaryanto/workspace/dimmaryanto.github.io
       Destination: /home/dimMaryanto/workspace/dimmaryanto.github.io/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
                    done in 0.238 seconds.
 Auto-regeneration: enabled for '/home/dimMaryanto/workspace/dimmaryanto.github.io'
Configuration file: /home/dimMaryanto/workspace/dimmaryanto.github.io/_config.yml
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

### Publish to github page

```bash
git add . && git statu && git commit -m 'new post' && git push origin
```

output:

```bash
On branch master
Your branch is up-to-date with 'origin/master'.
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   README.md
	new file:   _posts/2016-04-09-new-draft.markdown
```
