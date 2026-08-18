import {expect, test} from "@playwright/test"
test("inscriptio", async({page})=>{
//visiter le site 
await page.goto('https://agropeyi.fr/')

//cliquer sur inscription
await page.getByRole('link',{name:'Inscription'}).click()
await expect(page).toHaveURL(/inscription.php/)



//remplir les champs 
await page.locator("#nom").fill("salim")
await page.locator("#prenom").fill("bahae")
let nb=Math.floor(Math.random()*10000)
await page.locator("#email").fill(nb+"adam@gmail.com")
await page.locator("#mot_de_passe").fill("Farid2026")
await page.locator("#confirmer_mot_de_passe").fill("Farid2026")
//clique sur S'inscrire
await page.getByRole('button',{name:"S'inscrire"}).click()

// verifie le messge syccess
await expect(page.getByRole("alert")).toContainText("Inscription réussie ! Vous pouvez maintenant vous connecter.")

})