import {expect, test} from "@playwright/test"
test("loginValid", async({page})=>{
//visiter le site 
await page.goto('https://agropeyi.fr/')

//cliquer sur cnx
await page.getByRole('link',{name:'Connexion'}).click()
await expect(page).toHaveURL(/connexion.php/)



//remplir les champs 


await page.locator("#email").fill("bahae@gmail.com")
await page.locator("#mot_de_passe").fill("Yedir@@@99")

//clique sur bouton cnx
await page.getByRole('button',{name:"Se connecter"}).click()

// verifier le nom attendu
await expect (page.getByRole('button', {name : 'bahae'})).toHaveText('bahae')

})