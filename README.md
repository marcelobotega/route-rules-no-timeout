# Route rules no timeout

Route rules when used as a proxy is not respecting the timeout param.

Run the following commands to reproduce the issue:
```bash
pnpm install
node delay.js
pnpm dev
```

Check the console.log on the terminal and you will see that the 
timeout is not being respected when using the route rules as a proxy.

Using the experimental default (nuxt.config) for useFetch also do not work. 
