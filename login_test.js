Feature('login');

Scenario('login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user','rluanafreitas@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('Login realizado', 3)


}).tag('@Sucesso')

Scenario('tentando logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user','rluanafreitas@gmail.com')
    I.click('#btnLogin')
    I.waitForText('Senha inválida', 3)

}); 

Scenario('tentando logar sem digitar o e-mail e a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user','')
    I.fillField('#password', '')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

});

Scenario('tentando logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login')
    I.waitForText('Login', 10)
    I.fillField('#user','')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido', 3)

});

