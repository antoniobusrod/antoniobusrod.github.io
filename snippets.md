Snippets
========

[old snippets page](http://antonio.busrod.net/snippets-old.html)

---
[set terminal name](http://superuser.com/a/633947) 
```
echo -en "\e]2;string\a" #-- Set window title to string
```

---
write `.img` to SD card from Mac OS X, [more info](http://raspberrypi.stackexchange.com/questions/4144/writing-img-file-to-sd-card-from-a-mac)

`sudo dd if=path_of_your_image.img of=/dev/rdiskn bs=1m`

`/dev/rdisk?` [is much faster](http://superuser.com/questions/631592/why-is-dev-rdisk-about-20-times-faster-than-dev-disk-in-mac-os-x)

---
`CTRL+z` suspends the most recent foreground process (the last process to interact with the tty)

`fg` continues a stopped job by running it in the foreground

`bg` resume a suspended program without bringing it to the foreground

`nohup <command> &; disown` [background process ignoring NOHUP and SIGHUP](http://stackoverflow.com/a/29250064)

[Jobs - Move Running Process to Background & Nohup](http://www.kossboss.com/linux---move-running-to-process-nohup)

---
[XDG Base Directory Specification](http://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html)

`$XDG_CACHE_HOME`, `~/.cache`

Mac OS X, `~/Library/Caches`

---
View JSON file in chrome
1. Open JSON file in a Chrome tab
2. Open Developer Tools
3. Execute in console
```
JSON.parse(document.body.getElementsByTagName('pre').item(0).textContent)
```
---
Bind mount
```
mount --bind /some/where /else/where
```
---

Scan for every TCP and UDP open port:

```
sudo nmap -n -PN -sT -sU -p- remote_host
```

[How To Use Nmap to Scan for Open Ports on your VPS](https://www.digitalocean.com/community/tutorials/how-to-use-nmap-to-scan-for-open-ports-on-your-vps)

---

[Vainilla JS](http://stackoverflow.com/a/20435744)

```javascript
// VanillaJS v1.0
// Released into the Public Domain
// Your code goes here:
```

---

[ps with parent/child process tree](http://www.commandlinefu.com/commands/view/168/ps-with-parentchild-process-tree) `ps auxf`

---

upgrade/install node from `.tar.gz`
```
sudo tar -C /usr/local --strip-components 1 -xzf node-latest.tar.gz
```

---

