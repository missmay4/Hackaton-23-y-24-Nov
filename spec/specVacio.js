describe('Valida formulario', function(){

	it('valida campo vacio', function(){
		// expect (mi funcion al testear).operador(salida);
		expect(validar(true).toEqual(false));
	});

	it('valida muchos caracteres', function(){
		expect(validar(true).toEqual(false));
	});
});
