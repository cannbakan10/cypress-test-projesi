describe("Login E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Başarılı giriş", () => {
    cy.get('input[placeholder="Email giriniz"]').type("test@mail.com");
    cy.get('input[placeholder="Şifre giriniz"]').type("123456");
    cy.get('input[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("Başarıyla giriş yapıldı!").should("exist");
  });

  it("Geçersiz email hatası", () => {
    cy.get('input[placeholder="Email giriniz"]').type("testmail.com");
    cy.get('input[placeholder="Şifre giriniz"]').type("123456");
    cy.get('input[type="checkbox"]').check();
    cy.get('button').click();
    cy.contains("Geçerli email giriniz").should("exist");
  });
});
