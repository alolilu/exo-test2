const convertirMontant = require("./convertirMontant");

describe("Tests de conversion monétaire", () => {
  test("convertirMontant(100, 1.2) doit retourner 120", () => {
    expect(convertirMontant(100, 1.2)).toBe(120);
  });

  test("Si montant est négatif, une erreur doit être levée", () => {
    expect(() => convertirMontant(-100, 1.2)).toThrow(
      "Le montant et le taux doivent être positifs."
    );
  });

  test("Si taux est négatif, une erreur doit être levée", () => {
    expect(() => convertirMontant(100, -1.2)).toThrow(
      "Le montant et le taux doivent être positifs."
    );
  });

  test("Si montant et taux sont négatifs, une erreur doit être levée", () => {
    expect(() => convertirMontant(-100, -1.2)).toThrow(
      "Le montant et le taux doivent être positifs."
    );
  });

  test("Tester avec un taux de 0, doit retourner 0", () => {
    expect(convertirMontant(100, 0)).toBe(0);
  });

  test("Tester avec un très grand montant", () => {
    const grandMontant = 1e6;
    const taux = 1.5;
    expect(convertirMontant(grandMontant, taux)).toBe(1.5e6);
  });

  test("Tester avec un taux extrêmement élevé", () => {
    const montant = 100;
    const taux = 1e6;
    expect(convertirMontant(montant, taux)).toBe(1e8);
  });
});
