const {QWidget, QLabel, FlexLayout, QMainWindow, QComboBox, QPushButton} = require('@nodegui/nodegui');

// TODO: Helper Functions: - Figure out how to dynamically pupulate the month & day selectors 
function populateMonth (){

};

function populateDay () {

}

// Main Function

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

    const title = new QLabel();
    title.setObjectName("mainTitle");
    title.setText = ("Zodiac Sun");

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


    const submitBtn = new QPushButton();
    submitBtn.setObjectName("submitBtn");
    submitBtn.setText("Submit");

    rootLayout.addWidget(welcomeText);
    rootLayout.addWidget(month);
    rootLayout.addWidget(day);
    rootLayout.addWidget(submitBtn);

    win.setCentralWidget(mainView);

    win.setStyleSheet(`
        #mainView {
            flex: 1;
            justify-content: 'center';
        }
    
        #welcomeText {
            flex: 1;
            font-size: '10px';
            font-weight: 'bold';
            text-align: 'center';
        }

        #monthSelector {
        flex: 0.5;
        }

        #daySelector {
        flex: 0.5
        }

        #submitBtn {
        flex: 2;
        background-color:rgb(44, 163, 200);
        }
    `);

    win.show();
    global.win = win;
}

main();


