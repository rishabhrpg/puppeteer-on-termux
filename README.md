#### puppeteer-on-termux
*Run Puppeteer on termux

**Assumptions**
* You have termux installed and have sufficient permissions
* You have loggedin as root user
* You are okay with running Puppeteer inside a container (Alpine)

**Gotchas**
* There is no build of Google Chrome available for ARM at this moment, so using chromium instead.
* Installing chromium on Termux directly requires snap which is another big hurdle so alternively using alpine distro here.

**Install Prerequisite**
```
proot-distro install alpine
proot-distro login alpine
apk update && apk add --no-cache nmap && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
  echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
  apk update && \
  apk add --no-cache \
  chromium
```

**Get started with puppeteer**
```
git clone https://github.com/rishabhrpg/puppeteer-on-termux.git
cd puppeteer-on-termux
yarn
node index.js
```
* If you see a message "screenshot saved" then puppeteer is sucesfully configured to run on termux
* Use this repo as starting point as it has correct args included to sucesfully run chromium on termux

## Resources
* [Puppeteer running as root without --no-sandbox is not supported](https://www.xspdf.com/resolution/50662388.html)
* [set up a Headless Chrome Node.js server in Docker](https://blog.logrocket.com/how-to-set-up-a-headless-chrome-node-js-server-in-docker/)
* [Enjoyable browser automation with Puppeteer](https://www.lambrospetrou.com/articles/enjoyable-browser-automation-puppeteer-playwright/)
* [Set_Chrome_Flags_in_Puppeteer](https://stackoverflow.com/questions/50607866/setting-specific-chrome-flags-in-puppeteer-enable-and-disable)

## Changelog
on the way
