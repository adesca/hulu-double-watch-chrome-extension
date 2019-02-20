export const chatStyle = 'html, body {\n' +
    '    background: #252C33;\n' +
    '    font-family: \'Lato\', sans-serif;\n' +
    '    margin: 0px auto;\n' +
    '}\n' +
    '::selection{\n' +
    '    background: rgba(82,179,217,0.3);\n' +
    '    color: inherit;\n' +
    '}\n' +
    '\n' +
    '/* M E N U */\n' +
    '\n' +
    '.menu {\n' +
    '    position: fixed;\n' +
    '    top: 0px;\n' +
    '    left: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 100%;\n' +
    '    height: 50px;\n' +
    '    background: rgba(27,35,42,0.9);\n' +
    '    z-index: 100;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '\n' +
    '.back {\n' +
    '    position: absolute;\n' +
    '    width: 90px;\n' +
    '    height: 50px;\n' +
    '    top: 0px;\n' +
    '    left: 0px;\n' +
    '    color: rgba(255,255,255,0.5);\n' +
    '    line-height: 45px;\n' +
    '    font-size: 40px;\n' +
    '    padding-left: 10px;\n' +
    '    cursor: pointer;\n' +
    '    transition: .15s all;\n' +
    '}\n' +
    '.back img {\n' +
    '    position: absolute;\n' +
    '    top: 5px;\n' +
    '    left: 30px;\n' +
    '    width: 40px;\n' +
    '    height: 40px;\n' +
    '    background-color: rgba(255,255,255,0.1);\n' +
    '    border-radius: 100%;\n' +
    '    -webkit-border-radius: 100%;\n' +
    '    -moz-border-radius: 100%;\n' +
    '    -ms-border-radius: 100%;\n' +
    '    margin-left: 15px;\n' +
    '}\n' +
    '.back:active {\n' +
    '    background: rgba(0,0,0,0.15);\n' +
    '}\n' +
    '.name {\n' +
    '    position: absolute;\n' +
    '    top: 3px;\n' +
    '    left: 110px;\n' +
    '    font-family: \'Lato\';\n' +
    '    font-size: 25px;\n' +
    '    font-weight: 300;\n' +
    '    color: rgba(255,255,255,0.98);\n' +
    '    cursor: default;\n' +
    '}\n' +
    '.last {\n' +
    '    position: absolute;\n' +
    '    top: 30px;\n' +
    '    left: 115px;\n' +
    '    font-family: \'Lato\';\n' +
    '    font-size: 11px;\n' +
    '    font-weight: 400;\n' +
    '    color: rgba(255,255,255,0.6);\n' +
    '    cursor: default;\n' +
    '}\n' +
    '.members {\n' +
    '    position: absolute;\n' +
    '    top: 30px;\n' +
    '    left: 115px;\n' +
    '    font-family: \'Lato\';\n' +
    '    font-size: 11px;\n' +
    '    font-weight: 400;\n' +
    '    color: rgba(255,255,255,0.6);\n' +
    '    cursor: default;\n' +
    '    word-spacing: 2px;\n' +
    '}\n' +
    '\n' +
    '/* M E S S A G E S */\n' +
    '\n' +
    '.chat {\n' +
    '    list-style: none;\n' +
    '    background: none;\n' +
    '    margin: 0;\n' +
    '    padding: 0 0 50px 0;\n' +
    '    margin-top: 60px;\n' +
    '    margin-bottom: 15px;\n' +
    '}\n' +
    '.chat li {\n' +
    '    padding: 0.5rem;\n' +
    '    overflow: hidden;\n' +
    '    display: flex;\n' +
    '}\n' +
    '.chat .day {\n' +
    '    position: relative;\n' +
    '    display: block;\n' +
    '    text-align: center;\n' +
    '    color: rgba(255,255,255,0.3);\n' +
    '    height: 20px;\n' +
    '    text-shadow: 7px 0px 0px #252C33, 6px 0px 0px #252C33, 5px 0px 0px #252C33, 4px 0px 0px #252C33, 3px 0px 0px #252C33, 2px 0px 0px #252C33, 1px 0px 0px #252C33, 1px 0px 0px #252C33, 0px 0px 0px #252C33, -1px 0px 0px #252C33, -2px 0px 0px #252C33, -3px 0px 0px #252C33, -4px 0px 0px #252C33, -5px 0px 0px #252C33, -6px 0px 0px #252C33, -7px 0px 0px #252C33;\n' +
    '    box-shadow: inset 20px 0px 0px #252C33, inset -20px 0px 0px #252C33, inset 0px -2px 0px rgba(255,255,255,0.1);\n' +
    '    line-height: 38px;\n' +
    '    margin-top: 5px;\n' +
    '    margin-bottom: 20px;\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '.chat .notification {\n' +
    '    position: relative;\n' +
    '    display: inherit;\n' +
    '    text-align: center;\n' +
    '    font-size: 13px;\n' +
    '    color: rgba(255,255,255,0.15);\n' +
    '    background: rgba(234, 247, 255, 0.035);\n' +
    '    line-height: 30px;\n' +
    '    border-radius: 100px;\n' +
    '    margin: 7px 35%;\n' +
    '    height: 30px;\n' +
    '    width: 30%;\n' +
    '    box-shadow: 0px 1px 0px rgba(0,0,0,.05), 0px -1px 0px rgba(0,0,0,.05), inset 0px 1px 0px rgba(255,255,255,.02), inset 0px -1px 0px rgba(255,255,255,.02);\n' +
    '    text-shadow: 0px -1px 0px rgba(0,0,0,.1), 0px 1px 0px rgba(255,255,255,.05);\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '}\n' +
    '.chat .notification time {\n' +
    '    position: absolute;\n' +
    '    top: 7px;\n' +
    '    right: 7px;\n' +
    '    font-size: 11px;\n' +
    '    padding: 8px;\n' +
    '    border-radius: 100px;\n' +
    '    background: #252C33;\n' +
    '    box-shadow: 0px 0px 2px rgba(255,255,255,.02), inset 0px 0px 1px rgba(27,35,42,0.1);\n' +
    '    height: 1px;\n' +
    '    line-height: 0px;\n' +
    '    color: rgba(255,255,255,0.1);\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '}\n' +
    '\n' +
    '.other .msg {\n' +
    '    border-top-left-radius: 0px;\n' +
    '    box-shadow: -1px 2px 0px #c1cbcd;\n' +
    '}\n' +
    '.other:before {\n' +
    '    content: "";\n' +
    '    position: relative;\n' +
    '    top: 0px;\n' +
    '    right: 0px;\n' +
    '    left: 0px;\n' +
    '    width: 0px;\n' +
    '    height: 0px;\n' +
    '    border: 5px solid #eef8ff;\n' +
    '    border-left-color: transparent;\n' +
    '    border-bottom-color: transparent;\n' +
    '}\n' +
    '\n' +
    '.self {\n' +
    '    justify-content: flex-end;\n' +
    '    align-items: flex-end;\n' +
    '}\n' +
    '.self .msg {\n' +
    '    border-bottom-right-radius: 0px;\n' +
    '    box-shadow: 1px 2px 0px #c1cbcd;\n' +
    '}\n' +
    '.self:after {\n' +
    '    content: "";\n' +
    '    position: relative;\n' +
    '    display: inline-block;\n' +
    '    float: right;\n' +
    '    bottom: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 0px;\n' +
    '    height: 0px;\n' +
    '    border: 5px solid #eef8ff;\n' +
    '    border-right-color: transparent;\n' +
    '    border-top-color: transparent;\n' +
    '    box-shadow: 0px 2px 0px #c1cbcd;\n' +
    '}\n' +
    '\n' +
    '.msg {\n' +
    '    background: #eef8ff;\n' +
    '    min-width: 50px;\n' +
    '    padding: 10px;\n' +
    '    border-radius: 2px;\n' +
    '    word-break: break-all;\n' +
    '}\n' +
    '.msg .user {\n' +
    '    font-size: 14px;\n' +
    '    margin: 0 0 2px 0;\n' +
    '    color: #666;\n' +
    '    font-weight: 700;\n' +
    '    margin-top: -2px;\n' +
    '    margin-bottom: 5px;\n' +
    '    transition: all .2s ease;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '.msg .user .range.admin {\n' +
    '    display: inline-block;\n' +
    '    font-size: 10px;\n' +
    '    font-weight: 300;\n' +
    '    color: #6aea96;\n' +
    '    padding: 2px;\n' +
    '    border-radius: 3px;\n' +
    '    border: solid 1px #6aea96;\n' +
    '    background: rgba(255,255,255,0);\n' +
    '    margin-left: 5px;\n' +
    '}\n' +
    '.msg p {\n' +
    '    font-size: 13px;\n' +
    '    margin: 0 0 2px 0;\n' +
    '    color: #777;\n' +
    '    transition: all .2s ease;\n' +
    '}\n' +
    '.msg img {\n' +
    '    position: relative;\n' +
    '    display: block;\n' +
    '    width: 600px;\n' +
    '    border-radius: 5px;\n' +
    '    box-shadow: 0px 0px 3px #eee;\n' +
    '    transition: all .8s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '\n' +
    '.msg time {\n' +
    '    font-size: 0.7rem;\n' +
    '    color: rgba(0,0,0,.35);\n' +
    '    margin-top: 3px;\n' +
    '    float: right;\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '.msg time:before{\n' +
    '    content:"\\f017";\n' +
    '    color: #ddd;\n' +
    '    font-family: FontAwesome;\n' +
    '    display: inline-block;\n' +
    '    margin-right: 4px;\n' +
    '}\n' +
    '\n' +
    'emoji{\n' +
    '    display: inline-block;\n' +
    '    height: 18px;\n' +
    '    width: 18px;\n' +
    '    background-size: cover;\n' +
    '    background-repeat: no-repeat;\n' +
    '    margin-top: -7px;\n' +
    '    margin-left: 2px;\n' +
    '    margin-right: 2px;\n' +
    '    transform: translate3d(0px, 4px, 0px);\n' +
    '}\n' +
    'emoji.please{background-image: url(https://imgur.com/ftowh0s.png);}\n' +
    'emoji.lmao{background-image: url(https://i.imgur.com/MllSy5N.png);}\n' +
    'emoji.happy{background-image: url(https://imgur.com/5WUpcPZ.png);}\n' +
    'emoji.pizza{background-image: url(https://imgur.com/voEvJld.png);}\n' +
    'emoji.cryalot{background-image: url(https://i.imgur.com/UUrRRo6.png);}\n' +
    'emoji.books{background-image: url(https://i.imgur.com/UjZLf1R.png);}\n' +
    'emoji.moai{background-image: url(https://imgur.com/uSpaYy8.png);}\n' +
    'emoji.suffocated{background-image: url(https://i.imgur.com/jfTyB5F.png);}\n' +
    'emoji.scream{background-image: url(https://i.imgur.com/tOLNJgg.png);}\n' +
    'emoji.hearth_blue{background-image: url(https://i.imgur.com/gR9juts.png);}\n' +
    'emoji.funny{background-image: url(https://i.imgur.com/qKia58V.png);}\n' +
    'emoji.shit{background-image: url(https://i.imgur.com/H5Jba8r.png);}\n' +
    '\n' +
    '@-webikt-keyframes pulse {\n' +
    '    from { opacity: 0; }\n' +
    '    to { opacity: 0.5; }\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar {\n' +
    '    min-width: 12px;\n' +
    '    width: 12px;\n' +
    '    max-width: 12px;\n' +
    '    min-height: 12px;\n' +
    '    height: 12px;\n' +
    '    max-height: 12px;\n' +
    '    background: #252C33;\n' +
    '    box-shadow: inset 0px 50px 0px rgba(27,35,42,0.9), inset 0px -50px 0px #eee;\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-thumb {\n' +
    '    background: rgba(255,255,255,0.2);\n' +
    '    border: none;\n' +
    '    border-radius: 100px;\n' +
    '    border: solid 3px #252C33;\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-thumb:hover {\n' +
    '    background: rgba(255,255,255,0.1);\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-thumb:active {\n' +
    '    background: rgba(255,255,255,0.1);\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-button {\n' +
    '    display: block;\n' +
    '    height: 26px;\n' +
    '}\n' +
    '\n' +
    '/* T Y P E */\n' +
    '.typezone{\n' +
    '    position: fixed;\n' +
    '    bottom: 0px;\n' +
    '    left: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 100%;\n' +
    '    height: 50px;\n' +
    '    z-index: 99;\n' +
    '    background: #eee;\n' +
    '    border: none;\n' +
    '    outline: none;\n' +
    '}\n' +
    'textarea, textarea:hover {\n' +
    '    position: absolute;\n' +
    '    bottom: 0px;\n' +
    '    left: 8%;\n' +
    '    right: 8%;\n' +
    '    width: 80%;\n' +
    '    height: 30px;\n' +
    '    z-index: 100;\n' +
    '    background: #fafafa;\n' +
    '    border: none;\n' +
    '    outline: none;\n' +
    '    padding-left: 2%;\n' +
    '    padding-right: 2%;\n' +
    '    padding-top: 2%;\n' +
    '    color: #666;\n' +
    '    font-weight: 400;\n' +
    '    border-top-right-radius: 10px;\n' +
    '    border-top-left-radius: 10px;\n' +
    '    overflow: hidden;\n' +
    '    resize: none;\n' +
    '    z-index: 200;\n' +
    '    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n' +
    '    transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '}\n' +
    'textarea:focus {\n' +
    '    height: 300px;\n' +
    '    box-shadow: 0px 0px 20px rgba(0,0,0,0.3);\n' +
    '}\n' +
    '.emojis {\n' +
    '    position: fixed;\n' +
    '    display: block;\n' +
    '    bottom: 0px;\n' +
    '    left: 0px;\n' +
    '    width: 8%;\n' +
    '    height: 50px;\n' +
    '    background-image: url(https://i.imgur.com/VAn5Geq.png);\n' +
    '    background-repeat: no-repeat;\n' +
    '    background-size: 34px 34px;\n' +
    '    background-position: 45% 9px;\n' +
    '    z-index: 100;\n' +
    '    cursor: pointer;\n' +
    '}\n' +
    '.emojis:active {\n' +
    '    opacity: 0.9;\n' +
    '}\n' +
    '.send {\n' +
    '    position: fixed;\n' +
    '    display: block;\n' +
    '    bottom: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 8%;\n' +
    '    height: 50px;\n' +
    '    border: none;\n' +
    '    outline: none;\n' +
    '    z-index: 100;\n' +
    '    cursor: pointer;\n' +
    '    background-image: url(https://i.imgur.com/VSQxJKL.png);\n' +
    '    background-repeat: no-repeat;\n' +
    '    background-size: 34px 34px;\n' +
    '    background-position: 45% 9px;\n' +
    '    background-color: rgba(255,255,255,0);\n' +
    '}\n' +
    '.send:active {\n' +
    '    opacity: 0.85;\n' +
    '}\n' +
    '\n' +
    '/* R E S P O N S I V E   C O N F I G U R A T I O N */\n' +
    '\n' +
    '@media screen and (max-width: 750px) {\n' +
    '    ::-webkit-scrollbar {\n' +
    '        display: none;\n' +
    '    }\n' +
    '    .chat{\n' +
    '        margin-bottom: 55px;\n' +
    '    }\n' +
    '    .msg p {\n' +
    '        font-size: 11px;\n' +
    '    }\n' +
    '    .msg .user {\n' +
    '        font-size: 13px;\n' +
    '    }\n' +
    '    .msg img {\n' +
    '        width: 300px;\n' +
    '    }\n' +
    '    .chat .notification {\n' +
    '        font-size: 12px;\n' +
    '        margin: 7px 30%;\n' +
    '        width: 40%;\n' +
    '    }\n' +
    '    .chat .day {\n' +
    '        font-size: 11px;\n' +
    '    }\n' +
    '    .emojis {\n' +
    '        width: 25%;\n' +
    '    }\n' +
    '    .send {\n' +
    '        width: 25%;\n' +
    '    }\n' +
    '    textarea {\n' +
    '        left: 0px;\n' +
    '        right: 0px;\n' +
    '        bottom: 50px;\n' +
    '        padding-left: 5%;\n' +
    '        padding-right: 5%;\n' +
    '        padding-top: 20px;\n' +
    '        width: 90%;\n' +
    '        border-radius: 0px;\n' +
    '        height: 28px;\n' +
    '        background: #fafafa;\n' +
    '        box-shadow: none;\n' +
    '        transition: all .4s cubic-bezier(0.2, -0.2, 0.2, 1.2);\n' +
    '    }\n' +
    '    textarea:focus {\n' +
    '        height: 30vh;\n' +
    '        margin-top: 30vh;\n' +
    '        box-shadow: 0px -20px 20px rgba(0,0,0,0.1);\n' +
    '    }\n' +
    '    form:focus ~ .typezone {\n' +
    '        bottom: 50vh;\n' +
    '    }\n' +
    '}\n' +
    '@media screen and (max-width: 550px) {\n' +
    '    .msg p {\n' +
    '        max-width: 250px;\n' +
    '    }\n' +
    '    .msg img {\n' +
    '        width: 200px;\n' +
    '    }\n' +
    '    .chat .notification {\n' +
    '        font-size: 12px;\n' +
    '        margin: 7px 0px;\n' +
    '        width: 100%;\n' +
    '        border-radius: 0px;\n' +
    '    }\n' +
    '    .chat .notification time {\n' +
    '        right: 10px;\n' +
    '    }\n' +
    '}';