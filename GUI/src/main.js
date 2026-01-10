const {QMainWindow, QLabel} = require('@nodegui/nodegui');

const win = new QMainWindow();
const helloText = new QLabel();
helloText.setText('Welcome to Zodiac Sun!');

win.show()

global.win = win