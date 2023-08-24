# feb23-t3w2-node-intro

nvm ls-remote 

Gets a list of all available NodeJS versions that _can_ be installed on your computer

nvm ls

Gets a list of all NodeJS versions that are already installed, or reserved keywords/aliases for installed versions of NodeJS.


node -v

Shows the version of Node that is activated.

# Lesson notes

22nd Aug 2023 - Tuesday - 7pm-9pm

Ed: https://edstem.org/au/courses/11264/lessons/39841/slides/277138

Goals: 
- Running JS in the terminal
	- Check your NVM! - https://github.com/nvm-sh/nvm
	- Check your NodeJS!
- Understanding NodeJS-based projects
	- package.json
	- package scripts 
- Using NPM packages
	- Useful for MERN:
		- Nodemon - https://www.npmjs.com/package/nodemon
		- dotenv - https://www.npmjs.com/package/dotenv
	- Useful for terminal apps: 
		- chalk: https://www.npmjs.com/package/chalk 
		- prompts: https://www.npmjs.com/package/prompts
		- prompt-sync: https://www.npmjs.com/package/prompt-sync
		- discord.js: https://www.npmjs.com/package/discord.js 
		- commander: https://www.npmjs.com/package/commander 


24th Aug 2023 - Thursday - 7pm-9pm

Ed: https://edstem.org/au/courses/11264/lessons/32578/slides/228850

Goals:
- show nodemon usage 
	- quirk with prompt-sync 
- throwing
	- messages/strings
	- new Errors (instantiating Errors)
- try-catch, try-catch-finally
- custom exceptions/errors
	- example from my APIs