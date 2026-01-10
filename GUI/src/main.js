const {QWidget, QLabel, FlexLayout, QMainWindow, QBoxLayout, Direction} = require('@nodegui/nodegui');

function main(){
    const win = new QMainWindow();
    win.setFixedSize(500, 150)
    win.setWindowTitle("Zodiac Sun");

    const rootLayout = new FlexLayout();

    const mainView = new QWidget();
    mainView.setObjectName("mainView");
    mainView.setLayout(rootLayout);

    const welcomeText = new QLabel();
    welcomeText.setObjectName("welcomeText");
    welcomeText.setText('Welcome to Zodiac Sun!');

    rootLayout.addWidget(welcomeText);

    win.setCentralWidget(mainView);

    win.setStyleSheet(`
        #mainView {
            flex: 1;
            background-color: 'transparent;
            justify-content: 'center';
        }

        #welcomeText {
            flex: 1;
            font-size: 16px;
            font-weight: bold;
        }
    `);

    win.show();
    global.win = win;
}

main();


