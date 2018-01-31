describe('Valida formulario', function(){

	it('valida primer campo vacio', function(){
		// expect (mi funcion al testear).operador(salida);
		expect(validar("","a").toEqual(false));
	});

	it('valida segundo campo vacio', function(){
		// expect (mi funcion al testear).operador(salida);
		expect(validar("a","").toEqual(false));
	});

	it('valida ok', function(){
		// expect (mi funcion al testear).operador(salida);
		expect(validar("a","a").toEqual(true));
	});

});
