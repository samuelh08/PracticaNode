const colors = require('colors');
const emoji = require('node-emoji');
const commandLineArgs = require('command-line-args');
const fs = require('fs');

const filename = 'data.json';
const filepath = `data/${filename}`;

const optionDefinitions = [{ name: 'color', alias: 'c', type: String }];
const options = commandLineArgs(optionDefinitions);

colors.setTheme({ custom: [options.color] });

console.log('Hoola'.custom);

console.log(emoji.random().emoji);

const content = JSON.stringify(options, null, 2);

fs.writeFileSync(filepath, content);
