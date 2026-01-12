const {QWidget, QLabel, FlexLayout, QMainWindow, QComboBox, QPushButton, Direction, QBoxLayout, WindowType, WidgetAttribute, QPixmap, AspectRatioMode, QGridLayout} = require('@nodegui/nodegui');
const path= require("node:path");

// TODO: Helper Functions: - Figure out how to dynamically pupulate the month & day selectors 
function populateMonth (){

};

function populateDay () {

}

// Main Function

function main(){
    const win = new QMainWindow();
    win.setWindowFlag(WindowType.FramelessWindowHint, true);

    const mainView = new QWidget();
    mainView.setObjectName("mainView");
    mainView.setFixedSize(500, 250);

    const rootLayout = new QBoxLayout(Direction.TopToBottom);
    mainView.setLayout(rootLayout);

    //Title Layout
    const welcomeText = new QLabel();
    welcomeText.setObjectName("welcomeText");
    welcomeText.setText('Zodiac Sun');

    const sun_img = new QPixmap(path.join(__dirname, '../assets/icons8-sun-40.png'));
    const sunIcon = new QLabel(); 
    sunIcon.setObjectName("sunIcon");
    sunIcon.setPixmap(sun_img);

    const tool_tip_img = new QPixmap(path.join(__dirname, '../assets/icons8-info-50.png'));
    const toolTipIcon = new QLabel();
    toolTipIcon.setPixmap(tool_tip_img);

    const titleLayout = new QGridLayout();
    titleLayout.setObjectName("titleLayout");
    titleLayout.addWidget(sunIcon, 1, 1);
    titleLayout.addWidget(welcomeText, 1 ,2);
    titleLayout.addWidget(toolTipIcon, 1, 3);

    rootLayout.addLayout(titleLayout);

    // Date Layout
    const month = new QComboBox();
    month.setObjectName("monthSelector");
    month.addItem(undefined, "JAN");
    month.addItem(undefined, "FEB");
    month.addItem(undefined, "MAR")

    const day = new QComboBox();
    day.setObjectName("daySelector");
    day.addItem(undefined, "1");
    day.addItem(undefined, "2");
    day.addItem(undefined, "3");


    const dateLabel = new QLabel();
    dateLabel.setObjectName("dateLabel");
    dateLabel.setText("Date of Birth:");

    const dateLayout = new QGridLayout();
    dateLayout.addWidget(dateLabel, 1, 1);
    dateLayout.addWidget(month, 2, 1);
    dateLayout.addWidget(day, 2, 2);

    rootLayout.addLayout(dateLayout);

    const submitBtn = new QPushButton();
    submitBtn.setObjectName("submitBtn");
    submitBtn.setText("Submit");
    rootLayout.addWidget(submitBtn);

    win.setCentralWidget(mainView);

    win.setStyleSheet(`
        #mainView {
        background-color: rgb(245, 243, 243);
        justify-content: 'center';
        align-content: 'center';
        }


    `);

    win.show();
    global.win = win;
}

main();


