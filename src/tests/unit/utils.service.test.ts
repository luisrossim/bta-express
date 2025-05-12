import { UtilsService } from '../../utils/utils.service';

describe("UtilsService (Testes Unitários)", () => {
  describe("parseParamToValidNumber", () => {
    it("deve retornar o número válido", () => {
      const result = UtilsService.parseParamToValidNumber("1");
      expect(result).toBe(1);
    });

    it("deve lançar erro para número negativo", () => {
      expect(() => UtilsService.parseParamToValidNumber("-5")).toThrow('Parâmetros numéricos inválidos.');
    });

    it("deve lançar erro para valor inválido", () => {
      expect(() => UtilsService.parseParamToValidNumber("abc")).toThrow('Parâmetros numéricos inválidos.');
    });

    it("deve lançar erro para zero", () => {
      expect(() => UtilsService.parseParamToValidNumber("0")).toThrow('Parâmetros numéricos inválidos.');
    });
  });


  describe("parseIntervalToValidDate", () => {
    it("deve retornar datas válidas", () => {
      const result = UtilsService.parseIntervalToValidDate("01/01/2024", "31/01/2024");
      expect(result.dataInicialParsed).toBeInstanceOf(Date);
      expect(result.dataFinalParsed).toBeInstanceOf(Date);
      expect(result.dataFinalParsed.getHours()).toBe(23);
      expect(result.dataFinalParsed.getMinutes()).toBe(59);
      expect(result.dataFinalParsed.getSeconds()).toBe(59);
      expect(result.dataFinalParsed.getMilliseconds()).toBe(999);
    });

    it("deve lançar erro para datas inválidas", () => {
      expect(() => UtilsService.parseIntervalToValidDate("32/01/2024", "31/01/2024")).toThrow('Intervalo de data inválido.');
    });

    it("deve lançar erro para datas vazias", () => {
      expect(() => UtilsService.parseIntervalToValidDate("", "31/01/2024")).toThrow('Intervalo de data inexistente.');
      expect(() => UtilsService.parseIntervalToValidDate("01/01/2024", "")).toThrow('Intervalo de data inexistente.');
    });
  });


  describe("parseStringToValidDate", () => {
    it("deve retornar uma data válida", () => {
      const result = UtilsService.parseStringToValidDate("01/01/2024");
      expect(result).toBeInstanceOf(Date);
    });

    it("deve lançar erro para data inválida", () => {
      expect(() => UtilsService.parseStringToValidDate("32/01/2024")).toThrow('Data inválida.');
      expect(() => UtilsService.parseStringToValidDate(" ")).toThrow('Data inválida.');
    });

    it("deve lançar erro para data vazia", () => {
      expect(() => UtilsService.parseStringToValidDate("")).toThrow('Data inexistente.');
    });
  });


  describe("parseStringToBoolean", () => {
    it("deve retornar true para valores verdadeiros", () => {
      expect(UtilsService.parseStringToBoolean("true")).toBe(true);
      expect(UtilsService.parseStringToBoolean("1")).toBe(true);
    });

    it("deve retornar false para valores falsos", () => {
      expect(UtilsService.parseStringToBoolean("false")).toBe(false);
      expect(UtilsService.parseStringToBoolean("0")).toBe(false);
    });

    it("deve lançar erro para valor inválido", () => {
      expect(() => UtilsService.parseStringToBoolean("invalido")).toThrow('Parâmetro de status inválido.');
    });

    it("deve ser case insensitive", () => {
      expect(UtilsService.parseStringToBoolean("TRUE")).toBe(true);
      expect(UtilsService.parseStringToBoolean("FALSE")).toBe(false);
    });
  });


  describe("formatarValor", () => {
    it("deve formatar número com duas casas decimais", () => {
      expect(UtilsService.formatPriceToBRL(1234.56)).toBe("1.234,56");
    });

    it("deve formatar número inteiro com duas casas decimais", () => {
      expect(UtilsService.formatPriceToBRL(1234)).toBe("1.234,00");
    });

    it("deve formatar número negativo", () => {
      expect(UtilsService.formatPriceToBRL(-1234.56)).toBe("-1.234,56");
    });

    it("deve formatar zero", () => {
      expect(UtilsService.formatPriceToBRL(0)).toBe("0,00");
    });
  });


  describe("removeEmptyFields", () => {
    it("deve retornar um objeto filtrando somente por campos válidos", () => {
      const resultado = UtilsService.removeEmptyFields({
        id: null,
        name: "Luis",
        city: ""
      });

      expect(resultado).toEqual({
        name: "Luis"
      });
    });

    it("deve retornar o mesmo objeto", () => {
      const obj = {
        id: 1,
        name: "Luis",
        city: "Tokyo"
      }

      const resultado = UtilsService.removeEmptyFields(obj);
      expect(resultado).toEqual(obj);
    });

    it("deve retornar um objeto vazio", () => {
      const obj = {
        id: null,
        name: undefined,
        city: ""
      }

      const resultado = UtilsService.removeEmptyFields(obj);
      expect(resultado).toEqual({});
    });
  });

});

