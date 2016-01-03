Snippets
========

[old snippets page](http://antonio.busrod.net/snippets-old.html)

---
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

