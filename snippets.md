Snippets
========

## vscode: Auto switch Theme based on OS color scheme

`window.autoDetectColorScheme`

https://apple.stackexchange.com/a/381963


## Show last wake for Mac OS X

Check last line and it is timestamp.

```sh
pmset -g log | grep -e " Sleep  " -e " Wake  " | tail -n 5
```

Example

```sh
➜ pmset -g log|grep -e " Sleep  " -e " Wake  " | tail -n 5
2019-08-20 02:14:10 +0200 Sleep               	Entering Sleep state due to 'Maintenance Sleep':TCPKeepAlive=active Using AC (Charge:100%) 7206 secs
2019-08-20 04:15:01 +0200 Sleep               	Entering Sleep state due to 'Maintenance Sleep':TCPKeepAlive=active Using AC (Charge:100%) 7207 secs
2019-08-20 06:15:53 +0200 Sleep               	Entering Sleep state due to 'Maintenance Sleep':TCPKeepAlive=active Using AC (Charge:100%) 7207 secs
2019-08-20 08:16:45 +0200 Sleep               	Entering Sleep state due to 'Maintenance Sleep':TCPKeepAlive=active Using AC (Charge:100%) 3268 secs
2019-08-20 09:11:13 +0200 Wake                	Wake from Normal Sleep [CDNVA] due to XHC1/HID Activity: Using AC (Charge:100%)
```

## Cool unix commands

- `timeout`: Run a command with a time limit.
- `leave`: Remind when it's time to leave.

## Reduce PDF quality with `Ghostscript`

```sh
gs -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook -sOutputFile=/tmp/output.pdf input.pdf
```

---


[old snippets page](https://antonio.busrod.net/snippets-old.html)

---

Coming soon, dotfiles

[spaceship](https://github.com/denysdovhan/spaceship-prompt), A Zsh prompt for Astronauts


---

Command Line improved

https://remysharp.com/2018/08/23/cli-improved

Ugly     | Fancy
----     | -----
`man`    | [`tldr`](https://github.com/tldr-pages/tldr)
`du`     | `ncdu`
`diff`   | `diff-so-fancy`
`ctrl+r` | `fzf`
`ping`   | `prettyping`


---
VirtualBox attach external USB

```bash
VBoxManage list usbhost
VBoxManage controlvm machine-name usbattach xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
```

---
[mount luks ext4 ubuntu](http://askubuntu.com/a/63598)

```
# mount
sudo cryptsetup luksOpen /dev/sd?? my_encrypted_volume
sudo mkdir /media/my_device
sudo mount /dev/mapper/my_encrypted_volume /media/my_device

# unmount (lock container)
sudo umount /media/my_device
sudo cryptsetup luksClose my_encrypted_volume
```

---
Useful NPM commands

- [npm outdated](https://docs.npmjs.com/cli/outdated)
- [npm update](https://docs.npmjs.com/cli/update)
- [npm dist-tag](https://docs.npmjs.com/cli/dist-tag)
- [npm pack](https://docs.npmjs.com/cli/pack)

---
Display mime file type information `file -Ib foo.txt`

---
`git checkout --orphan` Create a new orphan branch. The first commit made on
this new branch will have no parents and it will be the root of a new history
totally disconnected from all the other branches and commits.

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

```bash
sudo tar -C /usr/local --strip-components 1 -xzf node-latest.tar.gz
```

download and upgrade/install node

Example to download last version

```bash
curl https://nodejs.org/download/release/vA.B.C/node-vA.B.C-linux-x64.tar.gz | sudo tar -C /usr/local --strip-components 1 -xz 
```

Old versions

```bash
curl https://nodejs.org/dist/v6.9.2/node-v6.9.2-linux-x64.tar.xz \
  | sudo tar -C /usr/local --strip-components 1 -xJ 

```


---

