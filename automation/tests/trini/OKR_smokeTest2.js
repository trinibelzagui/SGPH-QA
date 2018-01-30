module.exports = {
    

  'Login' : function (browser) {
    browser
      .url('http://172.22.254.133:9022/utnet/main')
      .waitForElementVisible('body', 10000)
      .pause(3000)
      .click('input[name=inputUsername]') /*needed since it cannot proceed with the typing unless the cursor appears automatically*/
      .setValue('input[name=inputUsername]', 'ricoadmin')
      /*.keys("\ue007", 3000)   /Search by hitting the "Enter Button"*/
      .pause(3000)
      .click('input[name=inputPassword]')
      .setValue('input[name=inputPassword]', 'OKR1234!')

      .click('button[type=submit]')
      .pause(3000)
      .assert.title('OK Remit')
      .waitForElementVisible('body', 5000)
      .end();
  }
};


