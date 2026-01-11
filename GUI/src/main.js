const {QWidget, QLabel, FlexLayout, QMainWindow, QComboBox, QPushButton, Direction, QBoxLayout, WindowType, WidgetAttribute, QPixmap, AspectRatioMode} = require('@nodegui/nodegui');
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
    win.setAttribute(WidgetAttribute.WA_TranslucentBackground, true);

    const mainView = new QWidget();
    mainView.setObjectName("mainView");
    mainView.setFixedSize(500, 250);

    const rootLayout = new QBoxLayout(Direction.TopToBottom);
    mainView.setLayout(rootLayout);

    //Title Layout
    const welcomeText = new QLabel();
    welcomeText.setObjectName("welcomeText");
    welcomeText.setText('Zodiac Sun');

    const sun_img = new QPixmap(path.join(__dirname, '../assets/icons8-sun-80.png'));
    const sunIcon = new QLabel(); 
    sunIcon.setObjectName("sunIcon");
    sunIcon.setPixmap(sun_img);

    //const toolTipIcon = new QIcon();

    const titleLayout = new FlexLayout();
    titleLayout.setFlexNode(win.getFlexNode());
    titleLayout.setObjectName("titleLayout");
    titleLayout.addWidget(sunIcon);
    titleLayout.addWidget(welcomeText);
    //titleLayout.addWidget(toolTipIcon);

    rootLayout.addLayout(titleLayout);

    // Date Layout

    // const month = new QComboBox();
    // month.setObjectName("monthSelector");
    // month.addItem(undefined, "JAN");
    // month.addItem(undefined, "FEB");
    // month.addItem(undefined, "MAR")

    // const day = new QComboBox();
    // day.setObjectName("daySelector");
    // day.addItem(undefined, "1");
    // day.addItem(undefined, "2");
    // day.addItem(undefined, "3");


    // const dateLabel = new QLabel();
    // dateLabel.setObjectName("dateLabel");
    // dateLabel.setText("Date of Birth:");
    // const dateWidget = new QWidget();
    // dateWidget.setObjectName("dateWidget");
    // const dateLayout = new QBoxLayout(Direction.LeftToRight);
    // dateWidget.setLayout(dateLayout);
    // dateLayout.addWidget(month);
    // dateLayout.addWidget(day);

    // const submitBtn = new QPushButton();
    // submitBtn.setObjectName("submitBtn");
    // submitBtn.setText("Submit");

    
    //rootLayout.addWidget(welcomeText);
    // rootLayout.addWidget(dateLabel);
    // rootLayout.addWidget(dateWidget);
    // rootLayout.addWidget(submitBtn);

    win.setCentralWidget(mainView);

    win.setStyleSheet(`
        #mainView {
        background-color: rgb(245, 243, 243);
        }

        #titleLayout {
        flex: 1;
        flex-direction: 'column';
        justify-content: 'center';
        }

        #sunIcon {
        flex-shrink: 2;
        }
    
        #welcomeText {
        flex-grow: 2;
        text-align: 'center';
        color: #000000;
        }
    `);

    win.show();
    global.win = win;
}

main();


